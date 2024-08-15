import express from "express";
import { createEmployee, createSalesEmployee, getDeliveryEmployees, getSalesEmployees } from "../services/EmployeeService";

export const getAllDelivery =  async (req: express.Request, res: express.Response): Promise<void> => {
    
        res.render('deliveryEmployeeList.html', {employees: await getDeliveryEmployees()});
}

export const getAllSales =  async (req: express.Request, res: express.Response): Promise<void> => {
    
    res.render('salesEmployeeList.html', {employees: await getSalesEmployees()});
}

export const getEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('employeeForm.html');
}

export const postEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const id = await createEmployee(req.body);
        res.redirect('/employees/delivery');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('employeeForm', req.body);
    }
}

export const getSalesEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('salesEmployeeForm.html');
}

export const postSalesEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const id = await createSalesEmployee(req.body);
        res.redirect('/employees/sales');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('salesEmployeeForm.html', req.body);
    }
}