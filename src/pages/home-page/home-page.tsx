import AddCategories from "../../components/add-categories/add-new-categories";
import AddCategoryButton from "../../components/add-category-button";
import HeadingSection from "../../components/heading-section";
import './home-page.scss'

export default function HomePage() {

    const addCategory = (catgories: { title: string; amount: string, id: string}) => {
        console.log(catgories)
    }

    return <>
        <div heading-section>
            <HeadingSection></HeadingSection>
        </div>

        <AddCategoryButton></AddCategoryButton>
        <AddCategories onAdd={addCategory}></AddCategories>

    </>
}