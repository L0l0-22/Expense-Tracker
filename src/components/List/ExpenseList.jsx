/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { ExpenseContext } from '../Context/ExpenseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ExpenseList = ({ expenses }) => {
const { deleteExpense } = useContext(ExpenseContext);

const handleDelete = (id) => {
    deleteExpense(id);
    toast.error('Expense deleted successfully!');
};

return (
    <div className="space-y-4">
    {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses found.</p>
    ) : (
        expenses.map((expense) => (
        <div key={expense.id} className="p-4 border rounded flex justify-between items-center">
            <div>
            <h3 className="font-bold text-[#1a8447]">{expense.name}</h3>
            <p>${expense.amount} - {expense.category}</p>
            </div>
            <button
            onClick={() => handleDelete(expense.id)}
            className="flex items-center gap-2 p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
                <span>Delete</span> 
            <FontAwesomeIcon icon={faTrash} className="h-4 w-4" /> 
            </button>
        </div>
        ))
    )}
    </div>
);
};

export default ExpenseList;