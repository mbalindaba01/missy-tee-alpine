const supertest = require('supertest');
const PgPromise = require("pg-promise")
const express = require('express');
// const assert = require('assert');
const fs = require('fs');
require('dotenv').config()

const API = require('./api');

const { default: axios } = require('axios');
const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const config = {
	connectionString: process.env.DATABASE_URL || 'postgresql://postgres:Minenhle!28@localhost:5432/garments',
	max: 30,
	// ssl: { rejectUnauthorized : false}
};

const pgp = PgPromise({});
const db = pgp(config);

API(app, db);

let PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
    console.log('App started on port: ', PORT);
});
