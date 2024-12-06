// pages/index.js
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';
import categories from '../data';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Avis sur la boutique Clapier</title>
        <meta name="description" content="Découvrez les meilleurs produits pour clapiers et cages pour lapins. Avis, conseils et recommandations pour choisir le meilleur clapier pour votre lapin." />
        <link rel="icon" href="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=48,h=48,fit=crop,f=png/mxBZnNwoZgIBrBrX/lapin-favicon-x32-Ylevxa62xrhWJvxb.png" />
        <link rel="apple-touch-icon" href="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=48,h=48,fit=crop,f=png/mxBZnNwoZgIBrBrX/lapin-favicon-x32-Ylevxa62xrhWJvxb.png"></link>
      </Head>
      <main>
        <Header title="Notre avis sur la boutique Clapier Lapin!" />
        <hr />
        <section>
          <h2>Nos avis sur les produits Clapier Lapin</h2>
          <p>Bienvenue sur notre site dédié aux clapiers et cages pour lapins. Nous vous proposons des avis, des conseils et des recommandations pour choisir le meilleur clapier pour votre lapin et lui offrir un espace de vie confortable et sécurisé.</p>
        </section>
        <hr />
        <section>
          <h2>Catégories et produits Clapier Lapin</h2>
          <ul>
            {categories.map(category => (
              <li key={category.id}>
                <Link href={`/${category.id}`} title={`Voir les produits de la catégorie ${category.name}`}>
                    <h3>{category.name}</h3>
                </Link>
                <p>Découvrez notre sélection de {category.name.toLowerCase()} pour lapins. Nous avons sélectionné les meilleurs produits pour vous aider à choisir le clapier ou la cage idéale pour votre lapin.</p>
                <ul>
                  {category.products.map(product => (
                    <li key={product.id}>
                      <a href={product.url} target="_blank" rel="noopener noreferrer" title={`Voir plus de détails sur ${product.name}`}>
                        <h4>{product.name}</h4>
                        <p>Note: {product.rating}</p>
                        <p>Commentaire: {product.comment}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <hr />
        <section>
          <h2>Témoignages de nos clients</h2>
          <p>Voici ce que nos clients disent de nos produits :</p>
          <blockquote>
            <p>"J'ai acheté un clapier pour mon lapin et il l'adore! La qualité est excellente et le service client est très réactif."</p>
            <footer>- Marie</footer>
          </blockquote>
          <blockquote>
            <p>"Les produits sont de très bonne qualité et la livraison a été rapide. Je recommande vivement ce site."</p>
            <footer>- Jean</footer>
          </blockquote>
        </section>
      </main>
      <Footer />
    </div>
  );
}