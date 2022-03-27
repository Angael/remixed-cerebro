import { Link, LoaderFunction, ActionFunction, Form, redirect } from 'remix';
import { json, useLoaderData } from 'remix';
import {
  Text,
  Paper,
  Box,
  Container,
  List,
  Title,
  SimpleGrid,
  Card,
  Button,
} from '@mantine/core';
import { commitSession, getSession } from '~/sessions.server';
import { signInWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat';
import { auth } from '../../firebase';
import { getAuth } from '~/loaders/isLoggedIn';

export const loader: LoaderFunction = async ({ request }) => {
  const auth = await getAuth(request);
  console.log({ auth });

  return { test: 666 };
};

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get('email');
  let password = formData.get('password');
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email as string,
    password as string,
  );

  if (userCredential.user) {
    let session = await getSession(request.headers.get('Cookie'));
    session.set('access_token', await userCredential.user.getIdToken());
    return redirect('/', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    });
  }
  return { user: userCredential.user };
};

export default function Login() {
  return (
    <Container>
      <Title mb='lg'>Login</Title>
      <Form method='post'>
        <label htmlFor='email'>Email</label>
        <input
          className='loginInput'
          type='email'
          name='email'
          placeholder='you@awesome.dev'
          required
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          className='loginInput'
          type='password'
          name='password'
          required
        />
        <button className='loginButton' type='submit'>
          Login
        </button>
      </Form>
    </Container>
  );
}
