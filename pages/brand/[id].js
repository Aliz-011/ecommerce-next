import Layout from '../../components/Layout';

export default function Brand({ brand }) {
  return (
    <main>
      <div>{brand.title}</div>
    </main>
  );
}

Brand.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const response = await fetch(`http://localhost:1000/api/v1/brand/${id}`);
  const data = await response.json();

  return {
    props: { brand: data },
  };
}
