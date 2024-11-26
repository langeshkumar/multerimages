import express from "express"
import { multerDelete, multerGet, multerPost, multerPut } from "../Controller/multerimage.controller.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'galary/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

const mulRouter = express.Router();

mulRouter.get('/', multerGet);

mulRouter.post('/', upload.single('sample'), multerPost);

mulRouter.put('/:id', multerPut);

mulRouter.delete('/:id', multerDelete);

export default mulRouter