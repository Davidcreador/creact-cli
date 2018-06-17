# Reacli

## Description

Command line tool for React, to create components or any other file.

### Steps:

- Create commands using commander, to create specific type of file.
  - type(component - service - interface - etc..).
  - name
  - extension (.js - .ts).
  - folder (directory where to output the files).
- Get what the user's input is. (Commander arguments)
- Create the directories (If there are any).
  - Check in which directory I am in.
  - Output the file(s) in the specific folder the user passed in.
- Create the file ([name]+[extension]).
  - Use the name the user passed in and the file extension.
- Use templates to create the files requested by the user. (file - test file)
  - Each template is the type of string with a placeholder inside to be changed with the [name] the user passed in.
