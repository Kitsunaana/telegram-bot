const fs = require('fs')
const path = require('path');

const getErrorMessage = (fileName, message) => {
    console.log(`Error load ${fileName}: ${message}`) 
}

const initCommand = (bot) => {
    const commands = fs.readdirSync(__dirname)
        .filter((file) => file.indexOf(".") !== 0 && file !== 'index.js' && file.slice(-3) === ".js")
        .forEach((item) => { 
            const fileCommand = require(`./${item}`)
            const moduleName = path.basename(item, '.js')

            if (typeof fileCommand === 'function') { fileCommand(bot) }
            else { getErrorMessage(moduleName, "Error load is not a function") }
    })
}

module.exports = initCommand