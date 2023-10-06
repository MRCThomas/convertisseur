import React from 'react'

export default function CurrencySelector({devise, setDevise, currencies}) {
    return (
        <select value={devise} className="form-select" onChange={(e) => setDevise(e.target.value)}>
            {currencies.map((currency, key) => <option key={key} value={currency}>{currency}</option>)}
        </select>
    )
}
