import React, { Component } from 'react'
import Top from '../common/Top';
import InputText from '../common/InputText';
import Select from '../common/Select';
import {getDayArr,getArr} from '../api/getArr';
import './message.css'
import SaveBtn from '../common/SaveBtn';
import * as types from '../store/types';
import {connect} from 'react-redux';
import {Prompt} from 'react-router-dom';
 class Message extends Component {
  constructor(props) {
    super(props);
    this.send=this.send.bind(this)
    this.save=this.save.bind(this)
    this.head=this.head.bind(this)
    this.file=this.file.bind(this)
    this.state={
      isChange:false,
      url:props.user.img,
      nikeName:props.user.name,
      email:props.user.email,
      sex:props.user.sex,
      year:props.user.birthday.split('/')[0],
      month:props.user.birthday.split('/')[1],
      day:props.user.birthday.split('/')[2],
    }
  }

  render() {
    let {nikeName,email,sex,month,day,year,url}=this.state
    return (
      <div className="messageDiv Max">
        <Top val='个人资料'></Top>
        <div className="basisBoxTitle">基础信息</div>
        <div className="basisBox">
          <div className="headImg">
                <div className="z headImgText">头像</div>
                <div className="y headImgBox">
                    <img className="upHeadImgBtn" src={url} alt="点击修改头像" title='点击修改头像' onClick={this.head} />
                    <input type="file" id="upHeadImgBtn" ref="filed" style={{display: "none"}} onChange={this.file} />
                </div>
          </div>
          <InputText send={this.send} val={nikeName} title="昵称" name="nikeName" ></InputText>
          <div className="VipNum smallBox">
            <div className="z leftBox">会员号</div>
            <div className="y rightBox">
                 <p>{this.props.user.tel}</p>
            </div>
          </div>
          <InputText send={this.send} val={email} title="邮箱地址" name="email" sty={{width:"150px"}} ></InputText>
          <InputText send={this.send} val={sex} title="性别" name="sex" ></InputText>
          <div className="day smallBox">
            <div className="z leftBox">生日</div>
            <div className="y rightBox">
            <Select list={getArr(1950,69)} send={this.send} name="year" val={year}></Select>年
            <Select list={getArr(1,12)} send={this.send} name="month" val={month}></Select>月
            <Select list={getDayArr(year,month)} send={this.send} name="day" val={day}></Select>日
            </div>
          </div>
            <SaveBtn save={this.save}></SaveBtn>
        </div>
        <Prompt
          when={this.state.isChange}
          // message="你走了"
          message={()=>{
            return "修改的信息未保存,确定要离开吗？"
          }}
        />
      </div>
    )
  }
  save(){
    this.setState({
      isChange:false
    });
    let user={...this.props.user};
    let {nikeName,email,sex,month,day,year,url}=this.state;
    user.name=nikeName;
    user.email=email;
    user.sex=sex;
    user.birthday=year+'/'+month+'/'+day;
    user.img=url;
    this.props.updateUser(user);
    setTimeout(() => {
    this.props.history.push('/user')      
    }, 0);

  }
  head(){
    this.refs.filed.click()
  }
  file(e){

    let file = e.target.files[0];
    let param = new FormData();
    param.append('file', file);
    // ****大坑 绝对不能加headers
    fetch(
      "http://localhost:8888/file",
      {
        method: 'POST',
        credentials: 'include',
        body:param
      }
    ).then(res=>res.text()).then(data=>{
      this.setState({
        url:data,
        isChange:true
      });
    })
  }
  send(ele){
    this.setState({
      [ele.target.name]:ele.target.value,
      isChange:true
    });
  }
}
let initMapStateToProps =(state)=>({
  userc:state.user
})
let initMapDispatchToProps=(dispatch)=>({
  updateUser:(val)=>(dispatch({type:types.UPDATE_USER,payload:val}))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Message)
