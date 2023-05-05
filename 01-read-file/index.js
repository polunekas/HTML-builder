let text = ""
let fs = require("fs")
let path = require("path")
let file = path.join(__dirname, "text.txt")

let stream = fs.createReadStream(file, "utf-8")

stream.on("data", (a) => (text = a + text))
stream.on("end", () => console.log(text))