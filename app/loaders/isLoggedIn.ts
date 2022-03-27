import { LoaderFunction } from 'remix';
import { getSession } from '~/sessions.server';

type myAuth = {
  isLoggedIn: boolean;
  access_token?: string;
};

export const getAuth = async (request: Request): Promise<myAuth> => {
  try {
    const session = await getSession(request.headers.get('Cookie'));

    const access_token = session?.data?.access_token;
    const isLoggedIn = !!access_token;

    return { isLoggedIn, access_token };
  } catch (e) {
    return { isLoggedIn: false };
  }
};
