import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { sampleProposalPayloads } from '@/data/samples';
import GeneratedProposal from '@/components/preview/generated-proposal';

const proposal = sampleProposalPayloads[0];

export default function Preview() {
  return (
    <div className="container mx-auto space-y-8 py-12 max-w-4xl">
      <header className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-muted-foreground">
          Proposal preview
        </p>
        <h1 className="text-3xl font-semibold">
          Complete the proposal details
        </h1>
        <p className="text-muted-foreground">
          Populate the fields below to generate a hotel proposal draft. Values
          are pre-filled from a sample payload to guide you.
        </p>
      </header>

      <GeneratedProposal />

      <form className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Company & Contact</CardTitle>
            <CardDescription>
              Identify the owning company and point of contact.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="company_id">Company ID</Label>
              <Input
                id="company_id"
                name="company_id"
                type="number"
                defaultValue={proposal.company_id}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="language">Language</Label>
              <Input
                id="language"
                name="language"
                defaultValue={proposal.language}
              />
            </div>
            <div className="grid gap-2 md:col-span-2">
              <Label htmlFor="contact_email">Contact Email</Label>
              <Input
                id="contact_email"
                name="contact_email"
                type="email"
                defaultValue={proposal.contact_email}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Branding Assets</CardTitle>
            <CardDescription>
              Configure background imagery and optional video assets.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="background_image_id">Background Image ID</Label>
              <Input
                id="background_image_id"
                name="background_image.id"
                type="number"
                defaultValue={proposal.background_image.id}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="background_image_uuid">
                Background Image UUID
              </Label>
              <Input
                id="background_image_uuid"
                name="background_image.uuid"
                defaultValue={proposal.background_image.uuid}
              />
            </div>
            <div className="grid gap-2 md:col-span-2">
              <Label htmlFor="background_video_json">Background Video</Label>
              <Textarea
                id="background_video_json"
                name="background_video"
                placeholder="Paste JSON configuration for background video"
                defaultValue={JSON.stringify(proposal.background_video, null, 2)}
                className="min-h-[120px]"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Storytelling</CardTitle>
            <CardDescription>
              Craft the title and description shown in the proposal.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title_md">Title</Label>
              <Input
                id="title_md"
                name="title_md"
                defaultValue={proposal.title_md}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description_md">Description</Label>
              <Textarea
                id="description_md"
                name="description_md"
                className="min-h-[180px]"
                defaultValue={proposal.description_md}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recipient</CardTitle>
            <CardDescription>Who will receive the proposal.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="recipient_first_name">First Name</Label>
              <Input
                id="recipient_first_name"
                name="recipient.first_name"
                defaultValue={proposal.recipient.first_name}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="recipient_last_name">Last Name</Label>
              <Input
                id="recipient_last_name"
                name="recipient.last_name"
                defaultValue={proposal.recipient.last_name}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="recipient_email">Email</Label>
              <Input
                id="recipient_email"
                name="recipient.email"
                type="email"
                defaultValue={proposal.recipient.email}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="recipient_phone">Phone</Label>
              <Input
                id="recipient_phone"
                name="recipient.phone"
                defaultValue={proposal.recipient.phone}
              />
            </div>
            <div className="grid gap-2 md:col-span-2">
              <Label htmlFor="recipient_company">Company</Label>
              <Input
                id="recipient_company"
                name="recipient.company_name"
                defaultValue={proposal.recipient.company_name}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Event Data</CardTitle>
            <CardDescription>
              Logistics that inform pricing, accommodation, and scheduling.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="event_name">Event Name</Label>
              <Input
                id="event_name"
                name="data.event_name"
                defaultValue={proposal.data.event_name}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event_type">Event Type</Label>
              <Input
                id="event_type"
                name="data.event_type"
                defaultValue={proposal.data.event_type}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="start_date">Start Date</Label>
              <Input
                id="start_date"
                name="data.start_date"
                type="date"
                defaultValue={proposal.data.start_date}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="end_date">End Date</Label>
              <Input
                id="end_date"
                name="data.end_date"
                type="date"
                defaultValue={proposal.data.end_date}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nights">Nights</Label>
              <Input
                id="nights"
                name="data.nights"
                type="number"
                defaultValue={proposal.data.nights}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="participants">Participants</Label>
              <Input
                id="participants"
                name="data.participants"
                type="number"
                defaultValue={proposal.data.participants}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Input
                id="timezone"
                name="data.timezone"
                defaultValue={proposal.data.timezone}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="rfp_id">RFP ID</Label>
              <Input
                id="rfp_id"
                name="data.rfp_id"
                type="number"
                defaultValue={proposal.data.rfp_id}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lead_source">Lead Source</Label>
              <Input
                id="lead_source"
                name="data.lead_source"
                defaultValue={proposal.data.lead_source}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="owner_email">Internal Owner Email</Label>
              <Input
                id="owner_email"
                name="data.internal_owner_email"
                type="email"
                defaultValue={proposal.data.internal_owner_email}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Commercial Blocks</CardTitle>
            <CardDescription>
              Manage invoicing and modular content blocks.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-3">
              <input
                id="invoicing_enabled"
                name="invoicing_enabled"
                type="checkbox"
                defaultChecked={proposal.invoicing_enabled}
                className="size-4 rounded border"
              />
              <Label htmlFor="invoicing_enabled" className="font-medium">
                Invoicing enabled
              </Label>
            </div>
            <div className="grid gap-4">
              <p className="text-sm font-semibold text-muted-foreground">
                Blocks
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {proposal.blocks.map((block, index) => (
                  <div key={`block-${index}`} className="grid gap-2">
                    <Label htmlFor={`block-${index}-content`}>
                      Block {index + 1} content ID
                    </Label>
                    <Input
                      id={`block-${index}-content`}
                      name={`blocks.${index}.content_id`}
                      type="number"
                      defaultValue={block.content_id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attachments</CardTitle>
            <CardDescription>
              Documents and supplements included in the proposal package.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {proposal.attachments.map((attachment, index) => (
              <div
                key={`attachment-${attachment.name}`}
                className="grid gap-4 border p-4 md:grid-cols-3"
              >
                <div className="grid gap-2">
                  <Label htmlFor={`attachment-${index}-name`}>Name</Label>
                  <Input
                    id={`attachment-${index}-name`}
                    name={`attachments.${index}.name`}
                    defaultValue={attachment.name}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor={`attachment-${index}-mime`}>
                    MIME Type
                  </Label>
                  <Input
                    id={`attachment-${index}-mime`}
                    name={`attachments.${index}.mime_type`}
                    defaultValue={attachment.mime_type}
                  />
                </div>
                <div className="grid gap-2 md:col-span-1 md:col-start-auto md:row-span-1">
                  <Label htmlFor={`attachment-${index}-url`}>URL</Label>
                  <Input
                    id={`attachment-${index}-url`}
                    name={`attachments.${index}.url`}
                    defaultValue={attachment.url}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Step</CardTitle>
            <CardDescription>
              Review the information and move to the preview step.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Once everything looks correct, generate a preview to share with
              the customer for approval.
            </p>
          </CardContent>
          <CardFooter className="justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              Next: Generate and share the preview link
            </span>
            <Button type="submit">Generate preview</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
