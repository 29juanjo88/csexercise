import { User } from '@/types/User';
/// this is for the server side fetch so is not visible on the client service 
// (and avoid exposing process.env... )


export async function getUsersServer() {

  const res = await fetch(`${process.env.API_URL}`, {
    next: {
      revalidate: 3600 // revalidar cada 3600 segundos
    }
  });

  if (!res.ok) {
    throw new Error('error getting the users');
  }

  const data = await res.json();
  return data.users as User[];

} 