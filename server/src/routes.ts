import { Router } from "express";
import { MailtrapMailAdapter } from "./adapters/nodemailer/mailtrap-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./usecases/submit-feedback-usecase";

export const routes = Router();

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const mailtrapMailAdapter = new MailtrapMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    mailtrapMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  });


  return response.status(201).send();
});
