import { useState } from 'react';
// import { categories, setCategories } from '../GiftExpertApp';


export const AddCategory = ( { onNewCategory } ) => {



    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( {target} ) => {
        // console.log(event);
        setInputValue( target.value );

    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1) return;
        // setCategories( categories => [ inputValue, ...categories ] );
        onNewCategory( inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit = { onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs "
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
