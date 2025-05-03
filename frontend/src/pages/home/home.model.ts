import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Period } from "../../models/period.model";
import { DashboardService } from "../../services/dashboard/dashboard.service";

export const useHomeModel = () => {
  const [periods, setPeriods] = useState<Period[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onLoad = async (): Promise<void> => {
    setLoading(true);
    try {
      const service = new DashboardService();
      const response: Period[] = await service.getPeriod()

      setPeriods(response);
    } catch (error) {
      toast.error( (error as Error).message ||
      "Falha ao carregar periodos. Tente novamente mais tarde.",)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return {
    periods,
    loading,
  };
};
