export class AuthService {
  private token!: string;


  getToken(): string {
    return this.token;
  }

  login(): void {
    this.token = 'MyToken';
  }
}
