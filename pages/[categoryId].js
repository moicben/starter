// pages/[categoryId].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import categories from '../data';

export default function CategoryPage({ category }) {
  return (
    <div className="  ">
      <Head>
        <title>Meilleurs {category.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={`Meilleurs ${category.name}`}/>
        <hr />
        <ul>
          {category.products.map(product => (
            <li key={product.id}>
              <a href={product.url} target="_blank" rel="noopener noreferrer" title={`Voir plus de détails sur ${product.name}`}>
                <h3>{product.name}</h3>
              </a>
              <p>Note: {product.rating}</p>
              <p>Commentaire: {product.comment}</p>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = categories.map(category => ({
    params: { categoryId: category.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = categories.find(category => category.id === params.categoryId);
  return { props: { category } };
}