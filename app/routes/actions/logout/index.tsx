import { ActionFunction, redirect } from 'remix';
import { commitSession, getSession } from '~/sessions.server';

export let action: ActionFunction = async ({ request }) => {
  let session = await getSession(request.headers.get('Cookie'));
  session.unset('access_token');

  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};
