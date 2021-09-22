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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />
                {filteredExpenses.length === 0 ? (
                    <p>No Expenses found.</p>
                ) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                )}
            </Card>
        </div>
    )
};

export default Expenses;