const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(path.join(__dirname, 'static'));
})

router.get('/celup', (req, res) => {
    res.send(path.join(__dirname, '/celup'));
})

router.get('/project', (req, res) => {
    res.send(path.join(__dirname, '/project'));
})

router.get('/service', (req, res) => {
    res.send(path.join(__dirname, '/service'));
})

router.get('/star_service', (req, res) => {
    res.send(path.join(__dirname, '/star_services'));
})

router.get('/food_service', (req, res) => {
    res.send(path.join(__dirname, '/food_service'));
})

router.get('/food_detail', (req, res) => {
    res.send(path.join(__dirname, '/food_detail'));
})

router.get('/food_car', (req, res) => {
    res.send(path.join(__dirname, '/food_car'));
})

router.get('/basket', (req, res) => {
    res.send(path.join(__dirname, '/basket'));
})

router.get('/store', (req, res) => {
    res.send(path.join(__dirname, '/store'));
})

router.get('/store_detail', (req, res) => {
    res.send(path.join(__dirname, '/store_detail'));
})

router.get('/star_news', (req, res) => {
    res.send(path.join(__dirname, '/star_news'));
})

router.get('/search', (req, res) => {
    res.send(path.join(__dirname, '/search'));
})

router.get('/search_result', (req, res) => {
    res.send(path.join(__dirname, '/search_result'));
})

router.get('/make_celup', (req, res) => {
    res.send(path.join(__dirname, '/make_celup'));
})

router.get('/profile', (req, res) => {
    res.send(path.join(__dirname, '/profile'));
})

router.get('/using', (req, res) => {
    res.send(path.join(__dirname, '/using'));
})

router.get('/login', (req, res) => {
    res.send(path.join(__dirname, '/login'));
})
module.exports = router;