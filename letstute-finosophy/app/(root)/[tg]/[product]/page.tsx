import { products } from '@/datasets/products';
import { notFound } from 'next/navigation';

interface ProductProps {
  params: {
    product: string;
  };
}

export default function Product({ params }: ProductProps) {
  const allProducts = [
    ...products.academic,
    products.academicCombo,
    ...products.youth,
  ];

  const productSlug = params.product;
  const product = allProducts.find((p) => p.slug === productSlug);

  if (!product) notFound();

  return <div className="container">Product</div>;
}
