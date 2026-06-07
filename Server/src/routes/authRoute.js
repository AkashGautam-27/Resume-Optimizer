const {Router} = require("express")
const { registerUserController,getMeController,loginUserController,logoutUserController } = require("../controllers/authConstroller")
const authRouter = Router()
const authMiddleware = require("../middleware/authMiddleware")

authRouter.post("/register",registerUserController)
authRouter.post("/login",loginUserController)
authRouter.get("/logout",logoutUserController)
authRouter.get("/get-me",authMiddleware.authUser,getMeController)

module.exports = authRouter