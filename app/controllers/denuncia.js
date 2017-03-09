var denuncias = [
    {_id: 1, categoria: "Segurança", desc: 'Descrição', idAutor: 1, date: '06/08/1994', cidade: 'Fortaleza', end: 'Rua Livreiro Arlindo, 275'},
    {_id: 2, categoria: "Educação", desc: 'Descrição', idAutor: 2, date: '06/08/1994', cidade: 'Fortaleza', end: 'Rua Livreiro Arlindo, 300'},
    {_id: 3, categoria: "Saude", desc: 'Descrição', idAutor: 2, date: '06/08/1994', cidade: 'Fortaleza', end: 'Rua Livreiro Arlindo, 80'},
    {_id: 4, categoria: "Acessibilidade", desc: 'Descrição', idAutor: 3, date: '06/08/1994', cidade: 'Fortaleza', end: 'Rua Livreiro Arlindo, 120'},
    {_id: 5, categoria: "Desperdicio-agua", desc: 'Descrição', idAutor: 4, date: '06/08/1994', cidade: 'Fortaleza', end: 'Rua Livreiro Arlindo, 10'},
    {_id: 6, categoria: "Desperdicio-energia", desc: 'Descrição', idAutor: 5, date: '06/08/1994', cidade: 'Fortaleza', end: 'Rua Livreiro Arlindo, 400'}
];


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