import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import { MantineProvider, Global } from '@mantine/core';
import Shell from '~/components/Shell';

export const meta: MetaFunction = () => {
  return { title: 'Cerebro' };
};

export default function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <Global
        styles={(theme) => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },

          body: {
            ...theme.fn.fontStyles(),
            backgroundColor: theme.colors.dark[7],
            color: theme.colors.dark[0],
            lineHeight: theme.lineHeight,
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
        })}
      />
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <Meta />
          <Links />
        </head>
        <body>
          <Shell>
            <Outlet />
          </Shell>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}
