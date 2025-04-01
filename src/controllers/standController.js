function getAll(req, res) {
    res.send("Conseguir todos los stands");
}

function getById(req, res) {
    const id = req.params.id;
    res.send("Conseguir el stand", id);
}

function create(req, res) {
    
}

function edit(req, res) {
    const id = req.params.id;
    const datos = req.body;
    res.send("Modificamos el stand", id);
}

function remove(req, res) {
    const id = req.params.id;
    res.send("Borramos el stand", id);
}

export const functions = {
    getAll, 
    getById,
    create,
    edit,
    remove
}

export default functions;