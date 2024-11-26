import express from "express"
import { multerDelete, multerGet, multerPost, multerPut } from "../Controller/multerimage.controller.js";

const mulRouter = express.Router();

mulRouter.get('/', multerGet);

mulRouter.post('/', multerPost);

mulRouter.put('/:id', multerPut);

mulRouter.delete('/:id', multerDelete);

export default mulRouter