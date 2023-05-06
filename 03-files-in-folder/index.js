let fs = require("fs/promises")

let path = require("path")
let dir = path.join(__dirname, "secret-folder")
reading()
async function reading() {
  try {

    let all_files = await fs.readdir(dir, { withFileTypes: true })
    for (let file of all_files) {
	
      if (file.isFile()) {
        let file_path = path.join(__dirname, "secret-folder/", file.name)
		let stat = await fs.stat(file_path)
		let array = file.name.split(".")
        
        console.log(`${array[0]} - ${array[1]} - ${stat.size / 1024}kb`)
      }
    }
  } catch (error){ console.error(error)}
}

