import React, { useState, useEffect } from "react"

export const Counter = ({ initialCount }) => {
  // Jika state baru dikomputasi menggunakan state sebelumnya
  // kita  dapat mengoper sebuah fungsi kesetState
  // Fungsi tersebut akan menerima nilai sebelumnya,
  // dan mengembalikan sebuah nilai yang telah diperbarui

  const [count, setCount] = useState(initialCount)

  const plus = () => {
    setCount(count + 1)
  }

  const minus = () => {
    setCount(count - 1)
  }

  return (
    <div>
      Count : {count}
      <br />
      {/* Tombol ”+” dan ”-” menggunakan bentuk fungsional, 
        karena nilai yang telah diperbarui didasari oleh nilai sebelumnya.
        
        Tetapi tombol “Reset” menggunakan bentuk normal,
        karena tombol tersebut selalu mengatur perhitungan kembali ke nilai awal.
        Jika fungsi pembaruan Anda mengembalikan nilai yang sama dengan state saat ini,
        pe-render-an ulang selanjutnya akan dilewati.
      */}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
      <hr />
      <CounterEffect />
    </div>
  )
}

export const CounterEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `you clicked ${count} times`
  })

  const counting = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={counting}>Click Me</button>
    </div>
  )
}

export default Counter
