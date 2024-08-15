import express from "express";
import { getOrderById, getOrders, createOrder } from "../services/ProjectService";
import { getCustomers } from "../services/ClientService";

export const getAllOrders =  async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('orderList.html', {orders: await getOrders(req.session.token) });
}

export const getSingleOrder = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('orderDetail.html' , { order: await getOrderById(req.params.id , req.session.token)});
}

export const getOrderForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('orderForm.html', {customers: await getCustomers()});
}

export const postOrderForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const id = await createOrder(req.body);
        res.redirect('/orders/' + id);
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('orderForm.html', req.body);
    }
}