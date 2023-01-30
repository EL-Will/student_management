import React,
{useState,
useEffect,
Component} from 'react'
import '../css/common.css'

export default function BodyTable(props){
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.MSV}</td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.gender}</td>
            <td>
                <div className="template-demo">
                <button
                    type="button"
                    className="btn btn-danger btn-icon-text"
                >
                    Xem
                </button>
                <button
                    type="button"
                    className="btn btn-warning btn-icon-text"
                >
                    Sửa
                </button>
                <button
                    type="button"
                    className="btn btn-success btn-icon-text"
                >
                    Xóa
                </button>
                </div>
            </td>
        </tr>
    )
}