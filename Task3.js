function func1(num1){
    return function (num2) {
        let sum = num1 + num2
        return sum
    }
}

let a = func1(5)
// a(3)
console.log(a(5))