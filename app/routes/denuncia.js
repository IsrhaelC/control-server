module.exports = function (app) {
    var controller = app.controllers.denuncia;
    app.get('/denuncia', controller.listaDenuncias);
    app.get('/denuncia/:id', controller.obtemDenuncia);
};