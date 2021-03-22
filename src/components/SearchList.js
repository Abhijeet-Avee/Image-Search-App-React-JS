import React from 'react';
import { Picture } from './Picture';
export const SearchList = (props)=>{
    let totalNumberOfRecords = props.imagedata.length;
    console.log('Props Received in List ',props.imagedata);
    const noRecordFoundJSX = <p>No Record Found</p>;
    const successJSX = (
        <>                  
        <p>List of Records {totalNumberOfRecords}</p>
        {/*props.imagedata.map(ele=><img src = {ele.images.original.url}/>)*/}
        {props.imagedata.map(ele=><Picture key={ele.id} url={ele.images.original.url}/>)}
        </>
    );
    // *Fragments <></> to return multiple tags/wrap the objects if we dont wanna use div.
    return(
        <div>
            <br></br>
            {props.imagedata.length==0?noRecordFoundJSX:successJSX}
        </div>
    )
}