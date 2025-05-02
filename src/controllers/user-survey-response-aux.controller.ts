import { Request, Response } from 'express';
import { UserSurveyResponseAuxService } from '../services/user-survey-response-aux.service';
import { usersSurveysResponseParamsSchema } from '../validators/users-surveys-response.params.validators';

export class UserSurveyResponseAuxController {
  constructor(private userService: UserSurveyResponseAuxService) {}

  async getAllUsersSurveyResponses(req: Request, res: Response) {
    const users = await this.userService.getAllUsersSurveysResponses();
    res.json(users);
  }

  async getUsersSurveyResponsesPeriod(req: Request, res: Response) {
    const parsed = usersSurveysResponseParamsSchema.safeParse(req.query)

    if(parsed.error){
      res.status(400).json({
        message: parsed.error.errors.map(error => error.message).join("; "),
      })
      return
    }

    const users = await this.userService.getUsersSurveysResponsesFilters(parsed.data);
    res.json(users);
  }

  async getUserSurveyResponseById(req: Request, res: Response) {
    const user = await this.userService.getUserSurveyResponseById(Number(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }
}