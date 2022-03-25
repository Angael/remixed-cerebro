import React, { useState } from 'react';
import {
  AppShell,
  Box,
  Burger,
  Button,
  Card,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { version } from '../../package.json';
import NavLinkButton from '~/components/NavLinkButton';

function Shell({ children }: React.PropsWithChildren<any>) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      fixed
      padding='md'
      navbar={
        <Navbar
          width={{ sm: 300, lg: 400 }}
          hiddenBreakpoint='sm'
          hidden={!opened}
        >
          <Card>User: Angeal98</Card>
          <Box
            p='xs'
            sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            <NavLinkButton to='/'>Home</NavLinkButton>
            <NavLinkButton to='/posts'>Posts</NavLinkButton>
          </Box>
        </Navbar>
      }
      header={
        <Header height={60} p='xs'>
          <Group position='apart'>
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>
            <Text size='xl'>Cerebro v{version}</Text>
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
