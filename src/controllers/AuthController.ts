import { log } from "console";
import express from "express";
import { getToken, register } from "../services/AuthService";


export const getLoginForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('loginForm.html');
}

export const postLoginForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        req.session.token = await getToken(req.body);
        res.redirect('/home');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('loginForm.html', req.body);
    }
}

export const getRegisterForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('registerForm.html');
}

export const postRegisterForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        register(req.body);
        res.redirect('/loginForm');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('registerForm.html', req.body);
    }
}

export const getHomePage = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('index.html');
}
