import axios, {AxiosInstance} from "axios";
import {User} from "./types/user";
import {config} from "../../config";

export class LuccaClient {
    private readonly client: AxiosInstance;
    constructor() {
        this.client = axios.create({
            baseURL: config.api.lucca.host,
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    async getUsers() {
        return (await this.client.get<User[]>('/api/v3/users')).data;
    }

    async getUser(id: string) {
        return (await this.client.get<User>(`/api/v3/users${id}`)).data;
    }
}
