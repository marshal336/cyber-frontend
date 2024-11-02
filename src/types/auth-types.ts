export interface IBaseAuth {
    email: string
    password: string
}
export interface IAuth extends IBaseAuth {
    fullName?: string
}

export interface IUser {
    id: string
    fullName?: string
    email: string
    role: string
    createdAt: string
    updatedAt: string
    accessToken: string
}
