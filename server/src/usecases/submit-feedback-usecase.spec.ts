import { SubmitFeedbackUseCase } from "./submit-feedback-usecase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "Example comment",
      screenshot: "data:image/png;base64,21934yu1r4edh23"
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(submitFeedback.execute({
      type: "",
      comment: "Example comment",
      screenshot: "data:image/png;base64,21934yu1r4edh23"
    })).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "",
      screenshot: "data:image/png;base64,21934yu1r4edh23"
    })).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "Example comment",
      screenshot: "image.png"
    })).rejects.toThrow();
  });
});
