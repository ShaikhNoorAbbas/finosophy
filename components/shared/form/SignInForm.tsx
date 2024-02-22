'use client';

import { authenticate } from '@/lib/actions/user.action';
import { useFormState, useFormStatus } from 'react-dom';

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form
      action={dispatch}
      className="flex flex-col gap-4 rounded-lg bg-gray-200 p-4 shadow-md"
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="rounded-lg px-2 py-1"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="rounded-lg px-2 py-1"
        required
      />
      {errorMessage && <p>{errorMessage}</p>}
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      type="submit"
      className="bg-gradient inline-block rounded-lg px-2 py-1 text-center text-white shadow-md"
    >
      Login
    </button>
  );
}
