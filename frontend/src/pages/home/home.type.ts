import { TuserResponseSchema } from "@/validators/period.validators";
import { Origin } from "@/models/origin.model";
import { GenericPeriodCount } from "@/models/generic-period-count.model";
import { Period } from "@/models/period.model";

export type HomeViewProps = {
  periods: Period[];
  origins: Origin[];
  originPeriodCount: GenericPeriodCount[];
  statusPeriodCount: GenericPeriodCount[];
  loading: boolean;
  onSubmit: (values: TuserResponseSchema) => void
};
