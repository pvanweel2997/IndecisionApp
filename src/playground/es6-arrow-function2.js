// arguments object  - no longer bound with arrow functions


const add = function (a,b) {
    console.log(arguments)
    return a + b
}

const add2 =  (a,b) => {
    // console.log(arguments)
    return a + b
}
// console.log(add2(55,1,1001))


// this keyword - no longer bound

const user = {
    name: 'Patrick',
    cities: ['Oskaloosa','Waukee'],
    // printPlacesLived: function() {
        printPlacesLived() {
            console.log(this.name)
            console.log(this.cities)

        // doesn't work
        // this.cities.forEach( function (city) {
        //     console.log(this.name + ' has lived in '+city)
        // })

        // works
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in '+city)
        // })

        return this.cities.map((city) =>  this.name + ' has lived in '+city)
       
    }
}

const multiplier = {
    numbers: [5,2,8,9],
    muliplyBy: 2,
    multiply()  {
        return this.numbers.map((x) => x * this.muliplyBy)
    }
}

console.log(user.printPlacesLived())
console.log(multiplier.multiply())