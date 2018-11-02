export function lookup(arr,type) {
    let newArr=[]
    arr.map(val=>{
        if (val.type===type) {
            newArr.push(val)
        }
    })
    if (newArr.length===0) {
        return false
    } else {
        return newArr
    }
}