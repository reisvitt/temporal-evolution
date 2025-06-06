import express, { Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import routes from './routes'

dotenv.config();

export const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors())

app.get("/health-check", (_, response: Response) => {
  response.status(200).json({
    success: true,
    message: "Application is running..."
  })
})

app.use("/api", routes.userSurveyResponseRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});