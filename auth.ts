import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { getUserByEmail } from './lib/actions/user.action';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password }: any = credentials;

        const user = await getUserByEmail(email);

        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (passwordsMatch) return user;

        console.log('Invalid credentials');

        return null;
      },
    }),
  ],
});
