export function changeArr(arr,type,bl) {
    let newArr=[...arr]
    let len= newArr.length-1;
    let cArr = [];
    let ls;
    switch (type) {
        case 1:
            return newArr;
        case 2:
        newArr.map(val=>{
            if (val.title.length>30) {
                cArr.push(val)
            }
        })
            return cArr;        
        case 3:
        for (var i=0;i<len;i++) {
            for (var j=0;j<len-i;j++) {
                if (bl) {
                    if (newArr[j].price>newArr[j+1].price) {
                    ls = newArr[j+1];
                    newArr[j+1] = newArr[j];
                    newArr[j] = ls;
                    }
                } else {
                    if (newArr[j].price<newArr[j+1].price) {
                    ls = newArr[j+1];
                    newArr[j+1] = newArr[j];
                    newArr[j] = ls;
                    }
                }
            }
        }
            return newArr;       
        case 4:
        for (var i=0;i<len;i++) {
            for (var j=0;j<len-i;j++) {
                if (newArr[j].title.length<newArr[j+1].title.length) {
                ls = newArr[j+1];
                newArr[j+1] = newArr[j];
                newArr[j] = ls;
                }
             
            }
        }
            return newArr;
    }
}