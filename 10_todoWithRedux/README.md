## Why do I need Redux, Wasn't context API enough?

Redux is a state management library available for multiple frameworks, not only react.
Context API is only for react.

In a more complex setup, State management libraries like Redux and Zustand perform better than Context API, which is meant for small-medium sized projects. Not every project needs Redux, always look forward to reduce the complexity; Use Redux when your app calls for it.

## What's different between Redux and Context API

Both perform the same function: State management

Some points of difference between Redux-toolkit(Rtk) and Context:
1. Redux has a central store of states. This stores access to all the reducer functions and handles the state.
1. Redux has 'slices'. Slices are essentially all the features related to an aspect are written.
1. Redux uses Reducers. Reducers are the functions which make changes to the state. States must be mutated only through reducers, Store is the one global true state in Redux.
1. React has an API for redux called 'react-redux' which provides hooks like useSelector and useDispatch to mutate the states via reducers. useSelector is used to select a state from the store and useDispatch is used to dispatch and action for the reducer. An 'action' is basically an event which contains a payload object which gets delivered to the reducer for processing.
1. In Context API, We define the functionalities in the `App` component/some other component, But in Redux, functionalities are defined in slices as reducers themselves. Components essentially just dispatch actions to mutate the state.
1. While wrapping with a `<Provider>` instead of `value={{foo, bar}}`, we provide `store={store}`.


