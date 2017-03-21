const imagemin = require('imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const fs = require('fs');
const spawnSync = require('child_process').spawnSync;

console.log('------------ Optimizing images...');

imagemin([process.env.PWD + '/src/img/**/*'], process.env.PWD + '/dist/img', {
	plugins: [
		imageminJpegRecompress({
			accurate : true,
			quality : 'veryhigh',
			target : 0.65,
			min : 50,
			max : 75
		}),
		imageminPngquant({
			quality: '60-75'
		}),
		imageminGifsicle({}),
		imageminSvgo({})
	]
}).then(files => {
	const srcSizeSpawn = spawnSync('du', ['-sh', process.env.PWD + '/src/img']);
	const srcSize = srcSizeSpawn.stdout.toString().split(/\t/)[0];
	const distSizeSpawn = spawnSync('du', ['-sh', process.env.PWD + '/dist/img']);
	const distSize = distSizeSpawn.stdout.toString().split(/\t/)[0];
	console.log('- src/img folder size :  ' + srcSize);
	console.log('- dist/img folder size : ' + distSize);
	console.log('------------ Images optimized!');
});
