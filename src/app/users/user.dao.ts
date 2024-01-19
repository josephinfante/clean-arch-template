import { User } from "../../shared/classes/user.class";
import { UserError } from "../../shared/errors/error.extension";

class UserDao {
    async create(user: Partial<User>): Promise<User> {
        try {
            if (!user.name) throw new UserError("Name is required");
            return ({
                id: '1',
                name: 'name',
                email: 'email',
                password: 'password',
                created_at: new Date(),
                updated_at: new Date(),
            });
        } catch (error) {
            if (error instanceof UserError) throw new UserError(error.message);
            else throw new Error("Internal server error.")
        }
    }
    async update(user: Partial<User>): Promise<User> {
        try {
            if (!user.name) throw new UserError("Name is required");
            return ({
                id: '1',
                name: 'name',
                email: 'email',
                password: 'password',
                created_at: new Date(),
                updated_at: new Date(),
            });
        } catch (error) {
            if (error instanceof UserError) throw new UserError(error.message);
            else throw new Error("Internal server error.")
        }
    }
    async delete(id: string): Promise<void> {
        try {
            if (!id) throw new UserError("ID is required");
        } catch (error) {
            if (error instanceof UserError) throw new UserError(error.message);
            else throw new Error("Internal server error.")
        }
    }
    async findById(id: string): Promise<User> {
        try {
            if (!id) throw new UserError("ID is required");
            return ({
                id: '1',
                name: 'name',
                email: 'email',
                password: 'password',
                created_at: new Date(),
                updated_at: new Date(),
            });
        } catch (error) {
            if (error instanceof UserError) throw new UserError(error.message);
            else throw new Error("Internal server error.")
        }
    }
    async findAll(): Promise<User[]> {
        try {
            return [{
                id: '1',
                name: 'name',
                email: 'email',
                password: 'password',
                created_at: new Date(),
                updated_at: new Date(),
            }]
        } catch (error) {
            if (error instanceof UserError) throw new UserError(error.message);
            else throw new Error("Internal server error.")
        }
    }
}
const userDao = new UserDao();
export default userDao;