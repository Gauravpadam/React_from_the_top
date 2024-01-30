## There are many ways to route elements
Yes, there is no one "correct" way to implement a router

We can:
- Wrap the react `index.js/main.jsx` (whatever you call it as per your react library) into a `BrowserRouter` and
return the routes in `app.jsx`
- Use modular functions of `React-Router` to define paths in `main.jsx` and use them
- Wrap each component separately in a router and link them
- Wrap `App.js` into a router and return

## Why should I use router and not hyperlinks?
React is an SPA library - where SPA => Single page application

Using anchor tags re-renders the whole DOM which negatively impacts the performance of the web application
On the other hand, `Link` and `NavLink` cause a partial DOM reload and does not impact performance.

Source: https://reactrouter.com/en/main