import { User } from '@/types/User';

export async function getUsersClient() {

  const res = await fetch('/api');

  if (!res.ok) {
    throw new Error('error getting the users');
  }
  const data = await res.json();
  return data.users as User[];

} 