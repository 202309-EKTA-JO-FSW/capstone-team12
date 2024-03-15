import React from "react";
import { useRouter } from 'next/navigation';


const Logout = ()=>{
    const router = useRouter()
    const handleClick = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        router.push('/')
    }
    return(
        <div>
           
                <button onClick={handleClick}>Logout</button>
                
            
        </div>
    )
}
export default Logout