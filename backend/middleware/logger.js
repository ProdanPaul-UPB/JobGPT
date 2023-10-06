const fs = require('fs');
const path = require('path');


function logger(err, req, res, next) {
    const timestamp = new Date().toISOString();
    const errorLog = `${timestamp}: ${err.stack}\n`;
    const logFilePath = path.join(__dirname, 'error.log');

    fs.appendFile(logFilePath, errorLog, (fileErr) => {
        if (fileErr) {
            console.error('Error writing to error log:', fileErr);
        }
    });

    next(err);
}

module.exports = logger;
