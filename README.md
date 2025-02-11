# Expense-Tracker
# Project Overview
The Expense Tracker is a simple web application that allows users to add, view, and delete expenses. It helps users keep track of their spending by categorizing expenses and displaying the total amount spent. The app is built using React.js and styled with Tailwind CSS, featuring animations and notifications for a modern user experience.

# Tech Stack
- **React.js** (Functional Components & Hooks)
- **Vite** (For fast development)
- **Tailwind CSS** (For styling)
- **React Hot Toast** (For notifications on every action)
- **Context API** (For state management)
- **LocalStorage** (To persist expenses)

# Installation Instructions
Follow these steps to set up and run the project locally:

```
# Clone the repository
git clone https://github.com/yourusername/expense-tracker.git

# Navigate to the project folder
cd expense-tracker

# Install dependencies
npm install

# Run the app
npm run dev
```

## Usage Guide
1. **Add an Expense**: Enter the name, amount, and category, then click "Add Expense." A toast notification confirms the action.
2. **View Expenses**: All added expenses are displayed in a list with their details.
3. **Delete an Expense**: Click the "Delete" button next to an expense to remove it. A toast notification confirms the deletion.
4. **Persistent Storage**: Expenses are saved in `localStorage` and persist after page reload.
5. **Category Filtering**: Users can filter expenses by category.


