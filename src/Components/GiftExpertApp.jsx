import {useState} from 'react';
import {AddCategory} from './AddCategory';
import { GifGrid } from '../GifGrid';




const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Puch']);
    // console .log(categories);
    const onAddCategory = ( onNewCategory ) => {

        if (categories.includes( onNewCategory )  ) return;``

        setCategories([ onNewCategory, ...categories ]);
    }

    return (
        <>
            <h1> GiftExpertApp </h1>

            <AddCategory 
                onNewCategory = { (value) => onAddCategory(value) }/>

            {
                categories.map( (category ) => (
                    <GifGrid 
                    key={ category }
                        category={ category }/>
                ))
            }

        </>
    )
}


export default GiftExpertApp;