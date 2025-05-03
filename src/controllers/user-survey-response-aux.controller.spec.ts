import { Request, Response } from "express";
import { UserSurveyResponseAuxService } from "../services/user-survey-response-aux.service";
import { usersSurveysResponsesAuxMock } from "../testing/user-survey-response-aux/users-surveys-responses-aux.mock";
import { UserSurveyResponseAuxController } from "./user-survey-response-aux.controller"
import { userSurveyResponseAuxMock } from "../testing/user-survey-response-aux/user-survey-response-aux.mock";
import { userSurveyResponsePeriodMock } from "../testing/user-survey-response-aux/dashboard-response.mock";

jest.mock('../services/user-survey-response-aux.service');

describe('UserSurveyResponseAuxController', () => {
  let mockService: jest.Mocked<UserSurveyResponseAuxService>
  let controller: UserSurveyResponseAuxController;
  let mockResponse: Partial<Response>;
  let mockRequest: Partial<Request>;
  
  beforeEach(async () => {
    mockService = new UserSurveyResponseAuxService({} as any) as jest.Mocked<UserSurveyResponseAuxService>;
    controller = new UserSurveyResponseAuxController(mockService)

    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };
    (UserSurveyResponseAuxService as jest.Mock).mockImplementation(() => mockService);

    mockService.getAllUsersSurveysResponses.mockResolvedValue(usersSurveysResponsesAuxMock);
    mockService.getUserSurveyResponseById.mockImplementation((id: number) => {
      if(id === userSurveyResponseAuxMock.id){
        return Promise.resolve(userSurveyResponseAuxMock)
      }
      return Promise.resolve(null);
    })
    mockService.getUsersSurveysResponsesFilters.mockResolvedValue(userSurveyResponsePeriodMock)
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllUsersSurveyResponses', () => {
    it('should return all data', async () => {
      await controller.getAllUsersSurveyResponses(mockRequest as Request, mockResponse as Response)

      expect(mockService.getAllUsersSurveysResponses).toHaveBeenCalled()
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(usersSurveysResponsesAuxMock);
    });
  });

  describe('getUserSurveyResponseById', () => {
    it('should return user-survey-response-aux', async () => {
      mockRequest.params = {
        id: String(userSurveyResponseAuxMock.id),
      }

      await controller.getUserSurveyResponseById(mockRequest as Request, mockResponse as Response)

      expect(mockService.getUserSurveyResponseById).toHaveBeenCalled()
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(userSurveyResponseAuxMock);
    });

    it('should return a Not Found error', async () => {
      mockRequest.params = {
        id: '200',
      }

      await controller.getUserSurveyResponseById(mockRequest as Request, mockResponse as Response)

      expect(mockService.getUserSurveyResponseById).toHaveBeenCalled()
      expect(mockResponse.status).toHaveBeenCalledWith(404);
    });

    it('should return a Bad Request error', async () => {
      mockRequest.params = {
        id: 'error',
      }

      await controller.getUserSurveyResponseById(mockRequest as Request, mockResponse as Response)

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockService.getUserSurveyResponseById).not.toHaveBeenCalled()
    });
  });

  describe('getUsersSurveyResponsesPeriod', () => {
    it('should return dashboard data', async () => {
      mockRequest.query = {}
      await controller.getUsersSurveyResponsesPeriod(mockRequest as Request, mockResponse as Response)

      expect(mockService.getUsersSurveysResponsesFilters).toHaveBeenCalled()
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(userSurveyResponsePeriodMock);
    });

    it('should return validation error', async () => {
      mockRequest.query = {
        from: 'WRONG_DATE_FORMAT',
      }
      await controller.getUsersSurveyResponsesPeriod(mockRequest as Request, mockResponse as Response)

      expect(mockService.getUsersSurveysResponsesFilters).not.toHaveBeenCalled()
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalled()
    });
  });
})