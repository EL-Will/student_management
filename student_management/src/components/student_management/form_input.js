import React,
{useState,
useEffect,
Component} from 'react'
import '../css/common.css'

export default function FormInput(props){
    return (
        <div className="form-group row">
            <label className="col-sm-3 col-form-label">{props.lable}</label>
            <div className="col-sm-9">
                <input type={props.type} className={props.className} />
            </div>
        </div>
    )
}