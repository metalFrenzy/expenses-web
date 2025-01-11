import './categories-form.scss'
import { useState } from 'react'

interface Props {
    onSave: (categoryData: { title: string; amount: string }) => void;
}

function CategoriesForm({ onSave }: Props) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value)
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const catgoryData = {
            title: title,
            amount: amount
        }
        onSave(catgoryData)
        setTitle('');
        setAmount('');
    }
    return <form onSubmit={submitHandler}>
        <div className="catgories-form">
            <div className="title">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={title} />
            </div>
            <div className="ammount">
                <label>Amount</label>
                <input type="number" onChange={amountChangeHandler} value={amount} />
            </div>
        </div>
        <div className="action-button">
            <button className="add" type='submit'>Add Category</button>
            <button className="close-button">
                Close
            </button>
        </div>
    </form>
}

export default CategoriesForm