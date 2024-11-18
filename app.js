const yargs = require('yargs')
const notes=require("./notas.js")

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})
console.log(yargs.argv)

yargs.command({ 
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(argv.title +" "+ argv.body)
        console.log("adding a new note!")
        notes.addNote(argv.title, argv.body)    }
})