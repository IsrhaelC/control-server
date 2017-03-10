var contatos = [];


module.exports = function () {
    var controller = {};
    var ID_CONTATO_INC = 10;

    controller.listaContatos = function (req, res) {
        res.json(contatos);
    };

    controller.obtemContato = function(req, res) {
        var idContato = req.params.id;
        var contato = contatos.filter(function(contato) {
            return contato._id == idContato;
        })[0];
        contato ?
            res.json(contato) :
            res.status(404).send('Contato não encontrado');
    };

    controller.salvaContato = function (req, res) {
        var contato = req.body;
        adiciona(contato);
        res.json(contato);
    };

    function adiciona(contatoNovo) {
        contatoNovo._id = ++ID_CONTATO_INC;
        contatos.push(contatoNovo);
        return contatoNovo;
    }
    return controller;
};