import { User } from '../models/user.model';

class UserRepository {

    async create(user: User): Promise<string> {
        console.log(`Create: ${JSON.stringify(user)}`);
        return new Date().getTime().toString();
    }

    async update(user: User): Promise<string> {
        console.log(`Update: ${JSON.stringify(user)}`);
        return new Date().getTime().toString();
    }

    async remove(uuid: string): Promise<void> {
        console.log(`Remove ${uuid}`);
    }

    async findByUuid(uuid: string): Promise<User> {
        console.log(`Finding By UUID: ${uuid}`);
        return { uuid: new Date().getTime().toString(), username: 'mock' };
    }

    async findByUsernameAndPassword(username: string, password: string): Promise<User | null> {
        console.log(`Finding By Username And Password: ${JSON.stringify({ username, password })}`);
        return { uuid: new Date().getTime().toString(), username: username };
    }

}

export default new UserRepository();
