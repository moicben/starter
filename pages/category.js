// pages/categories/[categoryId]/[subcategoryId].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import categories from '../data';

export default function SubcategoryPage({ subcategory }) {
  return (
    <div className="container">
      <Head>
        <title>{subcategory.name} - Clapier pour Lapin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={`Produits dans ${subcategory.name}`} />
        <hr />
        <h1>{subcategory.name}</h1>
        <ul>
          {subcategory.products.map(product => (
            <li key={product.id}>
              <h2>{product.name}</h2>
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
  const paths = categories.flatMap(category =>
    category.subcategories.map(subcategory => ({
      params: { categoryId: category.id, subcategoryId: subcategory.id },
    }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = categories.find(category => category.id === params.categoryId);
  const subcategory = category.subcategories.find(subcategory => subcategory.id === params.subcategoryId);
  return { props: { subcategory } };
}