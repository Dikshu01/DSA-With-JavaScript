let Arr = [2,4,5,1,3,6,7,9,8,10];

console.log(Arr);

    for(let i =0;i<Arr.length-1;i++){
        let j = Math.floor(Math.random()*(i+1));
        [Arr[i] , Arr[j]] = [Arr[j] , Arr[i]]
    }
console.log(Arr);

