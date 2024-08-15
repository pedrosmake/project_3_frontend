import axios, { AxiosResponse } from "axios";
import { Client } from "../models/Client";
import { ClientResponse } from "../models/ClientResponse";
import { TopClientResponse } from "../models/TopClientResponse";


export const getClients = async (): Promise<ClientResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/clients");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get clients');
    }
}

export const getTopClient = async (): Promise<TopClientResponse> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/clients/top");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get top clients');
    }
}