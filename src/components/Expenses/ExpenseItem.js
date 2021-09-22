import React from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props)
{
    console.log('ExpenseItem evaluated by React');

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">€{props.amount}</div>
                </div>
            </Card>
        </li>

    )
};

export default ExpenseItem;