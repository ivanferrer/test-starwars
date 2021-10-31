export interface User {
    name?: string;
    username?: string;
    token?: string;
    roles?: any[];
    resources?: any[];
    password?: string;
    token_create_time?: string;
    current_role?: string;
}
export interface LoginUser {
    username?: string;
    password?: string;
}
