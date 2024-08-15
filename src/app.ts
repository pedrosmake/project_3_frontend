import express from "express";
import nunjucks from "nunjucks";
import { getProjectForm, getSingleProject, postProjectForm } from "./controllers/ProjectController";
import { dateFilter } from "./filter/DateFilters";
import bodyParser from "body-parser";
import session from "express-session";
import { getLoginForm, getRegisterForm, postLoginForm, postRegisterForm } from "./controllers/AuthController";
import { allowRoles } from "./middleware/AuthMiddleware";
import { UserRole } from "./models/JwtToken";
import { getAllClients, getTopValueClient } from "./controllers/ClientController";
import { getTopClient } from "./services/ClientService";
import { getAllDeliveryEmployees, getAllSalesEmployees, getEmployeeForm, getSalesEmployeeForm, postEmployeeForm, postSalesEmployeeForm } from "./controllers/EmployeeController";
import { createEmployee } from "./services/EmployeeService";

const app = express();

const env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

env.addFilter('date', dateFilter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({ secret: 'SUPER_SECRET',
    cookie: { maxAge: 28800000},
   saveUninitialized: true}));

declare module "express-session"{
   interface SessionData {
       token: string;
   }
}

app.get('/clients', getAllClients)
app.get('/clients/top', getTopValueClient)

app.get('/employees/delivery', getAllDeliveryEmployees);
app.get('/employees/sales', getAllSalesEmployees);
app.get('/employees/employeeForm', getEmployeeForm);
app.get('/employees/salesEmployeeForm', getSalesEmployeeForm);

app.post('/employees/employeeForm', postEmployeeForm);
app.post('/employees/salesEmployeeForm', postSalesEmployeeForm);

app.get('/projectForm', getProjectForm);
app.post('/projectForm', postProjectForm);
app.get('/projects/:id', getSingleProject);

app.listen(3000, () =>{
    console.log('Server started on port 3000');
})
