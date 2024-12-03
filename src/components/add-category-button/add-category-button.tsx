/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ExpenseCategory from '../expense-category';


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
            <IconButton 
                aria-label="Add a Category" 
                size="large" 
                onClick={handleAddCategory}
            >
                <AddIcon />
            </IconButton>
            <div>
                {categories.map((_:string, index:number) => (
                    <ExpenseCategory key={index} category={catgory[0]} />
                ))}
            </div>
        </>
    );
}

export default AddCategoryButton;
