exports.handler = async (event) => {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const callbackUrl = 'https://valdostanorthrotary.netlify.app/.netlify/functions/callback';
  
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user&redirect_uri=${encodeURIComponent(callbackUrl)}`;
  
  return {
    statusCode: 302,
    headers: {
      Location: githubAuthUrl,
    },
  };
};
