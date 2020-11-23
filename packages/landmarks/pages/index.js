import Head from 'next/head';
import Home from '../modules/Home';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
