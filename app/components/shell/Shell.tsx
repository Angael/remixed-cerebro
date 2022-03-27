import React, { useState } from 'react';
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
import { Link } from 'remix';
import LoginCard from '~/components/shell/LoginCard';

function Shell({
  isLoggedIn,
  children,
}: React.PropsWithChildren<{ isLoggedIn: boolean }>) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  console.log('test', isLoggedIn);

  return (
    <AppShell
      fixed
      padding='md'
      navbar={
        <Navbar width={{ sm: 300 }} hiddenBreakpoint='sm' hidden={!opened}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box
              p='xs'
              sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}
            >
              <NavLinkButton to='/'>Home</NavLinkButton>
              <NavLinkButton to='/posts'>Posts</NavLinkButton>
              <NavLinkButton to='/files'>Files</NavLinkButton>
              <NavLinkButton to='/settings'>Settings</NavLinkButton>
            </Box>
            <LoginCard isLoggedIn={isLoggedIn} />
          </Box>
        </Navbar>
      }
      header={
        <Header height={60} p='xs'>
          <Group position='apart' sx={{ height: '100%' }}>
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>
            <Text size='xl'>Krzysztof Widacki v{version}</Text>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}

export default Shell;
