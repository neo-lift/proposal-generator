-- CreateTable
CREATE TABLE "proposal_logs" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customer_email" VARCHAR(255) NOT NULL,
    "proposal_uuid" VARCHAR(255) NOT NULL,
    "summary" TEXT NOT NULL,
    "company_name" VARCHAR(255),
    "event_type" VARCHAR(255),

    CONSTRAINT "proposal_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "proposal_logs_created_at_idx" ON "proposal_logs"("created_at" DESC);

-- CreateIndex
CREATE INDEX "proposal_logs_customer_email_idx" ON "proposal_logs"("customer_email");

-- CreateIndex
CREATE INDEX "proposal_logs_proposal_uuid_idx" ON "proposal_logs"("proposal_uuid");
