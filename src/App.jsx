import React, { useState } from 'react';
import AmountInput from './components/AmountInput';
import CurrencySelector from './components/CurrencySelector';

const currencies = ['Euro', 'Dollar']
const convert_euro_usd = 1.5
const convert_usd_euro = 0.9

export default function App() {

  const [devise1, setDevise1] = useState('Euro');
  const [devise2, setDevise2] = useState('Dollar');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (isNaN(amount) || !devise1 || !devise2) {
      return;
    }
    if ((devise1 === "Euro" && devise2 === "Dollar")) {
      setResult((parseFloat(amount) * convert_euro_usd).toFixed(2))
    } else if ((devise1 === "Dollar" && devise2 === "Euro")) {
      setResult(((parseInt(amount) * convert_usd_euro)).toFixed(2));
    } else {
      setResult(amount)
    }
    setVisible(true);
  }


  return (
    <div className='container'>
      <form action="">
        {
          visible && (
            <div className='alert alert-dark' role='alert'>
              <p>Le résultat de la convertion est : {`${amount} ${devise1} => ${result} ${devise2}.`}</p>
            </div>
          )
        }
        <div className="col-4 pt-5">
          <div className="row mb-3">
            <label htmlFor="devise1">Devise 1</label>
            <CurrencySelector devise={devise1} setDevise={setDevise1} currencies={currencies} />
            <label htmlFor="devise2">Devise 2</label>
            <CurrencySelector devise={devise2} setDevise={setDevise2} currencies={currencies} />
          </div>
          <AmountInput amount={amount} setAmount={setAmount} setVisible={setVisible}/>
        </div>
        <button className="btn btn-dark" type='button' onClick={handleClick}>Convertir</button>
      </form>
    </div>
  )
}

