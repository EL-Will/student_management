import React,
{useState,
useEffect,
Component} from 'react'
import '../css/common.css'

export default function SelectOption(props){
    return (
        <option value={props.value}>{props.text}</option>
    )
}