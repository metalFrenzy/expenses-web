import CategoriesForm from '../categories-form'
import './add-categories.scss'

interface Props {
    onAdd: (catgories: { title: string; amount: string; id:string}) => void
}

function AddCategories({onAdd}: Props) {
    const saveCategoryData = (enteredCategoryData: { title: string; amount: string }) => {
        const categoryData = {
            ...enteredCategoryData,
            id: Math.random().toString()
        }
        onAdd(categoryData)
    }
    return <div className='category-form'>
        <CategoriesForm onSave = {saveCategoryData}></CategoriesForm>
    </div>
}

export default AddCategories