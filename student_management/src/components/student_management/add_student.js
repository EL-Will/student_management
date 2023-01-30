import React,
{useState,
useEffect,
Component} from 'react'

import '../css/common.css'
import FormInput from './form_input'
import SelectOption from './select_option'

const listInput=[
    {
        id: 1,
        lable: 'Mã sinh viên',
        type: 'text',
        className: "form-control"
    },
    {
        id: 2,
        lable: 'Tên sinh viên',
        type: 'text',
        className: "form-control"
    },
    {
        id: 3,
        lable: 'Tuổi',
        type: 'number',
        className: "form-control"
    },
    {
        id: 4,
        lable: 'Ngày sinh',
        type: 'date',
        className: "form-control"
    }
]
const listOption=[
  {
      id: 1,
      value:'',
      text:'Hà Nội'
  },
  {
      id: 2,
      value:'',
      text:'TP. Hồ Chí Minh'
  },
  {
      id: 3,
      value:'',
      text:'Đà Nẵng'
  },
  {
      id: 4,
      value:'',
      text:'Quảng Ninh'
  }
]
const listGender=[
  {
    id: 1,
    value:'',
    text:'Nam'
  },
  {
    id: 2,
    value:'',
    text:'Nu'
  },
]
export default function Add_Student(){
    return(
    <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample">
                {listInput.map((item)=>(
                    <FormInput key={item.id} lable={item.lable} type={item.type} className={item.className}/>
                ))}
            
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select className="form-control">
                  {listGender.map((item)=>(
                    <SelectOption key={item.id} value={item.value} text={item.text}/>
                  ))}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select className="form-control">
                  {listOption.map((item)=>(
                    <SelectOption key={item.id} value={item.value} text={item.text}/>
                  ))}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea className="form-control"></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
}