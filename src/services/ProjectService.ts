import axios, { AxiosResponse } from "axios";
import { ProjectResponse } from "../models/ProjectResponse";
import { ProjectRequest } from "../models/ProjectRequest";
import { Project } from "../models/Project";
// import { getHeader } from "./AuthUtil";

export const getProjects = async (): Promise<ProjectResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/projects");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get orders');
    }
}

export const getProjectById = async(id: String ): Promise<Project> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/projects/" + id);
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get order');
    }

}

export const createProject = async (project: ProjectRequest): Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/projects", project);
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}
