import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import type { ProposalResponse } from '@/lib/prompt/types';

interface ProposalRequest {
  customer: {
    customerName: string;
    customerEmail: string;
    companyName: string;
  };
  event: {
    eventType: string;
    startDate: string;
    endDate: string;
    guestCount: number;
    roomsNeeded: number;
  };
  preferences: {
    meetingSpaces: boolean;
    catering: boolean;
    tone: string;
    additionalBrief?: string;
  };
}

export interface ProposalDraftData {
  response: ProposalResponse;
  request: ProposalRequest;
}

const PROPOSAL_DRAFT_QUERY_KEY = ['proposal-draft'] as const;

export function useProposalMutation() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (request: ProposalRequest): Promise<ProposalDraftData> => {
      const response = await fetch('/api/generate-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to generate proposal');
      }

      const data: ProposalResponse = await response.json();
      return {
        response: data,
        request,
      };
    },
    onSuccess: (data) => {
      // Save to TanStack Query cache
      queryClient.setQueryData<ProposalDraftData>(
        PROPOSAL_DRAFT_QUERY_KEY,
        data,
      );
      // Navigate to preview page
      router.push('/preview');
    },
  });
}

// Query key for fetching the proposal draft
export { PROPOSAL_DRAFT_QUERY_KEY };

