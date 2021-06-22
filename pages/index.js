import Head from "next/head";
import HeadBanner from "../components/HeadBanner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yaw's Hulu Clone</title>
        <meta
          name="description"
          content="Hulu Clone with Next.js and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeadBanner />
      </main>
    </div>
  );
}
