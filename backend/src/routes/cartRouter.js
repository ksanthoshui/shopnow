import express from 'express'
import { addCart,updateCart,getCart } from '../controllers/cartsController.js'
import authUser from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/add',authUser,addCart)
cartRouter.post('/update',authUser,updateCart)
cartRouter.post('/get',authUser,getCart)


export default cartRouter ;

