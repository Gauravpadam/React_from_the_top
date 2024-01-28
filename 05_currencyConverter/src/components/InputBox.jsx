// Always try to link your components with your App.jsx
// Figure out the requirements first and then pass the props
// Take good care about what can and what cannot change the state of the app
// Wherever a state change comes into picture, please use useState

import { useId } from "react"

function InputBox (props) {
// useId hook is a hook to generate random Ids and make our guess work convenient
// (Yes, somebody just woke up and said what If I turn Math.random into a hook)

const amountInputId = useId()

// Please dont use useId to generate keys for a looping
    return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
        <div className="w-1/2">
            <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                {props.label}
            </label>
            <input
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled= {props.isAmountDisabled}
                    value={props.amount}
                    onChange={(e) => props.onAmountChange && props.onAmountChange(Number(e.target.value))} // onAmountChange is a state change
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={props.selectCurrency}
                onChange={(e) => props.onCurrencyChange(e.target.value)} // onCurrencyChange is a state change
                >
                    {props.currencyOptions.map((currency) => {
                        return (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    </div>
)
}

export default InputBox