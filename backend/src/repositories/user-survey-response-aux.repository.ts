import { Pool } from "pg";
import { UserSurveyResponseRepository } from "../interfaces/user-survey-response-aux-repository.interface";
import { UserSurveyResponseAux } from "../models/user-survey-response-aux.model";
import { TUsersSurveysResponseParams } from "../validators/users-surveys-response.params.validators";
import { INTERVAL_ENUM } from "../enums/interval.enum";
import { UserSurveyResponsePeriod } from "../models/user-survey-response-period.model";

export class UserSurveyResponseAuxRepository implements UserSurveyResponseRepository {

  constructor(private database: Pool){}

  async findAll(): Promise<UserSurveyResponseAux[]> {
    const data = await this.database.query("SELECT * FROM inside.users_surveys_responses_aux")
    return data.rows.map((u: any) => new UserSurveyResponseAux(u.id, u.origin, u.responseStatusId, new Date(u.createdAt)));
  }

  async findById(id: number): Promise<UserSurveyResponseAux | null> {
    const result = await this.database.query("SELECT * FROM inside.users_surveys_responses_aux WHERE id = $1", [id])

    if(!result) {
      throw new Error("Erro na busca")
    }

    if(result.rows.length === 0){
      return null
    }

    const userR = result.rows[0]
    
    return userR ? new UserSurveyResponseAux(userR.id, userR.origin, userR.responseStatusId, userR.createdAt) : null;
  }

  async withParams(params: TUsersSurveysResponseParams): Promise<UserSurveyResponsePeriod[]> {
    const groupByClause = this.getGroupByClause(params.interval);
    
    let query = `
      SELECT 
        ${groupByClause},
        COUNT(*) AS count
      FROM inside.users_surveys_responses_aux
      WHERE
        ($1::TIMESTAMP IS NULL OR created_at >= $1) AND
        ($2::TIMESTAMP IS NULL OR created_at <= $2) AND
        ($3::VARCHAR IS NULL OR origin = $3) AND
        ($4::INTEGER IS NULL OR response_status_id = $4)
      GROUP BY
          period,
          origin,
          response_status_id
      ORDER BY period, origin, response_status_id
    `;

    const values = [
      params.from || null,
      params.to || null,
      params.origin || null,
      params.status || null,
    ]

    console.log("query", query)
    console.log("values", values)

    const { rows } = await this.database.query(query, values);
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