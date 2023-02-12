import Layout from '../../components/Layout';

export default function ProductDetails({ product }) {
  return (
    <main>
      <div>{product.title}</div>
    </main>
  );
}

ProductDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const response = await fetch(`http://localhost:1000/api/v1/product/${id}`);
  const data = await response.json();

  return {
    props: { product: data },
  };
}
