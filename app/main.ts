import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the simple CLI application!");

function repl() {
  rl.question("$ ", (input: string) => {
    console.log(`${input}: command not found`);
    repl();
  });
}

repl();
