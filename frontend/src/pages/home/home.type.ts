import { TuserResponseSchema } from "@/validators/period.validators";
import { Period } from "../../models/period.model";

export type HomeViewProps = {
  periods: Period[];
  loading: boolean;
  onSubmit: (values: TuserResponseSchema) => void
};
