export interface Usuarios {
    uid?:string,
    usuario?: string,
    email?: string,
    password?: string,
    }

    export interface AuthResponse {
        ok: boolean,
        msg?:string,
        uid?: string,
        name?: string,
        token?:string,
        email?:string
    }