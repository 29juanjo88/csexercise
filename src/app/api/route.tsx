import { NextResponse } from "next/server";
import usersData from '@/mocks/users.json';
import type { User } from '@/types/User';

const { users } = usersData as { users: User[] };

export async function GET() {
  try {
    return NextResponse.json({ users }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error al obtener usuarios:', error);
    return NextResponse.json(
      { error: 'Error al obtener usuarios' },
      { status: 500 }
    );
  }
}


