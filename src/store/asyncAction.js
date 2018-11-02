import * as types from './types';
export let asyncActionLogin=(url,dispatch,type,val)=>{
  dispatch({type:types.VIEW_LOADING,payload:true});
  fetch(
    url,
    {
      credentials: 'include',
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body:JSON.stringify(val)
    }
  ).then(
    res=>res.json()
  ).then(
    data=>{
      dispatch({type:types.VIEW_LOADING,payload:false});
      if (data) {
        dispatch({type:types.UPDATE_LOGIN,payload:true});
        dispatch({type:type,payload:data})      
      }
    }
  )
};
export let asyncActionAuto=(dispatch,type)=>{
  dispatch({type:types.VIEW_LOADING,payload:true});
  fetch(
    "http://localhost:8888/verify",
    {
      credentials: 'include',
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
  ).then(
    res=>res.json()
  ).then(
    data=>{

      dispatch({type:types.VIEW_LOADING,payload:false});
      if (data) {
        dispatch({type:types.UPDATE_LOGIN,payload:true});
        dispatch({type:type,payload:data})      
      }
    }
  )
};
export let asyncActionLogout=(dispatch,type)=>{

  dispatch({type:types.UPDATE_LOGIN,payload:false});
  dispatch({type:type,payload:{}})   
  fetch(
    "http://localhost:8888/logout",
    {
      credentials: 'include',
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
  )
};
export let asyncActionHome=(url,dispatch,type,val)=>{
  dispatch({type:types.VIEW_LOADING,payload:true});
  fetch(
    url,
    {
      credentials: 'include',
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body:JSON.stringify(val)
    }
  ).then(
    res=>res.json()
  ).then(
    data=>{
// console.log(data);
      if (data.length===0) {
        dispatch({type:types.VIEW_MORE,payload:false});
        
      } else {
        dispatch({type:type,payload:data})   
      }
      dispatch({type:types.VIEW_LOADING,payload:false});
      
    }
  )
};





export let asyncActionDetail=(url,dispatch,type,index)=>{
  fetch(
    url
  ).then(
    res=>res.json()
  ).then(
    data=>{
      dispatch({type:types.VIEW_LOADING,payload:false});
      dispatch({type:type,payload:data[index]})
    }
  );
  return {type:types.VIEW_LOADING,payload:true};
};

export let asyncActionAuth = (url,type,username,password) => (dispatch,getState)=>{

  dispatch({type:types.VIEW_LOADING,payload:true});

  fetch(
    url,
    // {body:{username:username, password:password}}
  ).then(
    res=>res.json()
  ).then(
    data=>{
      dispatch({type:types.VIEW_LOADING,payload:false});
      dispatch({type:type,payload:data})
    }
  );

};

