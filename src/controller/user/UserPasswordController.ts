import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../../entity/user/User";

export class UserPasswordController
{

    userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction)
    {
        return this.userRepository.createQueryBuilder().where("")
    }

    async one(request: Request, response: Response, next: NextFunction)
    {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction)
    {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction)
    {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}