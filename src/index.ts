import express, { Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/health-check", (_, response: Response) => {
  response.status(200).json({
    success: true,
    message: "Application is running..."
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});