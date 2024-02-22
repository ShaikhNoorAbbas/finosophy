'use server';

import User from '@/database/user.model';
import { connectToDatabase } from '../mongoose';
import bcrypt from 'bcrypt';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { GetUserByEmailParams } from './shared.types';

export async function createUser(formData: FormData) {
  try {
    connectToDatabase();

    const hashedPassword = await bcrypt.hash(
      String(formData.get('password')),
      10
    );

    await User.create({
      name: formData.get('name'),
      username: formData.get('username'),
      email: formData.get('email'),
      password: hashedPassword,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getUserByEmail(email: GetUserByEmailParams) {
  try {
    connectToDatabase();

    const user = await User.findOne({ email });

    return user;
  } catch (error) {
    console.error(error);

    throw new Error('User not found');
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials';
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  }
}
