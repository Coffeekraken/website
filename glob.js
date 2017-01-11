const glob = require('glob');
const paths = glob.sync('node_modules/coffeekraken-sugar/js/**/*.js');
console.log(paths);
