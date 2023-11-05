import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    // throw new Error("Method not implemented.");

    return [
      {
        firstName: "felipe",
        lastName: "rocha",
        email: "felipe@gmail.com",
        password: "123",
      },
    ];
  }
}
