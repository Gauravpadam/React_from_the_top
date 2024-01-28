// Making custom hooks is important in production
// After all, hooks are functions and javascript makes functions

// From the looks of App.jsx, useCurrencyInfo is supposed to fetch and return the currency info it receives from the API
// (You can use any conversion api for this purpose)

// Question is, will I use a useEffect for the fetch operation?
// and why would I? If I would?

// re-renders are a problem in react
// If I don't use useEffect. the fetch operation will (and will!) be called only once
// What happens if the currency changes?
// Will I have any control over how the fetch works without useEffect?
// This is why we use useEffect

// Why use useState now?
// wherever a re-render is in picture,
// as in, data is a field which can (and will!) cause a re-render and is no ordinary variable
// It changes the state of the app
// This is the reason why...

import { useState, useEffect } from "react"

function useCurrencyInfo(currency){

    const [data , setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => {return res.json()})
        .then((res) => setData(res[currency]))}
    , [currency])

    return data // return the state changer but I won't be able to access setData
    // You will be

}
export default useCurrencyInfo; // exporting the entire thing to return a method, so you can essentially access setData too, 
// The fundamentals hold true, hooks return a function.
