export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  role: 'doctor' | 'patient' | 'admin';
  avatarUrl?: string;
  createdAt: string;
}
