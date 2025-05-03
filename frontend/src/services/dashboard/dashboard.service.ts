import { Axios } from "axios";
import { Period } from "../../models/period.model";
import { Origin } from "@/models/origin.model";
import { TuserResponseOriginSchema, TuserResponseSchema } from "../../validators/period.validators";
import { api } from "../api";

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
    const result = await this.api.get<Origin[]>("/dashboard/users-surveys-responses/origin", { params })

    return result.data
  }
}