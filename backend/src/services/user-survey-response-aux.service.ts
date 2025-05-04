import { UserSurveyResponseAux } from "../models/user-survey-response-aux.model";
import { UserSurveyResponseOrigin } from "../models/user-survey-response-origin.model";
import { UserSurveyResponsePeriod } from "../models/user-survey-response-period.model";
import { UserSurveyResponseAuxRepository } from "../repositories/user-survey-response-aux.repository";
import { TUsersSurveysResponseByOrigin, TUsersSurveysResponseParams } from "../validators/users-surveys-response.params.validators";

export class UserSurveyResponseAuxService {
  constructor(private userRepository: UserSurveyResponseAuxRepository) {}

  async getAllUsersSurveysResponses(): Promise<UserSurveyResponseAux[]> {
    return this.userRepository.findAll();
  }

  async getUsersSurveysResponsesByPeriod(params: TUsersSurveysResponseParams): Promise<UserSurveyResponsePeriod[]> {
    return this.userRepository.byPeriod(params)
  }

  async getUsersSurveysResponsesByOrigin(params: TUsersSurveysResponseByOrigin): Promise<UserSurveyResponseOrigin[]> {
    return this.userRepository.byOrigin(params)
  }

  async getUserSurveyResponseById(id: number): Promise<UserSurveyResponseAux | null> {
    return this.userRepository.findById(id);
  }

  async getUserSurveyResponseOriginByPeriodCount(params: TUsersSurveysResponseParams): Promise<UserSurveyResponseOrigin[]> {
    return this.userRepository.originByPeriodCount(params);
  }
}