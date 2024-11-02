import { IAuth, IUser } from "@/types";
import { axiosClassic, axiosAuth } from "../instance";
import Cookies from "js-cookie";
import { Error, PAGES_DASHBOARD, TOKENS } from "@/utils";
import { toast } from "sonner";

export const User = {
    main: async (data: IAuth, variant: 'login' | 'register') => {
        try {
            const res = await axiosClassic.post<IUser>(`/user/${variant}`, data)
            if (res.status === 200) {
                if (res.data.accessToken) {
                    Cookies.set(TOKENS.ACCESS_TOKEN, res.data.accessToken, {
                        sameSite: 'strict',
                        secure: true
                    })
                }
                return res.data
            }
        } catch (error) {
            const message = Error(error)
            toast.error(message, {
                className: 'bg-red-500 text-white border-none'
            })
        }
    },
    profile: async () => {
        try {
            const res = await axiosAuth.get<Omit<IUser, 'accessToken'>>(`/user/${PAGES_DASHBOARD.PROFILE}`)
            if (res.status === 200) {
                return res.data
            }
        } catch (error) {
            const message = Error(error)
            toast.error(message, {
                className: 'bg-red-500 text-white border-none'
            })
        }
    }
}