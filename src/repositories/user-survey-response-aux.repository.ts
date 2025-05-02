import { PrismaClient } from "@prisma/client";
import { UserSurveyResponseRepository } from "../interfaces/user-survey-response-aux-repository.interface";
import { UserSurveyResponseAux } from "../models/user-survey-response-aux.model";
import { TUsersSurveysResponseParams } from "../validators/users-surveys-response.params.validators";
import { formatDateToISO } from "../utils/date.utils";
import { INTERVAL_ENUM } from "../enums/interval.enum";
import { UserSurveyResponsePeriod } from "../models/user-survey-response-period.model";

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

  async withParams(params: TUsersSurveysResponseParams): Promise<UserSurveyResponsePeriod[]> {
    const values: (string | number)[] = [];
    const conditions: string[] = [];

    if (params.from) {
      conditions.push(`created_at >= to_timestamp($${conditions.length + 1}, \'YYYY-MM-DD\')`);
      values.push(formatDateToISO(params.from));
    }
    if (params.to) {
      conditions.push(`created_at <= to_timestamp($${conditions.length + 1}, \'YYYY-MM-DD\')`);
      values.push(formatDateToISO(params.to));
    }
    
    let where = ''
    if (conditions.length > 0) {
      where += ' WHERE ' + conditions.join(' AND ');
    }
    
    const groupByClause = this.getGroupByClause(params.interval);
    
    let query = `
      SELECT 
        ${groupByClause},
        COUNT(*) AS count
      FROM inside.users_surveys_responses_aux
      ${where}
      GROUP BY period
      ORDER BY period
    `;

    console.log("query", query)

    const rows = await this.prisma.$queryRawUnsafe(query, ...values);
    return (rows as any[]).map((row) => ({
      period: row.period,
      count: parseInt(row.count),
    }));
  }

  // Função para gerar cláusula de agrupamento com base no intervalo
  getGroupByClause(interval: INTERVAL_ENUM): string {
    switch (interval) {
      case INTERVAL_ENUM.WEEK:
        return `
          CONCAT(EXTRACT(YEAR FROM "created_at"), '-SEMANA-', 
            LPAD(EXTRACT(WEEK FROM "created_at")::TEXT, 2, '0')) AS period
          `;
      case INTERVAL_ENUM.MONTH:
        return `
          CONCAT(EXTRACT(YEAR FROM "created_at"), '-MES-', 
            LPAD(EXTRACT(MONTH FROM "created_at")::TEXT, 2, '0')) AS period
          `;
      case INTERVAL_ENUM.QUARTER:
        return `
          CONCAT(EXTRACT(YEAR FROM "created_at"), '-TRIMESTRE-', 
            EXTRACT(QUARTER FROM "created_at")) AS period
          `;
      case INTERVAL_ENUM.SEMESTER:
        return `
          CONCAT(EXTRACT(YEAR FROM "created_at"), '-SEMESTRE-', 
            CASE WHEN EXTRACT(MONTH FROM "created_at") <= 6 THEN 'S1' ELSE 'S2' END) AS period
          `;
      case INTERVAL_ENUM.YEAR:
        return `EXTRACT(YEAR FROM "created_at")::TEXT AS period`;
      default:
        throw new Error('Invalid interval');
    }
  };
}