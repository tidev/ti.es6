/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2018 by Axway, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
const fs = require('fs-extra'),
	  path = require('path'),
	  chalk = require('chalk'),
	  klaw = require('klaw-sync'),
	  spawnSync = require('child_process').spawnSync,
	  babel = require('@babel/core'),
	  env = require('@babel/preset-env'),
	  rollup = require('rollup'),
	  resolver = require('rollup-plugin-resolver');

exports.id = 'ti.es6';
exports.cliVersion = '>=3.2';
exports.init = (logger, config, cli, appc) => {

	cli.on('build.pre.compile', async (builder, callback) => {

		// disable transformations
		builder.minifyJS = false;
		builder.transpile = false;

		callback();
	});

	cli.on('build.pre.build', async (builder, callback) => {
		const moduleDir = path.resolve(__dirname, '..'),
			  resourcesDir = path.join(builder.projectDir, 'Resources'),
			  buildResourcesDir = builder.xcodeAppDir || builder.buildTargetAssetsDir || path.join(builder.buildDir, 'bin', 'assets', 'Resources'),
			  appJs = path.join(buildResourcesDir, 'app.js'),
			  titaniumDir = path.join(buildResourcesDir, 'Titanium'),
			  titaniumJs = path.join(buildResourcesDir, 'Titanium.js');

		// copy Titanium wrapper to project
		log(`including Titanium ES6 classes...`);
		if (!fs.pathExistsSync(titaniumDir)) {
			fs.copySync(path.join(moduleDir, 'Titanium'), titaniumDir);
		} else {
			log(` - found ${titaniumDir}, skipping...`);
		}
		if (!fs.pathExistsSync(titaniumJs)) {
			fs.copySync(path.join(moduleDir, 'Titanium.js'), titaniumJs);
		} else {
			log(` - found ${titaniumJs}, skipping...`);
		}

		// include '@babel/polyfill' into project
		log(`installing @babel/polyfill...`);
		let child = null;
		if (builder.platformName === 'windows') {
			child = spawnSync(
				process.env.comspec || 'cmd.exe',
				[ '/S', '/C', '"', 'npm', 'install', '@babel/polyfill', '-p','"' ],
				{
					cwd: buildResourcesDir,
					windowsVerbatimArguments: true
				}
			);
		} else {
			child = spawnSync(
				'npm',
				['install', '@babel/polyfill', '-p'],
				{
					cwd: buildResourcesDir,
					env: { PATH: process.env.PATH }
				}
			);
		}
		if (!child || child.error) {
			console.error('error: could not install polyfill');
			process.exit(-1);
		}

		// transpile
		log(`setting up babel...`);
		let options = {
				retainLines: true,
				presets: [],
				plugins: []
			},
			targets = {};

		// specify javascript engine target
		// android
		if (builder.chromeVersion) {
			targets.chrome = builder.chromeVersion;

		// ios
		} else if (builder.minSupportedIosSdk) {
			targets.ios = builder.minSupportedIosSdk;

		// windows
		} else {
			targets.safari = '10';
		}

		// setup transpilation options
		options.presets.push([ env, { targets: targets } ]);
		options.plugins.push(require.resolve('@babel/plugin-transform-async-to-generator'));

		// transpile javascript files
		log(`obtaining javascript files...`);
		const jsFiles = klaw(buildResourcesDir, { filter: item => item.path.endsWith('.js') && !item.path.includes('node_modules') });

		// rollup is required to workaround circular references unsupported by JavascriptCore
		// this should only run on 'app.js', bundling all dependencies into one file
		if (builder.platformName === 'iphone' || builder.platformName === 'windows') {
			let contents = fs.readFileSync(appJs).toString(),
				input = {
					[appJs]: `import '@babel/polyfill';${contents}`
				};

			// configure rollup
			log(`running rollup...`);
			const bundle = await rollup.rollup({
				input: input,
				context: `'${buildResourcesDir}'`,
				plugins: [
					resolver()
				]
			});

			// generate code and a source map
			// TODO: use source map
			const { code, map } = await bundle.generate({
				format: 'cjs',
				globals: {
					Titanium: 'Titanium',
					Ti: 'Ti'
				}
			});
			contents = code;

			// write and transpile bundled app.js
			log(`transpiling ${appJs}`);
			fs.removeSync(appJs);
			fs.writeFileSync(appJs, babel.transform(contents, options).code);

			// lets remove unnecessary files
			for (let file of jsFiles) {
				let filename = file.path;

				if (filename !== appJs) {
					fs.removeSync(filename);
				}
			}
			fs.removeSync(path.join(buildResourcesDir, 'Titanium'));

		// for other platforms, we just need to transpile
		} else {

			for (let file of jsFiles) {
				let filename = file.path,
					contents = `import '@babel/polyfill';${fs.readFileSync(filename).toString()}`;

				options.filename = filename;

				// write transpiled contents
				log(`transpiling ${filename}`);
				fs.removeSync(filename);
				fs.writeFileSync(filename, babel.transform(contents, options).code);
			}
		}

		// for android we need to re-package our changes
		if (builder.platformName === 'android') {
			builder.generateRequireIndex(() => {
				builder.packageApp(callback);
			});
		} else {
			callback();
		}
	});
}

function log (message) {
	console.log(chalk.blue(`[TI.ES6] ${message}`));
}
