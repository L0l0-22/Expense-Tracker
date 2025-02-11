/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ExpenseContext } from '../Context/ExpenseContext';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const formik = useFormik({
    initialValues: {
      name: '',
      amount: '',
      category: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
      category: Yup.string().required('Category is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addExpense(values);
      toast.success('Expense added successfully!');
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="flex items-center gap-2 bg-red-50 p-2 rounded-md mt-1">
          <FontAwesomeIcon icon={faExclamationCircle} className="h-5 w-5 text-red-500" /> 
          <p className="text-red-500 text-sm">{formik.errors.name}</p> 
        </div>
        ) : null}
      </div>
      <div>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.amount}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        {formik.touched.amount && formik.errors.amount ? (
          <div className="flex items-center gap-2 bg-red-50 p-2 rounded-md mt-1">
          <FontAwesomeIcon icon={faExclamationCircle} className="h-5 w-5 text-red-500" /> 
          <p className="text-red-500 text-sm">{formik.errors.amount}</p> 
        </div>
        ) : null}
      </div>
      <div>
        <div className="dropdown inline-block relative w-full">
          <button
            type="button"
            className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center justify-between w-full"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{formik.values.category || 'Select Category'}</span>
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
                type="button"
                onClick={() => {
                  formik.setFieldValue('category', 'Food');
                  setIsDropdownOpen(false);
                }}
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap w-full text-left"
              >
                Food
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  formik.setFieldValue('category', 'Transport');
                  setIsDropdownOpen(false);
                }}
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap w-full text-left"
              >
                Transport
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  formik.setFieldValue('category', 'Entertainment');
                  setIsDropdownOpen(false);
                }}
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap w-full text-left"
              >
                Entertainment
              </button>
            </li>
          </ul>
        </div>
        {formik.touched.category && formik.errors.category ? (
        <div className="flex items-center gap-2 bg-red-50 p-2 rounded-md mt-1">
          <FontAwesomeIcon icon={faExclamationCircle} className="h-5 w-5 text-red-500" /> 
          <p className="text-red-500 text-sm">{formik.errors.category}</p> 
        </div>
        ) : null}
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-2/5 mx-auto p-2 bg-[#002a9e] text-white rounded-2xl text-lg font-semibold shadow-md transition-all duration-300 hover:bg-[#011d68] hover:shadow-lg active:scale-95">
                Add Expense
                <FontAwesomeIcon icon={faPlusCircle} className="text-xl" />
      </button>
    </form>
  );
};

export default ExpenseForm;