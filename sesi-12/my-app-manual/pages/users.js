import { useRouter } from "next/router"

function Users() {
  const router = useRouter()

  return (
    <>
      <h1>Pages Users</h1>

      {/* example : url?nama=arif&alamat=lampung */}
      <p>{JSON.stringify(router.query)}</p>
    </>
  )
}

export default Users
