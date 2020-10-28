const chalk = require('chalk');
const fs = require('fs');


function SaveLog(Content) {
    try {
        const date = new Date()
        const DataAtual = date.toLocaleDateString('pt-br', { dateStyle: 'short' });
        const LocalTime = date.toLocaleDateString('pt-br', { timeStyle: 'full' });
        const PathFolderLog = `./LOGS/LOG_${DataAtual}.TXT`
        console.log(chalk.green(LocalTime) + Content)
        fs.writeFileSync(PathFolderLog, LocalTime + Content)
    } catch {
        console.log(chalk.red("[FATAL]") + " Não foi possivel registrar o LOG")
    }
};
module.exports = {
    SaveLog
}

