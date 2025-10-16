exports.handler = async (event) => {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const siteUrl = process.env.URL || `https://${event.headers.host}`;
  const callbackUrl = `${siteUrl}/.netlify/functions/callback`;
  
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user&redirect_uri=${encodeURIComponent(callbackUrl)}`;
  
  return {
    statusCode: 302,
    headers: {
      Location: githubAuthUrl,
    },
  };
};
