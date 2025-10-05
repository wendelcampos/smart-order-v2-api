import { Router } from "express";
import { SatisfactionSurveyController } from "@/controllers/satisfactionSurvey-controller";

const satisfactionSurveyRoutes = Router()
const satisfactionSurveyController = new SatisfactionSurveyController()

satisfactionSurveyRoutes.post("/", satisfactionSurveyController.create)

export { satisfactionSurveyRoutes }