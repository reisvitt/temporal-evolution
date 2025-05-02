/*
  Warnings:

  - Added the required column `created_at` to the `users_surveys_responses_aux` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "inside"."users_surveys_responses_aux" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;
