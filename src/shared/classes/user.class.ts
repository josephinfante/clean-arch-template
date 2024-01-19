export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    constructor(user: {
        id: string;
        name: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.created_at = user.created_at;
        this.updated_at = user.updated_at;
    }
}