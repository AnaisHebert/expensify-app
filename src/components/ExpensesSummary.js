import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';


export class ExpensesSummary extends React.Component{
    constructor(props){
        super(props);
    };
    render = () => (
        <div>
            <h3>
                Viewing {this.props.expensesCount} 
                {this.props.expensesCount === 1 ? ' expense ' : ' expenses '}
                totalling {numeral(this.props.expensesTotal / 100).format('$0,0.00')}
            </h3>
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