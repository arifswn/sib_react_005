import React from "react"
import { Outlet } from "react-router-dom"
import { getItems } from "../items"
import ItemRow from "../components/ItemRow"

const Items = () => {
  const items = getItems()
  return (
    <>
      <h1>Items page</h1>
      <p>Select an item to be shown</p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return <ItemRow key={item.id} item={item} />
          })}
        </tbody>
      </table>

      <Outlet />
    </>
  )
}

export default Items
