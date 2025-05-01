import express from 'express';
import { UserSurveyResponseAuxController } from '../controllers/user-survey-response-aux.controller';
import { UserSurveyResponseAuxRepository } from '../repositories/user-survey-response-aux.repository';
import { UserSurveyResponseAuxService } from '../services/user-survey-response-aux.service';
import { prisma } from '../config/prisma';

const userRepo = new UserSurveyResponseAuxRepository(prisma);
const userService = new UserSurveyResponseAuxService(userRepo);
const userController = new UserSurveyResponseAuxController(userService);

const router = express.Router();

router.get('/users-surveys-responses', (req, res) => userController.getAllUsers(req, res));
router.get('/users-surveys-responses/:id', (req, res) => userController.getUserById(req, res));

export { router as userSurveyResponseRouter };