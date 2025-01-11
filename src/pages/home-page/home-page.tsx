/* eslint-disable @typescript-eslint/no-unused-vars */
import AddCategories from "../../components/add-categories/add-new-categories";
import AddCategoryButton from "../../components/add-category-button";
import HeadingSection from "../../components/heading-section";
import { useState } from "react";
import './home-page.scss';

const expensCatgories = [
    {
        id: "1",
        title: "Food & Drinks",
        amount: "1500EGP",
    },
    {
        id: "2",
        title: "Shopping",
        amount: "5000EGP",
    }
];

export default function HomePage() {

    const [categories, setCategories] = useState(expensCatgories);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const addCategory = (category: { title: string; amount: string; id: string }) => {
        console.log('This is the category from Home:', category);
        setCategories((prevState) => [...prevState, category]);
    };

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <div heading-section>
                <HeadingSection></HeadingSection>
            </div>
            <button
                className="add-category-button"
                onClick={openDialog}
            >
                Add a Category
            </button>
            <AddCategoryButton expensCatgories={categories}></AddCategoryButton>
            {isDialogOpen && (
                <div className="dialog-overlay">
                    <div className="dialog">
                       
                        <AddCategories onAdd={(category) => {
                            addCategory(category);
                            closeDialog();
                        }}></AddCategories>
                    </div>
                </div>
            )}
        </>
    );
}
