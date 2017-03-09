var router = require('./router');

var app = router(3412);

    var animals = [{
        name: 'Labrador Retrivier', year: 1, img: 'animal-1.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada,' +
        'nulla nec bibendum venenatis, elit tellus pulvinar sem, ac semper ante enim sit amet mauris.',
        respon: ""
    }, {
        name: 'Labrador Preto', year: 3, img: 'animal-2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada,' +
        'nulla nec bibendum venenatis, elit tellus pulvinar sem, ac semper ante enim sit amet mauris.',
        respon: ""
    }, {
        name: 'Gato Persa', year: 0.5, img: 'animal-3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada,' +
        'nulla nec bibendum venenatis, elit tellus pulvinar sem, ac semper ante enim sit amet mauris.',
        respon: ""
    },{
        name: 'Gato Siames', year: 0.8, img: 'animal-4.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada,' +
        'nulla nec bibendum venenatis, elit tellus pulvinar sem, ac semper ante enim sit amet mauris.',
        respon: ""
    },{
        name: 'Gato ', year: 1, img: 'animal-5.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada,' +
        'nulla nec bibendum venenatis, elit tellus pulvinar sem, ac semper ante enim sit amet mauris.',
        respon: ""
    },{
        name: 'PitBull', year: 1, img: 'animal-6.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada,' +
        'nulla nec bibendum venenatis, elit tellus pulvinar sem, ac semper ante enim sit amet mauris.',
        respon: ""
    },{
        name: 'Rottweiler', year: 2, img: 'animal-7.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada,' +
        'nulla nec bibendum venenatis, elit tellus pulvinar sem, ac semper ante enim sit amet mauris.',
        respon: ""
    }];

   var messages = [{
        name: 'Fulano de Tal', read: true,
        msg: 'Donec id elit teste mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
        date: 'Enviado à xd x dias',
        destinatario: ""
    }, {
        name: 'Fulano de Tal', read: false,
        msg: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
        date: 'Enviado à xx dias',
        destinatario: ""
    }, {
        name: 'Fulano de Tal', read: false,
        msg: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
        date: 'Enviado à xx dias',
        destinatario: ""
    }, {
        name: 'Fulano de Tal', read: false,
        msg: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
        date: 'Enviado à xx dias',
        destinatario: ""
    }, {
        name: 'Fulano de Tal', read: false,
        msg: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
        date: 'Enviado à xx dias',
        destinatario: ""
    }, {
        name: 'Fulano de Tal', read: false,
        msg: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
        date: 'Enviado à xx dias',
        destinatario: ""
    }];

   var users = [{
       name: 'Isrhael Christian',
       email: 'isrhael@hotmail.com',
       senha: '12345',
       nasc: '06/08/1994'
   },{
       name: 'Isrhael Christian',
       email: 'isrhael@hotmail.com',
       senha: '12345',
       nasc: '06/08/1994'
   }];

    app.get('/news', function (req, res) {
       res.write(JSON.stringify(animals));
       res.end();
    });

    app.post('/news', function (req, res) {
        var animal = req.body;
        animals.push(JSON.parse(animal));
        res.end();
    });

    app.get('/messages', function (req, res) {
        res.write(JSON.stringify(messages));
        res.end();
    });

    app.post('/message', function (req, res) {
        var message = req.body;
        messages.push(JSON.parse(message));
        res.end();
    });

    app.get('/users', function (req, res) {
        res.write(JSON.stringify(users));
        res.end();
    });

    app.post('/users', function (req, res) {
        var user = req.body;
        users.push(JSON.parse(user));
        res.end();
    });

    app.options('/options', function (req, res) {
        res.end();
    });