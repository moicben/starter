// data/data.js
const categories = [
  {
    id: '1',
    name: 'Clapiers',
    subcategories: [
      {
        id: '1-1',
        name: 'Clapier intérieur',
        products: [
          { id: '1-1-1', name: 'Clapier intérieur', rating: 4.5, comment: 'Excellent produit!' },
          { id: '1-1-2', name: 'Clapier intérieur avec toit ouvrant', rating: 4.0, comment: 'Très bon produit.' },
          { id: '1-1-3', name: 'Clapier intérieur en bois avec niche', rating: 4.0, comment: 'Très bon produit.' },
          { id: '1-1-4', name: 'Clapier intérieur en bois plateau glissant', rating: 4.0, comment: 'Très bon produit.' },
          { id: '1-1-5', name: 'Clapier intérieur sur pieds', rating: 4.0, comment: 'Très bon produit.' },
          { id: '1-1-6', name: 'Clapier intérieur XXL', rating: 4.0, comment: 'Très bon produit.' },
        ],
      },
      {
        id: '1-2',
        name: 'Clapier extérieur',
        products: [
          { id: '1-2-1', name: 'Clapier extérieur', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-2', name: 'Clapier extérieur avec double enclos', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-3', name: 'Clapier extérieur avec plateau excrement', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-4', name: 'Clapier extérieur en bois à râtelier', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-5', name: 'Clapier extérieur en bois avec toit ouvrant', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-6', name: 'Clapier extérieur en bois résistant à l\'hiver', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-7', name: 'Clapier extérieur enclos et terrasse', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-8', name: 'Clapier extérieur/extérieur en bois', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-9', name: 'Clapier extérieur/extérieur en bois avec cage', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-10', name: 'Clapier extérieur/extérieur enclos', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-11', name: 'Clapier extérieur toit ouvrable', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-12', name: 'Clapier extérieur triangulaire en bois', rating: 3.5, comment: 'Bon produit.' },
          { id: '1-2-13', name: 'Clapier extérieur XXL en bois', rating: 3.5, comment: 'Bon produit.' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Cages',
    subcategories: [
      {
        id: '2-1',
        name: 'Cage intérieur',
        products: [
          { id: '2-1-1', name: 'Cage intérieur', rating: 5.0, comment: 'Produit exceptionnel!' },
          { id: '2-1-2', name: 'Cage intérieur avec 2 portes', rating: 5.0, comment: 'Produit exceptionnel!' },
          { id: '2-1-3', name: 'Cage intérieur enclos cochon d\'inde', rating: 5.0, comment: 'Produit exceptionnel!' },
          { id: '2-1-4', name: 'Cage intérieur Midwest Critter Nation avec support', rating: 5.0, comment: 'Produit exceptionnel!' },
        ],
      },
      {
        id: '2-2',
        name: 'Cage extérieur',
        products: [
          { id: '2-2-1', name: 'Cage extérieur', rating: 4.5, comment: 'Excellent produit!' },
          { id: '2-2-2', name: 'Cage extérieur et cochon d\'inde avec séparation', rating: 4.5, comment: 'Excellent produit!' },
          { id: '2-2-3', name: 'Cage extérieur/intérieur 2 étages avec accessoires', rating: 4.5, comment: 'Excellent produit!' },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Enclos',
    subcategories: [
      {
        id: '3-1',
        name: 'Enclos intérieur',
        products: [
          { id: '3-1-1', name: 'Enclos intérieur', rating: 4.0, comment: 'Très bon produit.' },
          { id: '3-1-2', name: 'Enclos intérieur modulable noir 109x74x109cm', rating: 4.0, comment: 'Très bon produit.' },
        ],
      },
      {
        id: '3-2',
        name: 'Enclos extérieur',
        products: [
          { id: '3-2-1', name: 'Enclos extérieur', rating: 3.5, comment: 'Bon produit.' },
          { id: '3-2-2', name: 'Enclos extérieur en acier galvanisé', rating: 3.5, comment: 'Bon produit.' },
        ],
      },
    ],
  },
];

export default categories;