import { NetlifyAPI } from 'netlify'

const NETLIFY_API_TOKEN = 'nfp_a5XErPtzsBUdRcZ1BFSiqPkxPk4h6L18babb';
const NETLIFY_TEAM_ID = 'YOUR_NETLIFY_TEAM_ID';
const DOMAIN = 'univers-lapin.shop';

// Lire la clé SSH privée
const SSH_PRIVATE_KEY = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDnu3Fpvd24YjFG2EiUjbQ4bHFVf3MCuiNj+0ovwXp2gq1AtKY6uk+tz+0vEphfJOqF58sYco0/nDxjsXcnNNkZqLpXoipGs23WYFn1tXf8u2GbRlguz0xC2jDVnolBxwrh7I0yF9Avn21wGBHGc8R4N3NFr1Z4PBCuk3SsTLXG4DF2FED/FpbJa+TkFZ8ZDVClbw4ZDdXgrZD2mfpMTla+COhNh0DmtHRpRfRue8ABNRbm8kPNt6fdI9Utll7ee9qPWNE76KYGULL4fj+e9BrqnLAHkjtcT8jcmBCeHWrHVMjrnNX4Pw3n8GAbFoIfMgzyUAsizgV6xlqslQ6R+VORghjJWcKJ/TbY+nlXDPvz7byH8rfB18FHMcELb+QpelGjVCOnQgIqoTnA5nNBzRshTZXUmMPgQ9JlySRNgMN5YhX6W2Rh673gitSxizw2AQKsgCmeaHPuQbS9sM9yLMolyhUsmifoOhwhIOykj1fvq5LbHaRmQu5tvFjOesu38ORBnr4zbTCeymkzGN6q9azAsoNHp+wh1lCoBMjXP0PdhPj5kiYU5QjOSc+YJKINwYrRaQrK/tDcJAsoZDggqfn3VuuO4Kbz7jgghdBDhAv+tb9Kvm6r+PQjYivlLeZJgbyuf0u67ufh0mkncANqsFZGJWAmR+fO5O11O30kGbP7mQ== benjamain.georges@gmail.com"


const subdomains = [
  '13'
  // Ajoutez autant de sous-domaines que nécessaire
];

const api = new NetlifyAPI(NETLIFY_API_TOKEN);

async function createSite(subdomain) {
  try {
    const site = await api.createSite({
      body: {
        name: `${subdomain}.${DOMAIN}`,
        custom_domain: `${subdomain}.${DOMAIN}`,
        repo: {
          provider: 'github',
          id: '8ec9c06', 
          repo: 'moicben/starter',
          private:false,
          repo_url: 'git@github.com:moicben/starter.git',
          branch: 'main',
          auth: {
            type: 'ssh',
            ssh_key: SSH_PRIVATE_KEY
          },
          
        },
      },
    });

    console.log(`Site created: ${site.url}`);
  } catch (error) {
    console.error(`Error creating site for ${subdomain}:`, error.message);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function createSites() {
  for (const subdomain of subdomains) {
    await createSite(subdomain);
    await delay(1000); // Ajoute un délai de 10 secondes entre les requêtes
  }
}

createSites();