import express from "express";
import { getClients, getTopClient } from "../services/ClientService";

export const getAllClients = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('clientList.html', {clients: await getClients()})
}

export const getTopValueClient = async(req: express.Request, res: express.Response): Promise<void> => {
    res.render("topClient.html", {topClient: await getTopClient()})
}
