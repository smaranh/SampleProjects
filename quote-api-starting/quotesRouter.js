const express = require('express');
const { quotes } = require('./data');
const { getRandomElement, isValidQuote } = require('./utils');

const quotesRouter = express.Router();
module.exports = quotesRouter;

// Return Random quotes
quotesRouter.get('/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send({quote: randomQuote});
});

//Fetch quote of specific author or return all quotes
quotesRouter.get('/', (req, res, next) => {
    const author = req.query.person;
    const filteredQuotes = author && quotes.filter(obj => obj.person === author);
    if(filteredQuotes) {
        res.send({quotes: filteredQuotes});
    } else {
        res.send({quotes: quotes});
    }
});

// Add a new Quote
quotesRouter.post('/', (req, res, next) => {
    const query = req.query;
    if (isValidQuote(query)) {
        quotes.push(query);
        res.status(201).send({quote: query});
    } else {
        res.status(400).send();
    }
});