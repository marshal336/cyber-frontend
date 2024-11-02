import { TOKENS } from '@/utils'
import axios, { CreateAxiosDefaults } from 'axios'
import Cookies from 'js-cookie'


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
