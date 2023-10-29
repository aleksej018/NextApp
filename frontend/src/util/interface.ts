export interface User {
  id: number;
  username: string;
  email: string;
  profile_url: string;
}

export interface Token {
  type: string;
  token: string;
  expires_at: string;
}
