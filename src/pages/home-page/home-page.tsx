/* eslint-disable @typescript-eslint/no-unused-vars */
import AddCategories from "../../components/add-categories/add-new-categories";
import AddCategoryButton from "../../components/add-category-button";
import HeadingSection from "../../components/heading-section";
import { useState } from "react";
import './home-page.scss'

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
]

export default function HomePage() {

    const [categories, setCategories] = useState(expensCatgories)

    const addCategory = (catgories: { title: string; amount: string, id: string }) => {
        console.log('this is the cats from the home',catgories)
        setCategories((prevState) => {
            return [...prevState,catgories]
        })
    }

    return <>
        <div heading-section>
            <HeadingSection></HeadingSection>
        </div>

        <AddCategoryButton expensCatgories={categories}></AddCategoryButton>
        <AddCategories onAdd={addCategory}></AddCategories>

    </>
}