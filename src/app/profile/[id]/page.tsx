import { getUsersServer } from '@/services/userService';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { UserCard } from '@/components/UserCard';
import { BackButton } from '@/components/BackButton';

interface ProfilePageProps {
  params: {
    id: string;
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const users = await getUsersServer();
  const user = users.find(user => user.id === parseInt(params.id));

  if (!user) {
    notFound();
  }
                    // fetch its friends in friends[] array
  const friends = users.filter(friend => user.friends.includes(friend.id));

  return (
    <main className="min-h-screen p-8">
      <BackButton />
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center gap-6">
            <Image
              src={user.profilePic}
              alt={user.name}
              width={128}
              height={128}
              className="rounded-full object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-[#ed6603]">{user.name}</h1>
              <p className="text-lg text-gray-600">{user.title}</p>
              <p className="text-gray-500 mt-2">{user.email}</p>
            </div>
          </div>
          <p className="mt-6 text-gray-700">{user.about}</p>
        </div>

        {/* Lista de amigos */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Friends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friends.map(friend => (
              <UserCard key={friend.id} user={friend} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 