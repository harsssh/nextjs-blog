import Link from "next/link";

// default exportすれば, 関数名はなんでもOK
export default function FirstPost() {
  return (
    <>
        <h1>First Post</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
    </>
  ) 
}
