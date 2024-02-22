'use client';

import { createUser } from '@/lib/actions/user.action';

export default function SignUpForm() {
  return (
    <form
      action={createUser}
      className="flex flex-col gap-4 rounded-lg bg-gray-200 p-4 shadow-md"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="rounded-lg px-2 py-1"
        required
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="rounded-lg px-2 py-1"
        required
      />
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
      <button
        type="submit"
        className="bg-gradient inline-block rounded-lg px-2 py-1 text-center text-white shadow-md"
      >
        Sign Up
      </button>
    </form>
  );
}
