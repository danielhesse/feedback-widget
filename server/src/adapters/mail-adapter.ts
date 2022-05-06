export interface SendMailDto {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMail: (data: SendMailDto) => Promise<void>;
}
