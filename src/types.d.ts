export interface User {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: string;
}

export interface UserFormData {
  name: string;
  email: string;
  active: boolean;
  role: string;
}