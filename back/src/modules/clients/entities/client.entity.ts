import { Exclude } from 'class-transformer';

export class Client {
  readonly id: number;
  fullName: string;
  email: string;
  telephone: string;
  createdAt: Date;

  @Exclude()
  password: string;
}
