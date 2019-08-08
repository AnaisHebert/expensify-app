import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ({ expensesCount, expensesTotal }) =>{
    return (
        <div>
            <h1>
                Viewing {expensesCount} 
                {expensesCount === 1 ? ' expense ' : ' expenses '}
                totalling {numeral(expensesTotal / 100).format('$0,0.00')}
            </h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: expenses.length,
        expensesTotal: expensesTotal(expenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);