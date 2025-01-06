import './expense-categor.scss';
import shoppingCartIcon from "../../assets/shopping-cart.svg";
import { useState } from 'react';


type Props = {
    category: {
      id: string;
      name: string;
      amount: string;
    };
  };

function ExpenseCategory({ category }: Props) {
  const [title, setTitle] = useState(category.name);
  const clickHandler = () =>{
    setTitle('New Title');
  }
    return <div className='expense-category'>
        <h3>{title}</h3>
         <div className='img-container'> 
            <img src={shoppingCartIcon} alt="Shopping Cart Icon" />
         </div> 
        <h4>{category.amount}</h4>
        <button onClick={clickHandler}>Add Expense</button>
    </div>
}

export default ExpenseCategory;

