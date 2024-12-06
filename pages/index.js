// pages/index.js
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';
import categories from '../data';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Clapier pour Lapin</title>
        <link rel="icon" href="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=48,h=48,fit=crop,f=png/mxBZnNwoZgIBrBrX/lapin-favicon-x32-Ylevxa62xrhWJvxb.png" />
        <link rel="apple-touch-icon" href="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=48,h=48,fit=crop,f=png/mxBZnNwoZgIBrBrX/lapin-favicon-x32-Ylevxa62xrhWJvxb.png"></link>
      </Head>
      produits z
      <main>
        <Header title="Bienvenue sur Clapier pour Lapin!" />
        <hr />
        <h1>Nos Catégories</h1>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <h2>{category.name}</h2>
              <ul>
                {category.subcategories.map(subcategory => (
                  <li key={subcategory.id}>
                    <Link href={`/categories/${category.id}/${subcategory.id}`}>
                      <a>{subcategory.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}