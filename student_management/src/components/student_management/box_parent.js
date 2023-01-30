import React,
{useState,
useEffect,
Component} from 'react'

import '../css/common.css'
import Display_Student from './display_student'
import Add_Student from './add_student'

export default function BoxParent(){
    return(
        <div class="row">
            <Display_Student/>
            <Add_Student/>
        </div>
    )
}