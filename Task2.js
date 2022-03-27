function getSimpleNumber(num){

    if(num<=1000) {
        let simple = 2
        let i = 2
        while (i<=Math.sqrt(num)){
            simple  = 1
            if (num % i === 0) {
                simple = 0
                break
            }
            i ++
        }
        if (simple === 2)
            console.log(`Число ${num} является ни простым ни сложным`)
        else if (simple === 1)
            console.log(`Число ${num} - простое`)
        else
            console.log(`Число ${num} - сложное`)
    }else
        console.log('Данные неверны')


}
getSimpleNumber(127)