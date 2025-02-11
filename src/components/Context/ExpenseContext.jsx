/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState(() => {
        const storedExpenses = localStorage.getItem('expenses');
        console.log("Loaded from localStorage:", storedExpenses); 
        return storedExpenses ? JSON.parse(storedExpenses) : [];
    });

    useEffect(() => {
        console.log("Expenses updated:", expenses);
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense) => {
        const newExpense = { ...expense, id: Date.now() };
        setExpenses(prevExpenses => {
            const updatedExpenses = [...prevExpenses, newExpense];
            return updatedExpenses;
        });
    };

    const deleteExpense = (id) => {
        setExpenses(prevExpenses => {
            const updatedExpenses = prevExpenses.filter(expense => expense.id !== id);
            return updatedExpenses;
        });
    };

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};
