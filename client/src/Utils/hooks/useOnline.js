import { useEffect, useState } from "react"


const useOneline =()=>{
    const [isOnline, setIsOnline] = useState(true);
    useEffect(()=>{
        const handleOnline=()=>{
            setIsOnline(true);
        }
    
        const handleOffline=()=>{
            setIsOnline(false);
        }
        
        window.addEventListener("online",handleOffline)
        window.addEventListener("offline",handleOffline)
        return ()=>{
            removeEventListener("online",handleOnline);
            removeEventListener("offline",handleOffline);
        }
    },[]);
    return isOnline;
}

export default useOneline;