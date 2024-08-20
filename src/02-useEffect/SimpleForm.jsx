import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'daniel@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    } 


    useEffect( () => {
        // console.log('use effect change');
    }, [ formState ] );

    useEffect( () => {
        // console.log('email change');
    }, [ email ] );



  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />


        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value = { username }
            onChange={ onInputChange }
        />


        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="daniel@gmail.com"
            name="email"
            vslue = { email }
            onChange={ onInputChange }
        />


        {
            (username === 'strider') && <Message />
        }

    </>
  )
}
