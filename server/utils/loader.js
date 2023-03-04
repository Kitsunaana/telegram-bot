const fs = require('fs')
const path = require('path');
const { compareStringInArray } = require('./compare');

const getErrorMessage = (fileName, message) => { console.log(`Error load ${fileName}: ${message}`) }

const check = (options) => {
    if (!options && options !== "object" && !options.path) return false
    if (options.exclude && !Array.isArray(options.exclude)) return false
    return true
}

const defExclude = (file) => file.indexOf(".") !== 0 && file !== 'index.js' && file.slice(-3) === ".js"
const arrayExclude = (exclude) => { return (file) => !compareStringInArray(file, exclude) }

module.exports = (options, data) => {
    if (!check(options)) return

    fs.readdirSync(options.path)
        .filter(options.exclude ? arrayExclude : defExclude)
        .forEach((file) => { 
            let moduleName = path.basename(file, '.js')

            if (options.moduleNameExtExclude && typeof options.moduleNameExtExclude === "string") moduleName = path.basename(file, options.moduleNameExtExclude)
            if (options.moduleNameCb && typeof options.moduleNameCb === "function") moduleName = options.moduleNameCb(file)

            try {
                const module = require(`../${options.path}/${file}`)
                if (typeof module === "function") {
                    module(data)
                    console.log(`✅ ${options.type ? options.type : "module"}: ${moduleName}`)
                } else {
                    getErrorMessage(moduleName, "Error load module export is not function")
                }
            } catch (error) {
                getErrorMessage(moduleName, error.message)
            }
    })
}