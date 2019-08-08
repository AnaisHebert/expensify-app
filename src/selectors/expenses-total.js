// get total amount of all expenses

export default (expenses) => {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
};