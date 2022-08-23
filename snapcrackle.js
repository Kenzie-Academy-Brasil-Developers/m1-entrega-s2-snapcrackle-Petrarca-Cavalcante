function SnapCrackle(maxValue) {
    let result = []
    let convertString = 0
    for(let i = 1; i < maxValue + 1; i++){
                
        if (i % 2 == 0 && i % 5 != 0) {
            result.push(` ${i}`)
        }                
        if (i % 2 != 0 && i % 5 != 0) {
            result.push(" Snap")
        }
        if (i % 2 == 0 && i % 5 == 0) {
            result.push(" Crackle")
        } 
        if (i % 2 != 0 && i % 5 == 0) {
            result.push(" SnapCrackle")
        }      
    }  

    convertString = result.toString()
return convertString
}

console.log(SnapCrackle(40))