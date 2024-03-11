import React from "react";
import { useRouter } from 'next/navigation';


const Logout = ()=>{
    const router = useRouter()
    const handleClick = () =>{
        localStorage.removeItem('token')
        router.push('/')
    }
    return(
        <div>
           
                <button onClick={handleClick}>Logout</button>
                
            
        </div>
    )
}
export default Logout