import { User } from "../../shared/classes/user.class";
import userDao from "./user.dao";
import { UserRepository } from "./user.repository";

export class UserRepositoryImpl implements UserRepository {
    create(user: Partial<User>): Promise<User> {
        return userDao.create(user);
    }
    update(user: Partial<User>): Promise<User> {
        return userDao.update(user);
    }
    delete(id: string): Promise<void> {
        return userDao.delete(id);
    }
    findById(id: string): Promise<User> {
        return userDao.findById(id);
    }
    findAll(): Promise<User[]> {
        return userDao.findAll();
    }
}