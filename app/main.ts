import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function evaluate(input: string) {
  if (input === "exit") return "EXIT";
  return `${input}: command not found`;
}
function repl() {
  rl.question("$ ", (input: string) => {
    const result = evaluate(input);

    if (result === "EXIT") {
      rl.close();
      return;
    }

    console.log(result);
    repl();
  });
}

repl();
