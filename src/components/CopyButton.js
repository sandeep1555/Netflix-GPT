import React, { useState } from 'react'

const CopyButton = ({text}) => {
    const [copyStatus,setCopyStatus]=useState(false);


const handlecopyButton=async()=>
{
     try{
    await navigator.clipboard.writeText(text);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(null), 1000);
     }
     catch(err){
setCopyStatus("fialed to copy");
setTimeout(() => setCopyStatus(null), 1000);
     }
}


  return (
    <div className='inline-block'>
        <span className=" relativehover:underline cursor-pointer text-red-600 " onClick={handlecopyButton}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>
</span>
        {copyStatus &&<div className='absolute  mt-4'>
            <span className='bg-red-500 p-2 rounded-xl '>{copyStatus && "copied"}</span>
            </div>}
    </div>
  )
}

export default CopyButton