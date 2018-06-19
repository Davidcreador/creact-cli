creact-cli
=========
### Development tools for React

## Installation

    npm install -g creact-cli

## Usage

    Usage: creact gen [options]

    Options:

      -h, --help           output usage information
      -V, --version        output the version number
      -c, --component [name]  Create a component
      -s, --service [name]  Create a service
      -i, --interface [name]  Create a interface
      -f, --folder [path/to/folder]  Create folder structure and store the file
      -x, --extension [.ts/.js]  Add extension to the file

## Examples

Create component:

    creact gen -c my-component // my-component.js


Create component and folder

    creact get -c my-component -f src/app/components/  // src/app/components/my-component.js

Create component - folder - extension

    creact get -c my-component -f src/app/components/ -x .ts  // src/app/components/my-component.ts