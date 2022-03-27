import {
  json,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix';
import type { MetaFunction } from 'remix';
import { MantineProvider, Global } from '@mantine/core';
import Shell from '~/components/shell/Shell';
import Analytics from '~/Analytics';
import { getAuth } from '~/loaders/isLoggedIn';

export const loader: LoaderFunction = async ({ request }) => {
  const auth = await getAuth(request);
  console.log({ auth });
  return json(auth.isLoggedIn);
};

export const meta: MetaFunction = () => {
  return { title: 'Cerebro' };
};

export default function App() {
  const isLoggedIn = useLoaderData();

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

          <Analytics />
        </head>
        <body>
          <Shell isLoggedIn={isLoggedIn}>
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
