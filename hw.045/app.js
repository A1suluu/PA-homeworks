// У вас есть многомерный массив чисел, с помощью рекурсии сделайте из него одномерный массив
// рекрусия - функция внутри функции





function func(arr) {
	for (let elem of arr) {
        if (typeof elem == 'object') {     //array.isArray(obj)
			func(elem);
            // console.log(typeof (elem))
		} else {
			console.log(elem);
        }
    }
}

func([
    [1,6,9,1,9],
    [4,7,8],
    [0,[6,9,0,2]]
]);




