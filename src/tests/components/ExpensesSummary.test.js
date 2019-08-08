import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpenseSummary with 0 expenses totalling $0.00', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expensesCount={0}
            expensesTotal={0}
        />);
    expect(wrapper).toMatchSnapshot();
});

test('should rander ExpenseSummary with 1 expense totalling $1.95', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expensesCount={1}
            expensesTotal={195}
        />);
    expect(wrapper).toMatchSnapshot();
});
