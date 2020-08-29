import InputLoop from 'https://deno.land/x/input/index.ts'
import { exec } from 'https://deno.land/x/exec/mod.ts'
import { Generator } from './generator.ts'

export class MobileGenerator implements Generator {
  public async generate(){
    let input = new InputLoop()
    let projectName = await input.question("Choose an alphanumeric name for the project. ex: MyProjectName")

    if (!this.isAlphaNumeric(projectName)) {
      console.log("Name should be alpanumeric.")
      return
    }

    console.log('Initializing template...')

    await exec(`npx react-native init ${projectName} --template https://github.com/francofadini/react-native-template-base-project`)
    
    console.log('React Native template created! 🎉')
  }


  private isAlphaNumeric(text: string) {
    return text.match(/^[a-z0-9]+$/i) !== null
  }
}