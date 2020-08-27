import { renderFile } from 'https://deno.land/x/dejs/mod.ts'
import InputLoop from 'https://deno.land/x/input/index.ts'

// const output = await renderFile(`${Deno.cwd()}/example-template/.ejs`, {
//   name: 'world',
// })

// const input = new InputLoop();
// input.choose(["Accepting node", "Non-accepting node"])
// .then(selectedOption => {
// })

// for await (const dirEntry of Deno.readDir(Deno.cwd())) {
//   console.log(dirEntry.name)
// }

const main = async (args: string[]) => {
  let input = new InputLoop()
  
  console.log("Choose which base project to build")
  
  let options = ["Mobile (React Native)", "Backend (Node)", "MVP (Mobile + Backend)"]
  let result = await input.choose(options)

  if (result[0]) {
    console.log("Seleccionaste la opcion: " + options[0])  
  }

  if (result[1]) {
    console.log("Seleccionaste la opcion: " + options[1])  
  }

  if (result[2]) {
    console.log("Seleccionaste la opcion: " + options[2])  
  }
}

main(Deno.args)