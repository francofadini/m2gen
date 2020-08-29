import InputLoop from 'https://deno.land/x/input/index.ts'
import { Generator } from './generators/generator.ts'
import { MobileGenerator } from './generators/mobile-generator.ts'

const main = async (args: string[]) => {
  let input = new InputLoop()
  
  console.log("Choose which base project to build")
  
  let options = ["Mobile (React Native)", "Backend (Node)", "MVP (Mobile + Backend)"]
  let result = await input.choose(options)

  if (result[0]) {
    let mobileGenerator: Generator = new MobileGenerator()
    mobileGenerator.generate
  }

  if (result[1]) {
    console.log("Seleccionaste la opcion: " + options[1])  
  }

  if (result[2]) {
    console.log("Seleccionaste la opcion: " + options[2])  
  }
}

main(Deno.args)