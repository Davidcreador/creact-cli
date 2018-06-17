#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

const create = require('./lib/create');

program.version(require('./package').version).usage('<command> [options]');

program
  .command('gen')
  .description('Create a new file type')
  .option('-c, --component [name]')
  .option('-x, --extension [extension]', 'File extension [.js]', '.js')
  .option('-s, --service [service]')
  .option('-i, --interface [interface]')
  .option('-f, --folder [folder]', 'Folder [./]', './')
  .action(cmd => {
    create(cleanArgs(cmd));
  });

// output help information on unknown commands
program.arguments('<command>').action(cmd => {
  program.outputHelp();
  console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`));
  console.log();
});

// add some useful info on help
program.on('--help', () => {
  console.log();
  console.log(`  Run ${chalk.cyan(`creact <command> --help`)} for detailed usage of given command.`);
  console.log();
});
program.commands.forEach(c => c.on('--help', () => console.log()));

// Program parses all the args and executes them
program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

// commander passes the Command object itself as options,
// extract only actual options into a fresh object.
function cleanArgs(cmd) {
  const args = {};
  cmd.options.forEach(o => {
    const key = o.long.replace(/^--/, '');
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    if (typeof cmd[key] !== 'function') {
      args[key] = cmd[key];
    }
  });
  return args;
}
