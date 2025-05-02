import { UserSurveyResponseAux } from "../models/user-survey-response-aux.model";
import { UserSurveyResponsePeriod } from "../models/user-survey-response-period.model";
import { UserSurveyResponseAuxRepository } from "../repositories/user-survey-response-aux.repository";
import { TUsersSurveysResponseParams } from "../validators/users-surveys-response.params.validators";

export class UserSurveyResponseAuxService {
  constructor(private userRepository: UserSurveyResponseAuxRepository) {}

  async getAllUsersSurveysResponses(): Promise<UserSurveyResponseAux[]> {
    return this.userRepository.findAll();
  }

  async getUsersSurveysResponsesFilters(params: TUsersSurveysResponseParams): Promise<UserSurveyResponsePeriod[]> {
    return this.userRepository.withParams(params)
  }

  async getUsersSurveysResponsesBySemester(params: TUsersSurveysResponseParams): Promise<UserSurveyResponseAux[]> {
  
    return this.userRepository.findAll();
  }

  async getUserSurveyResponseById(id: number): Promise<UserSurveyResponseAux | null> {
    return this.userRepository.findById(id);
  }
}