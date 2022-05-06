export interface CreateFeedbackDto {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: CreateFeedbackDto) => Promise<void>;
}
