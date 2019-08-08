import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let 
    setTextFilter,
    sortByDate,
    sortByAmount, 
    setStartDate, 
    setEndDate,
    wrapper;

    beforeEach(() => {
        setTextFilter = jest.fn();
        sortByDate = jest.fn();
        sortByAmount = jest.fn();
        setStartDate = jest.fn();
        setEndDate = jest.fn();
        wrapper = shallow(
            <ExpenseListFilters 
                filters={filters}
                setTextFilter={setTextFilter}
                sortByDate={sortByDate}
                sortByAmount={sortByAmount}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />
        );
    });

    test('should render ExpenseListFilters correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render ExpenseListFilters with alt data correctly', () => {
        wrapper.setProps({
            filters: altFilters
        });
        expect(wrapper).toMatchSnapshot();
    });

    test('should handle text change', () => {
        const value = 'rent';
        wrapper.find('input').at(0).simulate('change', {
            target:  { value } 
        });
        expect(setTextFilter).toHaveBeenLastCalledWith(value);
    });

    test('should sort by date', () => {
        const value = 'date';
        wrapper.setProps({
            filters: altFilters
        });
        wrapper.find('select').prop('onChange')({
            target: { value }
        });
        expect(sortByDate).toHaveBeenCalled();
    });

    test('should sort by amount', () => {
        const value = 'amount';
        wrapper.find('select').prop('onChange')({
            target: { value }
        });
        expect(sortByAmount).toHaveBeenCalled();
    });

    test('shoudld handle date changes', () => {
        const start = moment(0);
        const end = moment(0).add(4,'days');
        wrapper.find('DateRangePicker').prop('onDatesChange')({ start, end });
        expect(setStartDate).toHaveBeenLastCalledWith(start);
        expect(setEndDate).toHaveBeenLastCalledWith(end);
    });

    test('should handle date focus change', () => {
        const focused = 'endDate';
        wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
        expect(wrapper.state('calendarFocused')).toBe(focused);
    });