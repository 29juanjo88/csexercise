import Link from 'next/link';

export function BackButton() {
  return (
    <Link 
      href="/"
      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Atras
    </Link>
  );
} 