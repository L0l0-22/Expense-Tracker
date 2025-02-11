/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { ExpenseContext } from './components/Context/ExpenseContext';
import ExpenseForm from './components/Form/ExpenseForm';
import ExpenseList from './components/List/ExpenseList';

const App = () => {
  const { expenses } = useContext(ExpenseContext);
  const [filter, setFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const filteredExpenses = filter
    ? expenses.filter((expense) => expense.category === filter)
    : expenses;
  const totalAmount = filteredExpenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <div className="App">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-6 text-[#4f4f4f]  md:text-left md:ml-16 lg:ml-44">
      Welcome to <span className="text-[#0fcc75]">Expense Tracker!</span>
    </h1>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl mx-4 space-y-6">
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-xl">
            <h1 className="text-2xl font-bold mb-4 text-[#002a9e]">
              Add New Expense
            </h1>
            <ExpenseForm />
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-xl">
            <div className="mb-6">
              <div className="dropdown inline-block relative w-full">
                <button
                  className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center justify-between w-full"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>{filter ? filter : 'Filter By Category'}</span>
                  <svg
                    className={`fill-current h-4 w-4 transform transition-transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul
                  className={`dropdown-menu absolute text-gray-700 pt-1 w-full ${
                    isDropdownOpen ? 'block' : 'hidden'
                  }`}
                >
                  <li>
                    <button
                      onClick={() => {
                        setFilter('');
                        setIsDropdownOpen(false);
                      }}
                      className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap w-full text-left"
                    >
                      All Categories
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setFilter('Food');
                        setIsDropdownOpen(false);
                      }}
                      className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap w-full text-left"
                    >
                      Food
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setFilter('Transport');
                        setIsDropdownOpen(false);
                      }}
                      className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap w-full text-left"
                    >
                      Transport
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setFilter('Entertainment');
                        setIsDropdownOpen(false);
                      }}
                      className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap w-full text-left"
                    >
                      Entertainment
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <ExpenseList expenses={filteredExpenses} />
            <div className="mt-4">
              <button className="flex items-center justify-center gap-2 w-2/5 mx-auto p-2 bg-[#0fcc75] text-white rounded-2xl text-lg font-semibold  shadow-md transition-all duration-300 hover:bg-[#0b9856] hover:shadow-lg active:scale-95">
              Total: ${totalAmount.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;