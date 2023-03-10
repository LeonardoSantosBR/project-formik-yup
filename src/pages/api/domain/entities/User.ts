import crypto from "crypto";

export class User {
  public readonly id: string;
  public nome: string;
  public senha: string;
  public confirmarSenha: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = crypto.randomUUID();
    }
  }
}
