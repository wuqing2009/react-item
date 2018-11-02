export function  getArr(start,count){
    let arr=[]
    for (let index = start; index < start+count; index++) {
        
        arr.push(index)
    }
    return arr
      
}
export function  getDayArr(year,month){
    let day = new Date(year,month,0).getDate()
    let arr=[]
    for (let index = 1; index <=day; index++) {
        
        arr.push(index)
    }
    return arr
      
}
export function oTa(obj) {
     let arr= [];
     for (const key in obj) {
        arr.push(obj[key])
     }
     return arr
 }
 export function defalutAddress(oldArr) {
    let obj= oldArr[0];
    oldArr.map(val=>{
    if (val.onOff) {
        obj=val
    }
    })
    return obj
}