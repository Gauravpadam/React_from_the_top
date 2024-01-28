import { useState } from 'react'
import bgImage from './assets/bgImage.png'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

// This project is super beneficial for understanding react states, hooks and prop passing
// Once you make this, your fundamentals of react would get a lot better

const [amount, setAmount] = useState("")
const [from , setFrom] = useState("usd")
const [to , setTo] = useState("inr")
const [convertedAmount, setConvertedAmount] = useState(0)

const currencyInfo = useCurrencyInfo(from) // Hook returns data as an object with conversion rates of from

const options = Object.keys(currencyInfo) // Now we have all the conversion keys; This array is passed to our component for dropdown

const convert = () => { // Multiplies by the conversion factor and sets the converted amount state
  setConvertedAmount(amount * currencyInfo[to])
}

const swap = () => { // swap essentially means only changing the states of the amounts and currencies
  // That's equivalent to a logical variable swap
  setFrom(to)
  setTo(from)
  setAmount(convertedAmount)
  setConvertedAmount(amount)
}

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center' style={{backgroundImage: `url('${bgImage}')`}}>
      <div className='w-full'>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
        <div className="w-full mb-1">
          {/*I did not create separate functions for updating states of amount and currencies, this will often be the case when working with components
             When your components are the ones handling states, Pass the callbacks with the references to corresponding setStates and react knows which state to update then
             Rest is self explainatory*/}
          <InputBox  label="From" currencyOptions={options} amount={amount} selectCurrency={from} isAmountDisabled={false} onAmountChange={(amount) => {setAmount(amount)}} onCurrencyChange={(currency) => {setFrom(currency)}} />
        </div>
        <div className="relative w-full h-0.5">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            onClick={swap}
          >
            swap
          </button>
        </div>
        <div className="w-full mt-1 mb-4">
          <InputBox label="To" currencyOptions={options} amount={convertedAmount} selectCurrency = {to} isAmountDisabled={true} onCurrencyChange={(currency) => setTo(currency)} />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">Convert {from} to {to}</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default App
