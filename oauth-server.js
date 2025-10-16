const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// OAuth callback endpoint
app.get('/callback', async (req, res) => {
  const code = req.query.code;
  
  if (!code) {
    return res.status(400).send('No code provided');
  }

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        code: code,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    if (!accessToken) {
      return res.status(400).send('Failed to get access token');
    }

    // Send token back to Decap CMS
    res.send(`
      <html>
        <body>
          <script>
            (function() {
              function recieveMessage(e) {
                console.log("recieveMessage %o", e);
                window.opener.postMessage(
                  'authorization:github:success:${JSON.stringify({ token: accessToken, provider: 'github' })}',
                  e.origin
                );
                window.removeEventListener("message", recieveMessage, false);
              }
              window.addEventListener("message", recieveMessage, false);
              window.opener.postMessage("authorizing:github", "*");
            })()
          </script>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('OAuth error:', error.response?.data || error.message);
    res.status(500).send('Authentication failed');
  }
});

// Auth endpoint
app.get('/auth', (req, res) => {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const callbackUrl = `${req.protocol}://${req.get('host')}/callback`;
  
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user&redirect_uri=${encodeURIComponent(callbackUrl)}`;
  
  res.redirect(githubAuthUrl);
});

app.listen(PORT, () => {
  console.log(`OAuth server running on http://localhost:${PORT}`);
});
