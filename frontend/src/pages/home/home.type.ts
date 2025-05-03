import { TuserResponseSchema } from "@/validators/period.validators";
import { Period } from "../../models/period.model";
import { Origin } from "@/models/origin.model";

export type HomeViewProps = {
  periods: Period[];
  origins: Origin[];
  loading: boolean;
  onSubmit: (values: TuserResponseSchema) => void
};
