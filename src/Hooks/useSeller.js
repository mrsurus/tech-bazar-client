import { useEffect, useState } from "react"

const useSeller = email =>{
    const [isSeller, setIsSeller]= useState(false)
    const [isVerified, setIsVerified]= useState(null)
    const [isSellerLoading, setIsSellerLoading]= useState(true)
    console.log(isVerified);

    useEffect( ()=>{
        if(email){
            fetch(`http://localhost:5000/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsSeller(data.isSeller)
                setIsVerified(data.isVerified)
                setIsSellerLoading(false)
            })
        }
    },[email])
    return [isSeller, isSellerLoading, isVerified]
}
export default useSeller;