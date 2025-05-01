-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "inside";

-- CreateTable
CREATE TABLE "inside"."users_surveys_responses_aux" (
    "id" INTEGER NOT NULL,
    "origin" TEXT NOT NULL,
    "response_status_id" INTEGER NOT NULL,

    CONSTRAINT "users_surveys_responses_aux_pkey" PRIMARY KEY ("id")
);
