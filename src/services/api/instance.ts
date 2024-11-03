import { ERRORS, Error, TOKENS } from '@/utils'
import axios, { CreateAxiosDefaults } from 'axios'
import Cookies from 'js-cookie'
import { User } from './user'


const options: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_SERVER,
    withCredentials: true,
}
export const axiosClassic = axios.create(options)

export const axiosAuth = axios.create(options)

axiosAuth.interceptors.request.use(config => {
    const token = Cookies.get(TOKENS.ACCESS_TOKEN) ?? null

    if (config?.headers && token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})
axiosAuth.interceptors.response.use(
    config => config,
    async error => {
        const config = error.config
        if (
            (error?.response?.status === 401
                || Error(error) === ERRORS.JWT_EXPIRED
                || Error(error) === ERRORS.NOT_TOKEN
            ) && error.config && !error.config._isRetry
        ) {
            try {
                config._isRetry = true
                await User.getNewTokens()
                return axiosAuth.request(error.config)
            } catch (error) {
                if (Error(error) === ERRORS.JWT_EXPIRED) {
                    Cookies.remove(TOKENS.ACCESS_TOKEN)
                }
            }
        }
        throw error
    })