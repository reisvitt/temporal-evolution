import { Axios } from "axios";
import { Period } from "../../models/period.model";
import { Origin } from "@/models/origin.model";
import { TuserResponseOriginSchema, TuserResponseSchema } from "../../validators/period.validators";
import { api } from "../api";
import { GenericPeriodCount } from "@/models/generic-period-count.model";

export class DashboardService {
  private api: Axios
  constructor(){
    this.api = api
  }

  async getPeriod(params?: TuserResponseSchema): Promise<Period[]>{
    const result = await this.api.get<Period[]>("/dashboard/users-surveys-responses/period", { params })

    return result.data
  }

  async getOrigin(params?: TuserResponseOriginSchema): Promise<Origin[]>{
    const result = await this.api.get<Origin[]>("/dashboard/users-surveys-responses/origin", { 
      params: {
        from: params?.from,
        to: params?.to,
        status: params?.status,
      }
     })

    return result.data
  }

  async getOriginPeriodCount(params?: TuserResponseSchema): Promise<GenericPeriodCount[]>{
    const result = await this.api.get<GenericPeriodCount[]>("/dashboard/users-surveys-responses/origin-period", { 
      params: {
        from: params?.from,
        to: params?.to,
        status: params?.status,
        interval: params?.interval,
      }
     })

    return result.data
  }

  async getStatusPeriodCount(params?: TuserResponseSchema): Promise<GenericPeriodCount[]>{
    const result = await this.api.get<GenericPeriodCount[]>("/dashboard/users-surveys-responses/status-period", { 
      params: {
        from: params?.from,
        to: params?.to,
        origin: params?.origin,
        interval: params?.interval,
      }
     })

    return result.data
  }
}