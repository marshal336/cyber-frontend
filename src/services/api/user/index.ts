import { IAuth, IUser } from "@/types";
import { axiosClassic, axiosAuth } from "../instance";
import Cookies from "js-cookie";
import { Error, PAGES_DASHBOARD, TOKENS } from "@/utils";
import { toast } from "sonner";
import { IProfileInputs } from "@/components/ProfilePage";

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
    },
    changeProfile: async (data: Partial<IProfileInputs>) => {
        try {
            const res = await axiosAuth.post<Omit<IUser, 'accessToken'>>(`/user/${PAGES_DASHBOARD.PROFILE}`, data)
            if (res.status === 200) {
                return res.data
            }
        } catch (error) {
            const message = Error(error)
            toast.error(message, {
                className: 'bg-red-500 text-white border-none'
            })
        }
    },
    logout: async () => {
        try {
            const res = await axiosAuth.delete<boolean>(`/user/logout`)
            if (res.status === 200, res.data) {
                Cookies.remove(TOKENS.ACCESS_TOKEN)
                toast.success('Logout success', {
                    className: 'bg-green-500 text-white border-none'
                })
            }
        } catch (error) {
            const message = Error(error)
            toast.error(message, {
                className: 'bg-red-500 text-white border-none'
            })
        }
    },
    getNewTokens: async () => {
        try {
            const res = await axiosClassic.post<IUser>(`/auth/login/access-token`)
            if (res.status === 200 && res.data.accessToken) {
                Cookies.set(TOKENS.ACCESS_TOKEN, res.data.accessToken, {
                    sameSite: 'strict',
                    secure: true
                })
                return res.data
            }
        } catch (error) {
            const message = Error(error)
            toast.error(message, {
                className: 'bg-red-500 text-white border-none'
            })
            throw error
        }
    }
}