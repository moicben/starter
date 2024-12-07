const axios = require('axios');

const NETLIFY_API_TOKEN = 'nfp_a5XErPtzsBUdRcZ1BFSiqPkxPk4h6L18babb';
const NETLIFY_TEAM_ID = 'YOUR_NETLIFY_TEAM_ID';
const DOMAIN = 'clapier-lapin.pro';

const subdomains = [
  'sub1',
  'sub2',
  'sub3',
  // Ajoutez autant de sous-domaines que nécessaire
];

async function createSite(subdomain) {
  try {
    const response = await axios.post(
      'https://api.netlify.com/api/v1/sites',
      {
        name: `${subdomain}.${DOMAIN}`,
        custom_domain: `${subdomain}.${DOMAIN}`,
        build_settings: {
          repo_url: 'https://github.com/moicben/starter',
          repo_branch: 'main',
          dir: 'out',
          cmd: 'npm run build && npm run export',
        },
      },
      {
        headers: {
          Authorization: `Bearer ${NETLIFY_API_TOKEN}`,
        },
      }
    );

    console.log(`Site created: ${response.data.url}`);
  } catch (error) {
    console.error(`Error creating site for ${subdomain}:`, error.response.data);
  }
}

async function createSites() {
  for (const subdomain of subdomains) {
    await createSite(subdomain);
  }
}

createSites();