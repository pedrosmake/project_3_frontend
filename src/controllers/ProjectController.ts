import express from "express";
import { createProject, getProjectById } from "../services/ProjectService";


export const getSingleProject = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('projectDetail.html', { project: await getProjectById(req.params.id) })
}

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
