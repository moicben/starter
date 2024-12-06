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
        <p className="description">
          Commencez par éditer <code>pages/index.js</code>
        </p>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=642,fit=crop/mxBZnNwoZgIBrBrX/boy-grass-playing-with-rabbits-chicken-1-mP4nk82PlvSw3ayQ.jpg" alt="Clapier pour Lapin" />
        <p>
          Visitez notre site pour plus d'informations : 
          <a href="https://clapier-lapin.pro" target="_blank" rel="noopener noreferrer">clapier-lapin.pro</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}