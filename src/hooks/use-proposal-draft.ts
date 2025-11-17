import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PROPOSAL_DRAFT_QUERY_KEY, type ProposalDraftData } from './use-proposal-mutation';

export function useProposalDraft() {
  const queryClient = useQueryClient();

  // Use useQuery to subscribe to cache updates
  // This will automatically re-render when the cache is updated
  return useQuery<ProposalDraftData | undefined>({
    queryKey: PROPOSAL_DRAFT_QUERY_KEY,
    queryFn: () => {
      // Get data from cache
      return queryClient.getQueryData<ProposalDraftData>(
        PROPOSAL_DRAFT_QUERY_KEY,
      );
    },
    enabled: true, // Always enabled to subscribe to cache updates
    staleTime: Infinity, // Keep the data fresh indefinitely
    gcTime: Infinity, // Never garbage collect
    refetchOnMount: false, // Don't refetch, just read from cache
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

