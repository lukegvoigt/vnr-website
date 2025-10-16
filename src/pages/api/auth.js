export async function GET({ request }) {
  const clientId = import.meta.env.OAUTH_CLIENT_ID;
  const url = new URL(request.url);
  const callbackUrl = `${url.protocol}//${url.host}/api/callback`;
  
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user&redirect_uri=${encodeURIComponent(callbackUrl)}`;
  
  return Response.redirect(githubAuthUrl, 302);
}
