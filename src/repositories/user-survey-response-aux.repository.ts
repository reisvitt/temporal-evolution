import { PrismaClient } from "@prisma/client";
import { UserSurveyResponseRepository } from "../interfaces/user-survey-response-aux-repository.interface";
import { UserSurveyResponseAux } from "../models/user-survey-response-aux.model";

export class UserSurveyResponseAuxRepository implements UserSurveyResponseRepository {

  constructor(private prisma: PrismaClient){}

  async findAll(): Promise<UserSurveyResponseAux[]> {
    const data = await this.prisma.user.findMany();
    return data.map((u: any) => new UserSurveyResponseAux(u.id, u.name, u.email));
  }

  async findById(id: number): Promise<UserSurveyResponseAux | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? new UserSurveyResponseAux(user.id, user.name, user.email) : null;
  }
}