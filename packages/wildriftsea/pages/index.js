import Head from 'next/head';
import Layout from '../components/Layout';

import HomePage from '../modules/HomePage';

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
