'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { sampleRFPCases } from "@/data/samples";
import { useState } from "react";
import { useProposalMutation } from "@/hooks/use-proposal-mutation";

export default function ProposalGenerator() {
  const [inputText, setInputText] = useState<string>('');
  const [proposalType, setProposalType] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const proposalMutation = useProposalMutation();

  const handleGenerateProposal = async () => {
    if (!inputText) {
      setError('Please enter an event description');
      return;
    }

    if (!proposalType) {
      setError('Please select a proposal type');
      return;
    }

    setError(null);

    proposalMutation.mutate({
      customer: {
        customerName: 'John Doe',
        customerEmail: 'john.doe@example.com',
        companyName: 'Example Inc.',
      },
      event: {
        eventType: proposalType,
        startDate: '2024-06-01',
        endDate: '2024-06-03',
        guestCount: 100,
        roomsNeeded: 10,
      },
      preferences: {
        meetingSpaces: true,
        catering: true,
        tone: 'professional',
        additionalBrief: inputText,
      },
    }, {
      onError: (error) => {
        setError(error instanceof Error ? error.message : 'Failed to generate proposal');
      },
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Generate Proposal from RFP</CardTitle>
          <CardDescription>
            Paste RFPs, meeting transcriptions, or any text describing an event.
            Our AI will analyze it and create a professional hotel proposal.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="input-text" className="block text-sm font-medium text-gray-700">RFP Type</Label>
            <Input id="proposal-type"
              placeholder="e.g., Corporate Event, Wedding, Conference"
              value={proposalType}
              onChange={(e) => setProposalType(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-text" className="block text-sm font-medium text-gray-700">Event Description</Label>
            <Textarea
              id="input-text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your event description, meeting notes, email, or transcription here..."
              rows={10}
              className="font-mono text-sm w-full h-full"
              style={{ height: '200px' }}
            />

            <div className="space-y-2 mt-8">
              <p className="text-sm text-gray-600">Try an example:</p>
              <div className="flex flex-wrap gap-2">
                {sampleRFPCases.map((example, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="lg"
                    className="font-medium cursor-pointer"
                    onClick={() => {
                      setInputText(example.preferences.additionalBrief);
                      setProposalType(example.event.eventType);
                    }}
                  >
                    {example.event.eventType} - {example.customer.companyName}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full cursor-pointer font-medium"
            disabled={proposalMutation.isPending || !inputText || !proposalType}
            onClick={handleGenerateProposal}
          >
            {proposalMutation.isPending ? 'Thinking...' : 'Next'}
          </Button>
        </CardFooter>
      </Card>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}