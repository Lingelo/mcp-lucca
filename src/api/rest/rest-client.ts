import axios, {AxiosInstance} from "axios";
import {User} from "./types/user";
import {config} from "../../config";

export class RestClient {
    private readonly client: AxiosInstance;
    constructor() {
        this.client = axios.create({
            baseURL: config.api.lucca.host,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.api.lucca.apiKey}`
            },
        });
    }

    async getUsers(): Promise<User[]> {
        return (await this.client.get<User[]>('/api/v3/users')).data;
    }

    async getUser(id: string): Promise<User> {
        return (await this.client.get<User>(`/api/v3/users/${id}`)).data;
    }
}
