'use client';

import {Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useProposalDraft } from '@/hooks/use-proposal-draft';

export default function GeneratedProposal() {
  const { data: proposalDraft, isLoading } = useProposalDraft();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!proposalDraft) {
    return <div>No proposal draft found</div>;
  }

  return (
    <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle>Generated Proposal</CardTitle>
            <CardDescription>
              Your proposal has been generated successfully.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label>Proposal UUID</Label>
              <Input value={proposalDraft.response.uuid} readOnly />
            </div>
            <div className="grid gap-2">
              <Label>Proposal URL</Label>
              <Input value={proposalDraft.response.url} readOnly />
            </div>
            {proposalDraft.request && (
              <>
                <div className="grid gap-2">
                  <Label>Event Type</Label>
                  <Input value={proposalDraft.request.event.eventType} readOnly />
                </div>
                <div className="grid gap-2">
                  <Label>Start Date</Label>
                  <Input value={proposalDraft.request.event.startDate} readOnly />
                </div>
              </>
            )}
          </CardContent>
        </Card>
  );
}