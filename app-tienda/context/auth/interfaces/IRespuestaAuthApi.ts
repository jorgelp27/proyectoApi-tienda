

export interface IRespuestaApiAuth {
    hasError: boolean;
    message?: string;
}

export interface IUser {
    id?: number;
    fullName: string;
    email: string;
    password: string;
    isActive?: boolean;
    token?: string;
    roles?: string[]
}

export interface IAuth {
    idUser?:       string;
    email:         string;
    password:      string;
    isActive?:     boolean;
    token?:        string;
    fullName:      string;
    facebook?:     string;
    github?:       string;
   

}