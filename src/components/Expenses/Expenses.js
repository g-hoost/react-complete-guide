import React, { useState } from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import '../Expenses/ExpenseItem.css';
import Card from '../UI/Card';
import '../Expenses/Expenses.css';
import ExpensesFilter from '../Expenses/ExpensesFilter';
import './ExpensesFilter.css';


function Expenses(props)
{
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear =>
    {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />)}
            </Card>
        </div>
    )
};

export default Expenses;