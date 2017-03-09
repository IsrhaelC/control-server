module.exports = function (app) {
    var controller = app.controllers.denuncia;
    app.get('/denuncia', controller.listaDenuncias);
    app.post('/denuncia', controller.salvaDenuncia);
    app.get('/denuncia/:id', controller.obtemDenuncia);
};