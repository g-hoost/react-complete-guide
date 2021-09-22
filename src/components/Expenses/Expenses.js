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
    };

    const filteredExpenses = props.items.filter(expense =>
    {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p className='no-expenses'>No Expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />
                {expensesContent
                /* {filteredExpenses.length === 0 && expensesContent}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                        hier wäre dann "no expenses found" der Default-Wert!
                    ))} */}
            </Card>
        </div>
    )
};

export default Expenses;