function getNum(num1, num2){
    let a = num1
    let timerId = setInterval(function (){
        console.log(a)
        if (a == num2)
            clearInterval(timerId)
        a++
    },1000)
}
getNum(5,15)