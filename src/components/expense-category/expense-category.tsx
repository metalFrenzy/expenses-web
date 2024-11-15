import './expense-categor.scss';
import shoppingCartIcon from "../../assets/shopping-cart.svg";



function ExpenseCategory() {
    return <div className='expense-category'>
        <h3>Food & and Drink</h3>
         <div className='img-container'> 
            <img src={shoppingCartIcon} alt="Shopping Cart Icon" />
         </div> 
        <h4>EGP1500</h4>
    </div>
}

export default ExpenseCategory;

