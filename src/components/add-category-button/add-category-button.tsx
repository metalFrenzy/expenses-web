/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import ExpenseCategory from '../expense-category';
import './add-category-button.scss';


function AddCategoryButton() {
    const [categories, setCategories] = useState<any>([]);

    const catgory = [
        {
            id: "1",
            name: "Food & Drinks",
            amount: "1500EGP",
        }
    ]

    const handleAddCategory = () => {
        setCategories([...categories, {}]); // Add a new item (can be empty) to the array
    };

    return (
        <>
            <button
                className='add-category-button' onClick={handleAddCategory}> Add a Category </button>
            <div className='cateogroy-container'>
                {categories.map((_: string, index: number) => (
                    <ExpenseCategory key={index} category={catgory[0]} />
                ))}
            </div>
        </>
    );
}

export default AddCategoryButton;
