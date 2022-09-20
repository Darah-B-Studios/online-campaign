import { createContext, useContext, useEffect, useState } from "react";

export const AppStoreContext = createContext({})

export const AppStoreProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([])
    const [payments, setPayments] = useState(null)

    const values = {
        user, setUser,
        users, setUsers,
        payments, setPayments
    }

    useEffect(() => {

    }, [user, payments, users])
    return (
        <AppStoreContext.Provider value={values}>
            {children}
        </AppStoreContext.Provider>
    )
}

export const useAppStore = () => useContext(AppStoreContext)

