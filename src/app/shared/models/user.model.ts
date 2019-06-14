export interface UserSignupDetails {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  adminSecret?: string;
}
