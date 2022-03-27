// app/sessions.js
import { createCookieSessionStorage } from 'remix';

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      //firebase token
      name: 'auth-token',

      // all of these are optional
      expires: new Date(Date.now() + 600),
      httpOnly: true,
      maxAge: 8 * 3600, // 8h
      path: '/',
      sameSite: 'lax',
      secrets: ['tacos'],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };
