#!/usr/bin/env node

/* eslint-disable id-length, strict */
'use strict';

const parseArgs = require('minimist');

const gcCli = require('../dist/index');

const commandParseOptions = {
	alias: {
		n: 'namespaces',
		r: 'removeRequires',
		o: 'outputDirectory',
		t: 'compileTestFiles'
	},
	default: {
		compileTestFiles: false,
		removeRequires: 'caplin',
		namespaces: 'caplin,caplinx,caplinps,ct,br'
	}
};

const options = parseArgs(process.argv.slice(2), commandParseOptions);
const optionsObject = gcCli.createOptionsObject(options);

gcCli.processFile(optionsObject);
