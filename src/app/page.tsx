'use client';
import { getUsersClient } from '@/services/userService.client';
import { useState, useEffect } from 'react';
import type { User } from '@/types/User';
import { UserCard } from '@/components/UserCard';
import Link from 'next/link';


export default function ClientPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers(await getUsersClient());
      } catch (error) {
        console.error('Error fetching users:', error); // getUsersClient has a throw we need to catch
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <main className={`p-8`}>
        <a href="/ssr" className="text-blue-500 hover:text-blue-700 mb-4">check the SSR version</a>
        <h1 className="text-3xl font-bold mb-8"> {/* #ed6603 is the color of couchsourfing orange */}
         The Couchsourfing intergalactic staff using useEffect()
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
      <footer className="text-center text-sm text-gray-500 mt-8">
        <p>
          By 
          <Link 
            href="https://www.linkedin.com/in/joseglezdev/" 
            className="text-blue-500 hover:text-blue-700">
             Jose Gonzalez
          </Link>
        </p>
      </footer>
    </div>
  );
} 