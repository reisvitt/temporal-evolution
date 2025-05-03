import { Axios } from "axios";
import { Period } from "../../models/period.model";
import { TuserResponseSchema } from "../../validators/period.validators";
import { api } from "../api";

export class DashboardService {
  private api: Axios
  constructor(){
    this.api = api
  }

  async getPeriod(params?: TuserResponseSchema): Promise<Period[]>{
    const result = await this.api.get<Period[]>("/dashboard/users-surveys-responses", { params })

    return result.data
  }
}