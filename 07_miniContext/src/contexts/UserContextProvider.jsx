// Here, We will populate the context with values
// Importing the created context

import React from 'react';
import UserContext from "./UserContext";

function UserContextProvider({children}){
    const [user , setUser] = React.useState(null)
    
    // Essentially, we use the provider to pass the values required.
    // The context is populated and ready to use in components now

    return (
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider