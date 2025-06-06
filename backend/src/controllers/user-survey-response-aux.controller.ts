import { Request, Response } from 'express';
import { UserSurveyResponseAuxService } from '../services/user-survey-response-aux.service';
import { usersSurveysResponseByOriginSchema, usersSurveysResponseParamsSchema } from '../validators/users-surveys-response.params.validators';

export class UserSurveyResponseAuxController {
  constructor(private userService: UserSurveyResponseAuxService) {}

  async getAllUsersSurveyResponses(_: Request, res: Response) {
    const users = await this.userService.getAllUsersSurveysResponses();
    res.status(200).json(users);
  }

  async getUsersSurveyResponsesPeriod(req: Request, res: Response) {
    const parsed = usersSurveysResponseParamsSchema.safeParse(req.query)

    if(!parsed?.success){
      res.status(400).json({
        message: parsed.error.errors.map(error => error.message).join("; "),
      })
      return
    }

    const users = await this.userService.getUsersSurveysResponsesByPeriod(parsed.data);
    res.status(200).json(users);
  }

  async getUsersSurveyResponsesOrigin(req: Request, res: Response) {
    const parsed = usersSurveysResponseByOriginSchema.safeParse(req.query)

    if(!parsed?.success){
      res.status(400).json({
        message: parsed.error.errors.map(error => error.message).join("; "),
      })
      return
    }

    const users = await this.userService.getUsersSurveysResponsesByOrigin(parsed.data);
    res.status(200).json(users);
  }

  async getUserSurveyResponseOriginByPeriodCount(req: Request, res: Response) {
    const parsed = usersSurveysResponseParamsSchema.safeParse(req.query)

    if(!parsed?.success){
      res.status(400).json({
        message: parsed.error.errors.map(error => error.message).join("; "),
      })
      return
    }

    const users = await this.userService.getUserSurveyResponseOriginByPeriodCount(parsed.data);
    res.status(200).json(users);
  }

  async getUserSurveyResponseStatusByPeriodCount(req: Request, res: Response) {
    const parsed = usersSurveysResponseParamsSchema.safeParse(req.query)

    if(!parsed?.success){
      res.status(400).json({
        message: parsed.error.errors.map(error => error.message).join("; "),
      })
      return
    }

    const users = await this.userService.getUserSurveyResponseStatusByPeriodCount(parsed.data);
    res.status(200).json(users);
  }

  async getUserSurveyResponseById(req: Request, res: Response) {
    if(!Number(req.params.id)){
      res.status(400).send()
      return
    }

    const user = await this.userService.getUserSurveyResponseById(Number(req.params.id));
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return
    } 

    res.status(200).json(user);
  }
}