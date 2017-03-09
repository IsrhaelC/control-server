var contatos = [
    {_id: 1, nome: "Paulo", email: 'paulo@g.com', senha: '12345', date: '06/08/1994', cidade: 'Fortaleza'},
    {_id: 2, nome: "João", email: 'joao@g.com', senha: '12345', date: '06/08/1994', cidade: 'Fortaleza'},
    {_id: 3, nome: "Pedro", email: 'pedro@g.com', senha: '12345', date: '06/08/1994', cidade: 'Quixada'},
    {_id: 4, nome: "Antonio", email: 'antonio@g.com', senha: '12345', date: '06/08/1994', cidade: 'São Paulo'},
    {_id: 5, nome: "Marcos", email: 'marcos@g.com', senha: '12345', date: '06/08/1994', cidade: 'Rio de Janeiro'},
    {_id: 6, nome: "Luis", email: 'luis@g.com', senha: '12345', date: '06/08/1994', cidade: 'Quixada'}
    ];


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
    };

    return controller;
};