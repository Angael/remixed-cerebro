import React, { PropsWithChildren, useState } from 'react';
import {
  Anchor,
  AppShell,
  Box,
  Burger,
  Card,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from '@mantine/core';

import { version } from '../../../package.json';
import NavLinkButton from '~/components/NavLinkButton';
import { Form, Link } from 'remix';

type Props = PropsWithChildren<{ isLoggedIn: boolean }>;

const LoginCard = ({ isLoggedIn }: Props) => {
  return (
    <Card>
      {isLoggedIn ? (
        <Form method='post' action='/actions/logout?index'>
          Logged in{' '}
          <Anchor component={'button'} type='submit'>
            Log out
          </Anchor>
        </Form>
      ) : (
        <>
          Not Logged in{' '}
          <Anchor component={Link} to={'/login'}>
            Log in now
          </Anchor>
        </>
      )}
    </Card>
  );
};

export default LoginCard;
