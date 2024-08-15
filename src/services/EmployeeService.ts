import axios, { AxiosResponse } from "axios";
import { EmployeeResponse } from "../models/EmployeeResponse";
import { SalesEmployeeResponse } from "../models/SalesEmployeeResponse";
import { EmployeeRequest } from "../models/EmployeeRequest";
import { SalesEmployeeRequest } from "../models/SalesEmployeeRequest";

export const getDeliveryEmployees = async (): Promise<EmployeeResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees/delivery");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get deliver employees');
    }
}

export const getSalesEmployees = async (): Promise<SalesEmployeeResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees/sales");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get sales employees');
    }
}

export const createEmployee = async (employee: EmployeeRequest): Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/employees/delivery", employee);
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}

export const createSalesEmployee = async (employee: SalesEmployeeRequest): Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/employees/sales", employee);
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}
