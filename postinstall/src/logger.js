const chalk = require('chalk');

module.exports = {
    logBold(message) {
        console.log(chalk.bold(chalk.green(message)));
    },
    log(message) {
        console.log(chalk.italic(chalk.yellow(message)));
    },
}