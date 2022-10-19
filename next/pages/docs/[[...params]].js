import { useRouter } from 'next/router';
import React from 'react';

export default function UserProfilePage() {
  const router = useRouter();
  const { username } = router.query;
  console.log(params);
  return (
    <div>
      <h1> Catch-all routing</h1>
      <h2>
        {' '}
        {params[0]} / {params[1]} / {params[2]}
      </h2>
    </div>
  );
}
