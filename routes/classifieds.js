'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

// YOUR CODE HERE
router.get('/', (req, res, next) => {
    knex('classifieds')
        .select('id', 'title', 'description', 'price', 'item_image')
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id', (req, res, next) => {
    var id = Number.parseInt(req.params.id);
    if (Number.isNaN(id)) {
        return next();
    }
    knex('classifieds')
        .select('id', 'title', 'description', 'price', 'item_image')
        .where('id', id)
        .then((row) => {
            res.send(row[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/', (req, res, next) => {
    var { title, description, price, item_image } = req.body;
    knex('classifieds')
        .insert({ title, description, price, item_image }, ['id', 'title', 'description', 'price', 'item_image'])
        .then((row) => {
            res.send(row[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/:id', (req, res, next) => {
    var id = Number.parseInt(req.params.id);
    var { title, description, price, item_image } = req.body;
    if (Number.isNaN(id)) {
        return next();
    }
    knex('classifieds')
        .where('id', id)
        .update({ title, description, price, item_image }, ['id', 'title', 'description', 'price', 'item_image'])
        .then((row) => {
            res.send(row[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/:id', (req, res, next) => {
    knex('classifieds')
        .where('id', req.params.id)
        .del()
        .returning(['id', 'title', 'description', 'price', 'item_image'])
        .then((row) => {
            res.send(row[0]);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;
