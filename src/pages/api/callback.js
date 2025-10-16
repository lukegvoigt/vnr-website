export async function GET({ request, url }) {
  const code = url.searchParams.get('code');
  
  if (!code) {
    return new Response('No code provided', { status: 400 });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: import.meta.env.OAUTH_CLIENT_ID,
        client_secret: import.meta.env.OAUTH_CLIENT_SECRET,
        code: code,
      }),
    });

    const data = await tokenResponse.json();
    const accessToken = data.access_token;

    if (!accessToken) {
      return new Response('Failed to get access token', { status: 400 });
    }

    // Send token back to Decap CMS
    const html = `
      <!DOCTYPE html>
      <html>
        <body>
          <script>
            (function() {
              function receiveMessage(e) {
                console.log("receiveMessage %o", e);
                window.opener.postMessage(
                  'authorization:github:success:' + JSON.stringify({
                    token: "${accessToken}",
                    provider: "github"
                  }),
                  e.origin
                );
                window.removeEventListener("message", receiveMessage, false);
              }
              window.addEventListener("message", receiveMessage, false);
              window.opener.postMessage("authorizing:github", "*");
            })()
          </script>
        </body>
      </html>
    `;

    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('OAuth error:', error);
    return new Response('Authentication failed', { status: 500 });
  }
}
