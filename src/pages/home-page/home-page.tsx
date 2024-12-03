import AddCategoryButton from "../../components/add-category-button";
import ExpenseCategory from "../../components/expense-category";
import HeadingSection from "../../components/heading-section";
import './home-page.scss'

export default function HomePage() {
    const catgory = [
        {
            id: "1",
            name: "Food & Drinks",
            amount: "1500EGP",
        }
    ]

    return <>
        <div heading-section>
            <HeadingSection></HeadingSection>
        </div>
        <ExpenseCategory category={catgory[0]}></ExpenseCategory>
        <AddCategoryButton></AddCategoryButton>
    </>
}