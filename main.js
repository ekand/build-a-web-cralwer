

function main(){
    if (process.argv.length < 3) {
        console.log('error: too few arguments')
        return
    } else if (process.argv.length > 3) {
        console.log('error: too many arguments')
        return
    } else {
        console.log('proceeding')
        console.log('analyzing ' +  process.argv[2])
    }
  }
  
  main()