import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      console.log('Message Mound');
    
      return () => {
        console.log('Message Unmound');
      }
    }, [])
    



  return (
    <>
    
        <h3>Usuario ya existe</h3>
    
    
    </>
  )
}
