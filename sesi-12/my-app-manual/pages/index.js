import Link from "next/link"

function Home() {
  return (
    <>
      <h1>Index</h1>

      <Link href="/users" prefetch={false}>
        Users
      </Link>
    </>
  )
}

export default Home
