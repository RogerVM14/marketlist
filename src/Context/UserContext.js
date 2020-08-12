import React, { useState, createContext } from 'react';

const UserContext = createContext();

//Hacemos destructuring
let { Provider, Consumer } = UserContext;

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        marketLists: [],
    });

    return (
        <Provider value={[user, setUser]}>
            {children}
        </Provider>
    );

}
export { UserProvider, Consumer as UserConsumer, UserContext }
