## If you are here after 07_miniContext (Which you should be)
Remember in reactRouters when I told there is no one "correct" way of making a router?

Same goes with contexts. There is no one correct way of making a context.
In the miniContext module, we made two different files, one for the context and other for the provider.
You don't need to do that, and in production you might find yourself making the exports in a single file.

You're effectively ditching the `provider.jsx` and making a custom hook to return the context provider in the same file.

## Why do I need Context API in this scenario?
To introduce a sync between the components when you change from light mode to dark mode.