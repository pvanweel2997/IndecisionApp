var nameVar = 'Patrick'
var nameVar = 'Mike'
console.log('nameVar',nameVar)

let nameLet = 'Jen'
nameLet = 'Julie'
console.log('nameLet',nameLet)

const nameConst = 'Frank'
console.log('nameConst',nameConst)


// block scoping

var fullName = 'Patrick VanWeelden'

if (fullName) {
    const firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName) // fails since const and let is blocked scope