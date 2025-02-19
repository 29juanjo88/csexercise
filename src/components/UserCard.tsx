import Image from 'next/image';
import Link from 'next/link';
import type { User } from '@/types/User';
import { Lato } from 'next/font/google';

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin']
});
interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Link 
      href={`/profile/${user.id}`}
      className={`block transition-transform hover:scale-105 ${lato.className} text-[#384859]`}
    >
      <div className="bg-[#eceff2] border rounded-lg p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-4">
          <Image
            src={user.profilePic}
            alt={user.name}
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-lg truncate">{user.name}</h2>
            <p className="text-sm text-gray-600 truncate">{user.title}</p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
        </div>
      </div>
    </Link>
  );
} 