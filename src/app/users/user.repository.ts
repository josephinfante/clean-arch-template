import { User } from "../../shared/classes/user.class";

export interface UserRepository {
    create(user: Partial<User>): Promise<User>;
    update(user: Partial<User>): Promise<User>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<User>;
    findAll(): Promise<User[]>;
}