export class ResistorColor {
  private colors: string[]
  private colorValues: string[] = [
    'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white', 
  ]

  constructor(colors: string[]) {
    if(colors.length <2){
      throw new Error('At least two colors need to be present')
    }
    this.colors = [colors[0], colors[1]]
  }

  value = (): number => {
    let resistorValue = ''
    for(const col of this.colors){
      resistorValue += '' + this.colorValues.indexOf(col)
    }
    return parseInt(resistorValue, 10)
  }
}