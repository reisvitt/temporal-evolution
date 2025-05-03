import { UserSurveyResponseAux } from "../models/user-survey-response-aux.model";

export interface UserSurveyResponseRepository {
  findAll(): Promise<UserSurveyResponseAux[]>;
  findById(id: number): Promise<UserSurveyResponseAux | null>;
}