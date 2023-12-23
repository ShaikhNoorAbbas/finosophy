import ClientOnlyComponent from '@/components/ClientOnlyComponent';
import { products } from '@/datasets/products';

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

  if (!product) return <ClientOnlyComponent redirectPath="/custom404" />;

  return <div className="container">Product</div>;
}
