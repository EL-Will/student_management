import React,
{useState,
useEffect,
Component} from 'react'

import '../css/common.css'
import BodyTable from './body_table'
import SelectOption from './select_option'

const listStudents=[
    {
        id: 1,
        MSV: 'SV001',
        name: 'Nguyen Van A',
        age: 20,
        gender: 'Nam'
    },
    {
        id: 2,
        MSV: 'SV002',
        name: 'Nguyen Van B',
        age: 21,
        gender: 'Nu'
    },
    {
        id: 3,
        MSV: 'SV003',
        name: 'Nguyen Van C',
        age: 19,
        gender: 'Nam'
    }
]

const listOption=[
    {
        id: 1,
        value:'',
        text:'Sắp xếp'
    },
    {
        id: 2,
        value:'',
        text:'Sắp xếp'
    },
    {
        id: 3,
        value:'',
        text:'Sắp xếp'
    },
    {
        id: 4,
        value:'',
        text:'Sắp xếp'
    }
]

export default function Display_Student(){

    return(
    <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-3">
                <button type="button" className="btn btn-primary btn-icon-text">
                  Thêm mới sinh viên
                </button>
              </div>
              <div className="col-6">
                <form className="search-form" action="#">
                  <i className="icon-search"></i>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Here"
                    title="Search here"
                  />
                  <button className="btn btn-primary btn-icon-text">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="col-3 d-flex align-items-center">
                <select className="form-control">
                  {listOption.map((item)=>(
                    <SelectOption key={item.id} value={item.value} text={item.text}/>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {listStudents.map((item)=>(
                    <BodyTable key={item.id} index={item.id} MSV={item.MSV} name={item.name} age={item.age} gender={item.gender}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}