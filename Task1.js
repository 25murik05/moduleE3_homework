function getElements(){
    let mass = ['adsdsdad', 13231234535, '244343434', 152334555565632, '???', null]
    let n = 0
    let c = 0

    mass.forEach(function (item,index){

        if(typeof item == "string"){
            if (item.length % 2 === 1)
                n ++
            else
                c++
        }else if (typeof item == 'number'){
            if(item % 2 ===1)
                n++
            else
                c++
        }

    })

    console.log(`Четных элементов в массиве - ${c}. Нечетных элеметнов в массиве - ${n}.`)}
getElements()