const square = function(x) {
    return x * x
}

const squareArrow = (x) => {
    return x * x
}

// consise syntax
const squareArrow2 = (x) => x * x

const getLastName1 = (fullName) => {
    return fullName.split(' ')[0]
}

const getLastName = (fullName) => fullName.split(' ')[0]


console.log(square(2))
console.log(squareArrow(6))
console.log(squareArrow2(4))
console.log(getLastName1('John Smith'))
console.log(getLastName('Mike Smith'))