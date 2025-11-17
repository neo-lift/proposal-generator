'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ProposalGenerator() {
  const [inputText, setInputText] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: { inputText: string }) => {
    console.log(data.inputText);
    setInputText(data.inputText);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Generate Proposal from Event Brief</CardTitle>
          <CardDescription>
            Enter the details of your event and click the button below to generate a proposal.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Label htmlFor="event-name" className="block text-sm font-medium text-gray-700">Event Name</Label>
              <Textarea
                id="input-text"
                placeholder="Paste your event description, meeting notes, email, or transcription here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={10}
                className="font-mono text-sm w-full"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter> <Button type="submit" className="w-full">Generate Proposal</Button> </CardFooter>
      </Card>
    </div>
  );
}