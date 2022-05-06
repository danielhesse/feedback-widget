import { MailAdapter, SendMailDto } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "659bbf97c95404",
    pass: "69610b27862bac"
  }
});

export class MailtrapMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailDto): Promise<void> {
    await transport.sendMail({
      from: "Equipe FeedGet <oi@feedget.com>",
      to: "Daniel Hessel <danieldaniabreu@gmail.com>",
      subject,
      html: body
    });
  }
}
