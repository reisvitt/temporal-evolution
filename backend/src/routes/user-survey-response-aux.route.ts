import express from 'express';
import { UserSurveyResponseAuxController } from '../controllers/user-survey-response-aux.controller';
import { UserSurveyResponseAuxRepository } from '../repositories/user-survey-response-aux.repository';
import { UserSurveyResponseAuxService } from '../services/user-survey-response-aux.service';
import Pool from '../config/database';

const userRepo = new UserSurveyResponseAuxRepository(Pool);
const userService = new UserSurveyResponseAuxService(userRepo);
const userController = new UserSurveyResponseAuxController(userService);

const router = express.Router();

router.get('/users-surveys-responses', (req, res) => userController.getAllUsersSurveyResponses(req, res));
router.get('/users-surveys-responses/:id', (req, res) => userController.getUserSurveyResponseById(req, res));
router.get('/dashboard/users-surveys-responses/period', (req, res) => userController.getUsersSurveyResponsesPeriod(req, res));
router.get('/dashboard/users-surveys-responses/origin', (req, res) => userController.getUsersSurveyResponsesOrigin(req, res));

export { router as userSurveyResponseRouter };