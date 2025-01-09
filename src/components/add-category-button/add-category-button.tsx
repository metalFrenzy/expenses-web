/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpenseCategory from '../expense-category';
import './add-category-button.scss';



interface Props {
    expensCatgories: { id: string; title: string; amount: string; }[];
}


function AddCategoryButton({ expensCatgories }: Props) {

    return (
        <>
            <button
                className='add-category-button'> Add a Category </button>
            <div className='cateogroy-container'>
                {expensCatgories.map((Category) => { return <ExpenseCategory category={Category} key={Category.id} /> })}
            </div>
        </>
    );
}

export default AddCategoryButton;
