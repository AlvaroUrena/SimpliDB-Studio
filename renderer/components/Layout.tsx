import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SERP Preview</title>
        <meta name="description" content="SimpliDBStudio"/>
      </Head>
      <main className='min-h-screen p-2'>{children}</main>
    </>
  );
}