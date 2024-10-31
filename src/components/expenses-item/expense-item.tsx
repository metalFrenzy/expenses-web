import './expense-item.scss'

function ExpenseItem() {
    return (
        <div className='expense-grid'>
            <div>
               <h2> 30 Oct 2024</h2>
            </div>
            <div className='expense-description'>
                <h2>Shopping</h2>
                <div className='expense-price'>1500EG</div>
            </div>
        </div>
    )
}
export default ExpenseItem;