'use client';

import React, {useEffect, useState} from "react";

const page = () =>{
    const [count,setCount] = useState(0);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        setCount (count +1);
        setLoading (false)
    },[]);
    return   <div>{ loading ? <div>loading</div> : <div>yah meri jaydad hai</div> } </div>;
}
export default page;