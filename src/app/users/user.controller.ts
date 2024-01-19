import { Request, Response } from "express";
import { UserRepository } from "./user.repository";
import { UserError } from "../../shared/errors/error.extension";

export class UserController {
    private user: UserRepository;
    constructor(user: UserRepository) {
        this.user = user;
    }
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.user.create(req.body);
            return res.status(201).json(user);
        } catch (error) {
            if (error instanceof UserError) return res.status(400).json({ error: error.message });
            else return res.status(500).json({ error: "Internal server error." });
        }
    }
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.user.update(req.body);
            return res.status(200).json(user);
        } catch (error) {
            if (error instanceof UserError) return res.status(400).json({ error: error.message });
            else return res.status(500).json({ error: "Internal server error." });
        }
    }
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            await this.user.delete(req.params.id);
            return res.status(204).json();
        } catch (error) {
            if (error instanceof UserError) return res.status(400).json({ error: error.message });
            else return res.status(500).json({ error: "Internal server error." });
        }
    }
    async findById(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.user.findById(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            if (error instanceof UserError) return res.status(400).json({ error: error.message });
            else return res.status(500).json({ error: "Internal server error." });
        }
    }
    async findAll(_req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.user.findAll();
            return res.status(200).json(users);
        } catch (error) {
            if (error instanceof UserError) return res.status(400).json({ error: error.message });
            else return res.status(500).json({ error: "Internal server error." });
        }
    }
}