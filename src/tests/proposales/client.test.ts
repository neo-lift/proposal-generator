import { createProposal } from '@/lib/proposales/client';
import type { ProposalPayload } from '@/lib/prompt/types';

// Mock fetch
global.fetch = jest.fn();

describe('createProposal', () => {
  const mockPayload: ProposalPayload = {
    company_id: 123,
    language: 'en',
    title_md: '# Test Proposal',
    description_md: 'Test description',
    recipient: {
      email: 'test@example.com',
      first_name: 'John',
      last_name: 'Doe',
      company_name: 'Test Corp',
    },
    data: { event_date: '2024-06-01' },
    blocks: [{ content_id: 101 }],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset environment variables
    delete process.env.PROPOSALES_API_KEY;
    delete process.env.PROPOSALES_API_URL;
  });

  it('should successfully create a proposal', async () => {
    process.env.PROPOSALES_API_KEY = 'test-api-key';
    process.env.PROPOSALES_API_URL = 'https://api.proposales.com';

    const mockResponse = {
      proposal: {
        uuid: 'test-uuid-123',
        url: 'https://app.proposales.com/proposals/test-uuid-123',
      },
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await createProposal(mockPayload);

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.proposales.com/v3/proposals',
      {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer test-api-key',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(mockPayload),
      }
    );

    expect(result).toEqual({
      uuid: 'test-uuid-123',
      url: 'https://app.proposales.com/proposals/test-uuid-123',
    });
  });

  it('should use environment variables when not provided', async () => {
    process.env.PROPOSALES_API_KEY = 'env-api-key';
    process.env.PROPOSALES_API_URL = 'https://env.api.proposales.com';

    const mockResponse = {
      proposal: {
        uuid: 'test-uuid',
        url: 'https://app.proposales.com/proposals/test-uuid',
      },
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await createProposal(mockPayload);

    expect(global.fetch).toHaveBeenCalledWith(
      'https://env.api.proposales.com/v3/proposals',
      expect.objectContaining({
        headers: expect.objectContaining({
          'Authorization': 'Bearer env-api-key',
        }),
      })
    );

    expect(result).toEqual({
      uuid: 'test-uuid',
      url: 'https://app.proposales.com/proposals/test-uuid',
    });
  });

  it('should handle API errors gracefully', async () => {
    process.env.PROPOSALES_API_KEY = 'test-api-key';
    process.env.PROPOSALES_API_URL = 'https://api.proposales.com';

    const mockErrorResponse = {
      error: 'Invalid API key',
      message: 'The provided API key is not valid',
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 401,
      statusText: 'Unauthorized',
      json: async () => mockErrorResponse,
    });

    await expect(createProposal(mockPayload)).rejects.toThrow(
      'Proposales API error (401): Invalid API key'
    );
  });

  it('should handle network errors', async () => {
    process.env.PROPOSALES_API_KEY = 'test-api-key';
    process.env.PROPOSALES_API_URL = 'https://api.proposales.com';

    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Network error')
    );

    await expect(createProposal(mockPayload)).rejects.toThrow(
      'Error creating proposal: Error: Network error'
    );
  });

  it('should throw error when API key is missing', async () => {
    // Environment variables are already deleted in beforeEach
    await expect(
      createProposal(mockPayload)
    ).rejects.toThrow('PROPOSALES_API_KEY and PROPOSALES_API_URL must be set');
  });

  it('should handle non-JSON error responses', async () => {
    process.env.PROPOSALES_API_KEY = 'test-api-key';
    process.env.PROPOSALES_API_URL = 'https://api.proposales.com';

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: async () => {
        throw new Error('Invalid JSON');
      },
      text: async () => 'Internal server error occurred',
    });

    await expect(createProposal(mockPayload)).rejects.toThrow(
      'Proposales API error (500): Internal server error occurred'
    );
  });
});