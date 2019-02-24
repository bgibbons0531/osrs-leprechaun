#!/usr/bin/env node
const path = require('path');
const dotenv = require('dotenv');

const file = path.join(__dirname, '..', '.env');
dotenv.config({
  silent: process.env.NODE_ENV === 'production',
  path: file
});

console.log('Starting server...');

