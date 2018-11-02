import * as types from './types';
let reducer = (state,action) => {

    let {type,payload}=action;
    switch (type) {
      case types.VIEW_FOOT:
        return Object.assign({},state,{
          bFoot: payload
        });

      case types.VIEW_LOADING:
        return Object.assign({},state,{
          bLoading: payload
        });
        case types.VIEW_MORE:
        return Object.assign({},state,{
          more: payload
        });
        // case types.UPDATE_HOME:
        // return Object.assign({},state,{
        //   home: payload
        // });
        case types.UPDATE_TONE:
        return Object.assign({},state,{
          t1: payload
        });
        case types.UPDATE_TTWO:
        return Object.assign({},state,{
          t2: payload
        });
        case types.UPDATE_TTHREE:
        return Object.assign({},state,{
          t3: payload
        });
        case types.UPDATE_BANNER:
        return Object.assign({},state,{
          banner: payload
        });
        case types.UPDATE_CHECK:
        return Object.assign({},state,{
          check: payload
        });
        case types.UPDATE_ADDRESS:
        let add = {...state.user}
        add.address=payload
        return Object.assign({},state,{
          user: add
        });
        case types.UPDATE_LIST:
        let karr=[...state.list,...payload]
        return Object.assign({},state,{
          list: karr
        });
        case types.UPDATE_ALL:
        let narr=[...state.all,...payload]
        return Object.assign({},state,{
          all: narr
        });
        case types.UPDATE_DET:
        return Object.assign({},state,{
          det: payload[0]
        });
      // case types.CLEAR_HOME:
      //   return Object.assign({},state,{
      //     home: []
      //   });
      case types.REMOVE_USECAR:
      let arr1 = [...state.user.car]
      let newUser1 = {...state.user}
      arr1.map((val,index)=>{
        if (val.goods===payload.goods) {
          arr1.splice(index,1)
        }
      })
      newUser1.car=arr1
      return Object.assign({},state,{
        user: newUser1
      });
      case types.UPDATE_LOGIN:
        return Object.assign({},state,{
          login: payload
        });

      case types.UPDATE_USER:
        return Object.assign({},state,{
          user: payload
        });
        case types.UPDATE_USECAR:
        let arr = [...state.user.car]
        let onOf = true;
        let num = payload.num ||0
        arr.map(val=>{
          if (val.goods===payload.goods) {
            onOf=false;
            if (val.num+num<1) {
              num=0
            }
            val.num+=num
          let on = payload.onOff===undefined? val.onOff :payload.onOff            
            val.onOff= on
          }
        })
        if (onOf) {
          arr.push(payload)
        }
        let newUser = {...state.user}
        newUser.car=arr
        return Object.assign({},state,{
          user: newUser
        });
        case types.UPDATE_BUY:
        return Object.assign({},state,{
          buy: payload
        });
      // case types.UPDATE_DETAIL:
      //   return Object.assign({},state,{
      //     detail: payload
      //   });

      default:
        return state;
    }
  };
  
  export default reducer;