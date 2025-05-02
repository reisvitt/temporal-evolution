import { PrismaClient } from "@prisma/client";
import { UserSurveyResponseRepository } from "../interfaces/user-survey-response-aux-repository.interface";
import { UserSurveyResponseAux } from "../models/user-survey-response-aux.model";

export class UserSurveyResponseAuxRepository implements UserSurveyResponseRepository {

  constructor(private prisma: PrismaClient){}

  async findAll(): Promise<UserSurveyResponseAux[]> {
    const data = await this.prisma.usersSurveysResponsesAux.findMany();
    return data.map((u: any) => new UserSurveyResponseAux(u.id, u.origin, u.responseStatusId, new Date(u.createdAt)));
  }

  async findById(id: number): Promise<UserSurveyResponseAux | null> {
    const user = await this.prisma.usersSurveysResponsesAux.findUnique({ where: { id } });
    return user ? new UserSurveyResponseAux(user.id, user.origin, user.responseStatusId, user.createdAt) : null;
  }
}