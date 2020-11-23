import Head from 'next/head';
import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="max-w-screen-xl  mx-auto  px-4 md:px-10">{children}</main>
      <Footer/>
    </div>
  );
}
