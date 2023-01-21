import React from 'react'
import { useState,useEffect } from 'react'
import './ContentBody.css'
import Card from './ContentCard/Card'
export default function ContentBody() {
    var [data,setdata] = useState([]);
    async function setApiData(){
        var apidata = await fetch('https://dummyjson.com/posts')
        var tempdata = await apidata.json();
        setdata(tempdata);
        console.log(tempdata);
    }
    
    useEffect(()=>{
        setApiData();
    },[data])
    return (
        <div className='contentbody'>
            <div className="post">
                {/* <div className="inputdiv">
                    <input className='input' type="text" /><span>Post</span>
                </div> */}

            </div>
            <div className="comments">
                <Card body={data?.posts[0]?.body} title={data?.posts[0]?.title} reaction={data?.posts[0]?.reactions} tag={data?.posts[0]?.tags}/>
            </div>
        </div>
    )
}
