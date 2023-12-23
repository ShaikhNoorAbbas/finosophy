'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ClientOnlyComponentProps {
  redirectPath: string;
}

export default function ClientOnlyComponent({
  redirectPath,
}: ClientOnlyComponentProps) {
  const router = useRouter();

  useEffect(() => {
    router.push(redirectPath);
  }, [redirectPath, router]);

  return null;
}
