import Head from "next/head"

function Users(props) {
  return (
    <div>
      <Head>
        <title>Next.Js</title>
        <meta name="keywords" content="developer, react, next.js"></meta>
      </Head>
      <h1>Welcome to Next.Js</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.users?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()
  return {
    props: { users },
  }
}

export default Users
