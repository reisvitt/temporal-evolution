import { Request, Response } from 'express';
import { UserSurveyResponseAuxService } from '../services/user-survey-response-aux.service';

export class UserSurveyResponseAux {
  constructor(private userService: UserSurveyResponseAuxService) {}

  async getAllUsers(req: Request, res: Response) {
    const users = await this.userService.getAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const user = await this.userService.getUserById(Number(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }
}