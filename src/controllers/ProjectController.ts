import express from "express";
import { createProject } from "../services/ProjectService";
import { getCustomers } from "../services/ClientService";

// export const getAllOrders =  async (req: express.Request, res: express.Response): Promise<void> => {
//     res.render('orderList.html', {orders: await getOrders() });
// }

// export const getSingleOrder = async (req: express.Request, res: express.Response): Promise<void> => {
//     res.render('orderDetail.html' , { order: await getOrderById(req.params.id)});
// }

// export const getOrderForm = async (req: express.Request, res: express.Response): Promise<void> => {
//     res.render('orderForm.html', {customers: await getCustomers()});
// }

export const getProjectForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('projectForm.html');
}

export const postProjectForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const id = await createProject(req.body);
        res.redirect('/projects/' + id)
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('projectForm.html', req.body);
    }
}
