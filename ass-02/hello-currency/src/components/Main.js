import axios from "axios"
import React, { useEffect, useState } from "react"

const Main = () => {
  const [currency, setCurrency] = useState(null)

  const ambilDataCurrency = async () => {
    const data = axios.get(
      "https://api.currencyfreaks.com/latest?apikey=5a7c2aecc3424e82b810f7662b1dbdfc&symbols=CAD,EUR,IDR,JPY,CHF,GBP"
    )
    return data
  }

  useEffect(() => {
    ambilDataCurrency().then((res) => setCurrency(res))
  }, [])

  const mataUang = ["Currency", "We Bu", "Exchange Rate", "We Sell"]

  return (
    <div>
      {currency ? (
        <div className="d-flex flex-column align-items-center m-5">
          <h3>Assignment Project : Display Currency Rates</h3>
          <table className="table my-5">
            <thead className="thead-dark">
              <tr>
                {mataUang.map((namaHeader, index) => {
                  return <th key={index}>{namaHeader}</th>
                })}
              </tr>
            </thead>
            <tbody className="thead-light">
              {Object.keys(currency.data.rates).map((namaBody, index) => {
                return (
                  <tr key={index}>
                    <td>{namaBody}</td>
                    <td>{(1.05 * currency.data.rates[namaBody]).toFixed(4)}</td>
                    <td>{(1.0 * currency.data.rates[namaBody]).toFixed(4)}</td>
                    <td>{(0.95 * currency.data.rates[namaBody]).toFixed(4)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="text-center mt-3">
            <p>
              Rates are based from 1 USD This application uses API from
              <br />
              https://currencyfreaks.com/
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Main
