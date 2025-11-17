import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="container mx-auto space-y-8 py-12 max-w-4xl">
      {/* Header Skeleton */}
      <header className="space-y-2">
        <div className="h-4 w-32 bg-muted animate-pulse rounded" />
        <div className="h-8 w-80 bg-muted animate-pulse rounded" />
        <div className="h-4 w-full max-w-2xl bg-muted animate-pulse rounded" />
      </header>

      {/* Generated Proposal Card Skeleton */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <div className="h-6 w-48 bg-muted animate-pulse rounded" />
          <div className="h-4 w-64 bg-muted animate-pulse rounded mt-2" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <div className="h-4 w-24 bg-muted animate-pulse rounded" />
            <div className="h-10 w-full bg-muted animate-pulse rounded" />
          </div>
          <div className="grid gap-2">
            <div className="h-4 w-24 bg-muted animate-pulse rounded" />
            <div className="h-10 w-full bg-muted animate-pulse rounded" />
          </div>
        </CardContent>
      </Card>

      {/* Form Cards Skeleton */}
      <div className="space-y-6">
        {/* Company & Contact Card */}
        <Card>
          <CardHeader>
            <div className="h-6 w-40 bg-muted animate-pulse rounded" />
            <div className="h-4 w-64 bg-muted animate-pulse rounded mt-2" />
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <div className="h-4 w-24 bg-muted animate-pulse rounded" />
              <div className="h-10 w-full bg-muted animate-pulse rounded" />
            </div>
            <div className="grid gap-2">
              <div className="h-4 w-20 bg-muted animate-pulse rounded" />
              <div className="h-10 w-full bg-muted animate-pulse rounded" />
            </div>
            <div className="grid gap-2 md:col-span-2">
              <div className="h-4 w-28 bg-muted animate-pulse rounded" />
              <div className="h-10 w-full bg-muted animate-pulse rounded" />
            </div>
          </CardContent>
        </Card>

        {/* Branding Assets Card */}
        <Card>
          <CardHeader>
            <div className="h-6 w-36 bg-muted animate-pulse rounded" />
            <div className="h-4 w-72 bg-muted animate-pulse rounded mt-2" />
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <div className="h-4 w-40 bg-muted animate-pulse rounded" />
              <div className="h-10 w-full bg-muted animate-pulse rounded" />
            </div>
            <div className="grid gap-2">
              <div className="h-4 w-44 bg-muted animate-pulse rounded" />
              <div className="h-10 w-full bg-muted animate-pulse rounded" />
            </div>
            <div className="grid gap-2 md:col-span-2">
              <div className="h-4 w-32 bg-muted animate-pulse rounded" />
              <div className="h-32 w-full bg-muted animate-pulse rounded" />
            </div>
          </CardContent>
        </Card>

        {/* Storytelling Card */}
        <Card>
          <CardHeader>
            <div className="h-6 w-28 bg-muted animate-pulse rounded" />
            <div className="h-4 w-64 bg-muted animate-pulse rounded mt-2" />
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <div className="h-4 w-16 bg-muted animate-pulse rounded" />
              <div className="h-10 w-full bg-muted animate-pulse rounded" />
            </div>
            <div className="grid gap-2">
              <div className="h-4 w-24 bg-muted animate-pulse rounded" />
              <div className="h-48 w-full bg-muted animate-pulse rounded" />
            </div>
          </CardContent>
        </Card>

        {/* Recipient Card */}
        <Card>
          <CardHeader>
            <div className="h-6 w-24 bg-muted animate-pulse rounded" />
            <div className="h-4 w-48 bg-muted animate-pulse rounded mt-2" />
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`grid gap-2 ${i === 4 ? 'md:col-span-2' : ''}`}
              >
                <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                <div className="h-10 w-full bg-muted animate-pulse rounded" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Event Data Card */}
        <Card>
          <CardHeader>
            <div className="h-6 w-28 bg-muted animate-pulse rounded" />
            <div className="h-4 w-80 bg-muted animate-pulse rounded mt-2" />
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="grid gap-2">
                <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                <div className="h-10 w-full bg-muted animate-pulse rounded" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Commercial Blocks Card */}
        <Card>
          <CardHeader>
            <div className="h-6 w-40 bg-muted animate-pulse rounded" />
            <div className="h-4 w-64 bg-muted animate-pulse rounded mt-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 bg-muted animate-pulse rounded" />
              <div className="h-4 w-32 bg-muted animate-pulse rounded" />
            </div>
            <div className="grid gap-4">
              <div className="h-4 w-16 bg-muted animate-pulse rounded" />
              <div className="grid gap-4 md:grid-cols-2">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="grid gap-2">
                    <div className="h-4 w-32 bg-muted animate-pulse rounded" />
                    <div className="h-10 w-full bg-muted animate-pulse rounded" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attachments Card */}
        <Card>
          <CardHeader>
            <div className="h-6 w-28 bg-muted animate-pulse rounded" />
            <div className="h-4 w-80 bg-muted animate-pulse rounded mt-2" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="grid gap-4 border p-4 md:grid-cols-3"
              >
                <div className="grid gap-2">
                  <div className="h-4 w-16 bg-muted animate-pulse rounded" />
                  <div className="h-10 w-full bg-muted animate-pulse rounded" />
                </div>
                <div className="grid gap-2">
                  <div className="h-4 w-20 bg-muted animate-pulse rounded" />
                  <div className="h-10 w-full bg-muted animate-pulse rounded" />
                </div>
                <div className="grid gap-2">
                  <div className="h-4 w-12 bg-muted animate-pulse rounded" />
                  <div className="h-10 w-full bg-muted animate-pulse rounded" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Next Step Card */}
        <Card>
          <CardHeader>
            <div className="h-6 w-24 bg-muted animate-pulse rounded" />
            <div className="h-4 w-64 bg-muted animate-pulse rounded mt-2" />
          </CardHeader>
          <CardContent>
            <div className="h-4 w-full max-w-md bg-muted animate-pulse rounded" />
          </CardContent>
          <CardFooter className="justify-between">
            <div className="h-4 w-48 bg-muted animate-pulse rounded" />
            <div className="h-10 w-32 bg-muted animate-pulse rounded" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

