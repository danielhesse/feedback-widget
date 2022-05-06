import { prisma } from "../../prisma";
import { CreateFeedbackDto, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: CreateFeedbackDto) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  };
}
