type UserInfo = {
    id: number;
    name: string;
    email: string;
}

type AdminInfo = UserInfo & {
    role: string;
    lastLoggedIn: Date;
}


export { type UserInfo, type AdminInfo };