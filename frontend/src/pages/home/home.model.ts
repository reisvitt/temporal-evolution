import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Period } from "../../models/period.model";
import { DashboardService } from "../../services/dashboard/dashboard.service";
import { TuserResponseSchema } from "@/validators/period.validators";
import { Origin } from "@/models/origin.model";
import { INTERVAL_ENUM } from "@/enums/interval.enum";
import { OriginPeriodCount } from "@/models/origin-period-count.model";

export const useHomeModel = () => {
  const [periods, setPeriods] = useState<Period[]>([]);
  const [origins, setOrigins] = useState<Origin[]>([]);
  const [originPeriodCount, setOriginPeriodCount] = useState<OriginPeriodCount[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onLoad = async (values?: TuserResponseSchema): Promise<void> => {
    setLoading(true);
    
    const service = new DashboardService();

    const allRequests = []

    allRequests.push(service.getPeriod(values))
    allRequests.push(service.getOrigin(values))
    allRequests.push(service.getOriginPeriodCount(values))

    const result = await Promise.allSettled(allRequests)

    result.forEach((request, index) => {
      if(request.status === 'rejected'){
        toast.error("Falha ao carregar dados. Tente novamente mais tarde.")
        return;
      }

      switch(index){
        case 0: 
          setPeriods(request.value as Period[])
          break;
        case 1: 
          setOrigins(request.value as Origin[])
          break;
        case 2: 
        setOriginPeriodCount(request.value as OriginPeriodCount[])
          break;
      }
    })
    setLoading(false);
  };

  useEffect(() => {
   onLoad({interval: INTERVAL_ENUM.YEAR});
  }, []);

  return {
    periods,
    origins,
    originPeriodCount,
    loading,
    reload: onLoad
  };
};
