import { useCallback } from "react";
import { TABLES } from "../constants/tables";
import { useAppStore } from "../contexts/AppStoreContext";
import { paymentService } from "../services/PaymentService";
import { supabase } from "../supaBaseClient";

export const usePayment = () => {
    /* custom hooks */
    const { user, setUser, setPayments, payments } = useAppStore()


    const collect = async (paymentData) => {
        const res = await paymentService.pay(paymentData)
        if (res.success) {
            console.log('transaction: ', res)
            const transaction = {
                amount: res.transaction.amount,
                transaction_code: res.transaction.pk,
                phoneNumber: res.transaction.b_party,
                user_id: user.code
            }
            saveTransaction(transaction)
            setUser({ ...user, hasPayed: true });
            await updateUser()
        } else {
            return false
        }
    }

    const updateUser = useCallback(async () => {
        console.log('user data code: ', user)
        const { data: userDataInfo, error: userDataErr } = await supabase.from(TABLES.USER_DATA).update({ hasPayed: true }).match({ code: user.code });

        if (userDataErr) {
            console.log('user data error: ', userDataErr);
        } else {
            console.log('user data infor: ', userDataInfo)
        }
    })

    const saveTransaction = useCallback(async (transaction) => {
        const { data: result, error: insertError } = await supabase.from(TABLES.PAYMENTS).insert(transaction);

        if (insertError) {
            console.log('could not process payment record');
            console.log(insertError.message);
        } else {
            // save payment data in state
            setPayments([...payments, result]);
            console.log('payment data: ', result);
        }
    })


    return {
        collect,
    }
}
