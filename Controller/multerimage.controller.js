export const multerGet = (req, res) => {
    res.json({ message: "This is get method..!" });
}

export const multerPost = (req, res) => {
    res.json(req.file);
}

export const multerPut = (req, res) => {
    res.json({ message: "This is put method..!" });
}

export const multerDelete = (req, res) => {
    res.json({ message: "This is delete method..!" });
}