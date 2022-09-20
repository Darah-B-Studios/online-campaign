import { useNavigate } from "react-router-dom"
import { useAppStore } from "../contexts/AppStoreContext"
import { TABLES } from "../constants/tables"
import { ROUTES } from "../routes"
import { supabase } from "../supaBaseClient"

export const useInitialData = () => {
    const navigate = useNavigate()

    /* Import other hooks */
    const { user, setUser, setPayments } = useAppStore()

    const loadUserPayments = async (userId) => {
        const { data, error } = await supabase.from(TABLES.PAYMENTS).select().match({ 'user_id': userId })
        if (data && data.length > 0) {
            setPayments(data)
            navigate(ROUTES.ADMIN.DASHBOARD)
        }
        if (error) {
            console.log('error: ', error)
        }
    }

    const getUserData = async (userInfo) => {
        console.log('current user: ', user)
        const { data, error } = await supabase.from(TABLES.USER_DATA).select().match({ code: userInfo.id })
        if (data) {
            console.log('user data: ', data)
            setUser({
                ...userInfo,
                firstName: data.at(0).firstName,
                lastName: data.at(0).lastName,
                hasPayed: data.at(0).hasPayed
            })
            if (data.at(0).hasPayed) {
                await loadUserPayments(data.at(0).code)
            } else {
                navigate(ROUTES.REQUEST_PAYMENT)
            }
        }
        if (error) {
            console.log('error: ', error)
        }
    }

    return {
        loadUserInitialData: getUserData
    }
}
