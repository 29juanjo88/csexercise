import { getUsersServer } from '@/services/userService';
import { BackButton } from '@/components/BackButton';
import { UserCard } from '@/components/UserCard';

export default async function ServerSideRender() {
  const users = await getUsersServer();

  return (
    <main className="min-h-screen p-8">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8 text-[#ed6603]">
        Version server side render
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
