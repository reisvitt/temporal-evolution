import { UserSurveyResponseAux } from "../models/user-survey-response-aux.model";
import { UserSurveyResponseAuxRepository } from "../repositories/user-survey-response-aux.repository";

export class UserSurveyResponseAuxService {
  constructor(private userRepository: UserSurveyResponseAuxRepository) {}

  async getAllUsers(): Promise<UserSurveyResponseAux[]> {
    return this.userRepository.findAll();
  }

  async getUserById(id: number): Promise<UserSurveyResponseAux | null> {
    return this.userRepository.findById(id);
  }
}