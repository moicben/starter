import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Clapier pour Lapin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenue sur Clapier pour Lapin!" />
        <img src="/path/to/logo.png" alt="Logo Clapier pour Lapin" style={{ width: '150px', height: 'auto' }} />
        <hr />
        <h1>Clapier pour Lapin</h1>
        <p className="description">
          Bienvenue sur notre site dédié aux clapiers pour lapins. Nous vous proposons les meilleurs conseils et produits pour vos lapins.
        </p>
        <a href="https://clapier-lapin.pro" target="_blank" rel="noopener noreferrer">
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=642,fit=crop/mxBZnNwoZgIBrBrX/boy-grass-playing-with-rabbits-chicken-1-mP4nk82PlvSw3ayQ.jpg" alt="Clapier pour Lapin" />
        </a>
        <h2>Nos Produits</h2>
        <button onClick={() => window.location.href='https://clapier-lapin.pro'}>Visitez notre site</button>
      </main>

      <Footer />
    </div>
  )
}