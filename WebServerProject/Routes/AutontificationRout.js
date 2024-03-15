import { Router } from "express";

import { login } from "../login/login.js";

import authenticationRules from "../validations/validationAutontification.js";

const AutontificationRout=Router()

AutontificationRout.post('/',authenticationRules, login)

export default AutontificationRout