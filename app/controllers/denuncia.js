var denuncias = [];


module.exports = function () {
    var controller = {};

    var ID_DENUNCIA_INC = 10;

    controller.listaDenuncias = function (req, res) {
        res.json(denuncias);
    };

    controller.obtemDenuncia = function(req, res) {
        var idDenuncia = req.params.id;
        var denuncia = denuncias.filter(function(denuncia) {
            return denuncia._id == idDenuncia;
        })[0];
        denuncia ?
            res.json(denuncia) :
            res.status(404).send('Denuncia não encontrada');
    };

    controller.salvaDenuncia = function (req, res) {
        var denuncia = req.body;
        adiciona(denuncia);
        res.json(denuncia);
    };

    function adiciona(denunciaNova) {
        denunciaNova._id = ++ID_DENUNCIA_INC;
        denuncias.push(denunciaNova);
        return denunciaNova;
    };

    return controller;
};