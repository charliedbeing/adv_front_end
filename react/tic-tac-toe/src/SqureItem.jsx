import {React,useState,useEffect }from 'react'

export default function SqureItem({x,y, type,isactive ,clickFn  }) {

    const [show, setShow] = useState('')

  const display = function(){
        if(show === ''){
            if(isactive && type ===1){
                setShow('X')
             }else if( isactive && type ===0){
                 setShow('O')
             }
        }
    
  }
  const refresh = function(){
       setShow('')
  }

  return (

    <>
    <div
        style={{width:'40px',height:'40px',border:'solid 1px',textAlign:'center'}}
        onClick={()=>{
            const value = type
            clickFn({x,y,type,value},refresh)
            display()
        }}    
     >

        {show}
  
    </div>
   
    </>
    
  )
}
