import React, {useEffect, createContext} from 'react';


export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = React.useState({});
    const [status, setStatus] = React.useState('loading');
    
    useEffect(() => {
        let getProfileInfo = async () => {
            const response = await fetch(`/api/me/profile`);
            const data = await response.json();
            //const object = data.results;
            console.log('data: ', data);
            setCurrentUser(data)
            setStatus('idle')
        }
        getProfileInfo();
    }, []);

    return(
        <CurrentUserContext.Provider value={{
            currentUser,
            status,
        }}
        >
            {children}
        </CurrentUserContext.Provider>
    );
};

