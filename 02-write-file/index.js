let { stdin, stdout } = process
let fs = require("fs")
let path = require("path")


let file = path.join(__dirname, "text.txt")

let output = fs.createWriteStream(file)

stdout.write("Введите текст:\n")

stdin.on("data", (input) => {
  if (input.toString() === "exit\r\n") {
    process.exit()
  }
  output.write(input)

})

process.on("exit", () => stdout.write("Ввод закончен!"))

process.on("SIGINT", () => {

  process.exit()
});