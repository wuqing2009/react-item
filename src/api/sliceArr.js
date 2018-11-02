
function sliceArr(arr) {
    let newArr = [];
    
    let len = parseInt(arr.length/4)
    for (let index = 0; index < len; index++) {
        newArr.push(arr.slice(index*4,index*4+4))   
    }
    return newArr
}
export default sliceArr