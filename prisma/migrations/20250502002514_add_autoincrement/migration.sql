-- AlterTable
CREATE SEQUENCE "inside".users_surveys_responses_aux_id_seq;
ALTER TABLE "inside"."users_surveys_responses_aux" ALTER COLUMN "id" SET DEFAULT nextval('"inside".users_surveys_responses_aux_id_seq');
ALTER SEQUENCE "inside".users_surveys_responses_aux_id_seq OWNED BY "inside"."users_surveys_responses_aux"."id";
