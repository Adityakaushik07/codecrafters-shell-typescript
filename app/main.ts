import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function repl() {
  rl.question("$ ", (input: string) => {
    console.log(`${input}: command not found`);
    repl();
  });
}

repl();
