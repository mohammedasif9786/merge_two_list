//[1,2,3,4] [1,2,3] = [1,1,2,2,3,3,4]
let mergeList = (inputArr1 ,inputArr2)=>{

    if(mergeList.length == 2){

    let highLen=" "
        highLen = inputArr1.length > inputArr2.length ? inputArr1.length : inputArr2.length

    let finalArr =[]
 for(let i=0 ; i<highLen ; i++){
       if(inputArr1[i] != undefined){
         finalArr.push(inputArr1[i])
         
         if(inputArr2[i] != undefined)
         finalArr.push(inputArr2[i])
       }
    }
return finalArr
}
else{
    return finalArr
}
}

mergeList([1,2,3],[1,2,3,4])

