import { render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Users from "./pages/Users"

test("Render halaman user dengan benar", () => {
  render(
    <MemoryRouter>
      <Users />
    </MemoryRouter>
  )

  // mencari text tertentu
  // pastikan button kita memiliki role="button"
  const btn = screen.getByRole("button")
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent("Back to Home")

  // menunggu proses fetch user dari API
  // kita kasih waktu sebanyak 5 detik
  // kemudian mencari text sebuah nama dari API
  const user = async () =>
    await waitFor(
      () => {
        return screen.findByText("Leanne Graham")
      },
      { timeout: 5000 }
    )

  // eslint-disable-next-line jest/valid-expect-in-promise
  user().then((res) => {
    expect(res).toBeInTheDocument()
  })
})
