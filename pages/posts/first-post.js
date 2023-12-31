import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

// default exportすれば, 関数名はなんでもOK
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="profile image"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
