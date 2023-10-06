import React from 'react'

export default function AmountInput({amount, setAmount, setVisible}) {
      const handleChange = (e) =>{
            setAmount(e.target.value)
            setVisible(false)
      }
      return (
            <div className="row input-group mb-3">
                  <label htmlFor="amount">Montant</label>
                  <input type="text" className="form-control" value={amount} onChange={handleChange} />
            </div>
      )
}
