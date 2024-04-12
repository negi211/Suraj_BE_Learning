const getNotes = require('./notes.js');
const chalk = require('chalk')
const yargs = require('yargs');
const log = console.log
const msg  = getNotes();
log(msg)

const greenMSG = chalk.red.inverse.bold('Error')
log(greenMSG);


//create add commands

yargs.command({
    command:'add',
    describe:'Add a new note',
    handler :function(){
        log('Add a new note.')
    }
})



