import './expense-categor.scss';
import shoppingCartIcon from "../../assets/shopping-cart.svg";


type Props = {
    category: {
      id: string;
      name: string;
      amount: string;
    };
  };

function ExpenseCategory({ category }: Props) {
    return <div className='expense-category'>
        <h3>{category.name}</h3>
         <div className='img-container'> 
            <img src={shoppingCartIcon} alt="Shopping Cart Icon" />
         </div> 
        <h4>{category.amount}</h4>
    </div>
}

export default ExpenseCategory;

