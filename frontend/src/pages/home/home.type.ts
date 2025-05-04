import { TuserResponseSchema } from "@/validators/period.validators";
import { Origin } from "@/models/origin.model";
import { OriginPeriodCount } from "@/models/origin-period-count.model";
import { Period } from "@/models/period.model";

export type HomeViewProps = {
  periods: Period[];
  origins: Origin[];
  originPeriodCount: OriginPeriodCount[];
  loading: boolean;
  onSubmit: (values: TuserResponseSchema) => void
};
