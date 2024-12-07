import { NetlifyAPI } from 'netlify';

const NETLIFY_API_TOKEN = 'nfp_a5XErPtzsBUdRcZ1BFSiqPkxPk4h6L18babb';
const NETLIFY_TEAM_ID = 'YOUR_NETLIFY_TEAM_ID';

const siteIds = [
    '12.univers-lapin.shop',
    '13.univers-lapin.shop',
    '15.univers-lapin.shop',
    '155.univers-lapin.shop',
    '5.univers-lapin.shop',
    '6.univers-lapin.shop',
    '7.univers-lapin.shop',
    '8.univers-lapin.shop',
    '9.univers-lapin.shop',
    '10.univers-lapin.shop',
  // Ajoutez autant de site IDs que nécessaire
];

const api = new NetlifyAPI(NETLIFY_API_TOKEN);

async function deleteSite(siteId) {
  try {
    await api.deleteSite({ site_id: siteId });
    console.log(`Site deleted: ${siteId}`);
  } catch (error) {
    console.error(`Error deleting site ${siteId}:`, error.message);
  }
}

async function deleteSites() {
  for (const siteId of siteIds) {
    await deleteSite(siteId);
  }
}

deleteSites();