import React from 'react'

export default function ReactPage() {
  return (
    <div className='sub-page'>

      <div className='sub-page-card  text-white'>
        <h3>📖 React Learning Guide</h3>
        🚀 What is React?
        <br></br>

        React is a JavaScript library for building user interfaces (UI), developed by Facebook. It allows developers to create fast, scalable, and reusable UI components.

      </div>
      <div className='sub-page-card  text-white'>
      1️⃣ Component-Based Architecture

React applications are built using reusable components.

Each component manages its own state and UI logic.

Components make it easy to scale and maintain applications.
<br></br>
💡 Example:

function Greeting() {
`return <h1>Hello, React!</h1>`
}
      </div>
      <div className='sub-page-card  text-white'>
      2️⃣ Virtual DOM for Performance Optimization

React uses a Virtual DOM to update only the necessary parts of the UI.

This improves performance by avoiding full page reloads.

The Diffing Algorithm efficiently updates changes in the DOM.

💡 How it works:

React creates a Virtual DOM copy of the actual DOM.

It compares changes using the Diffing Algorithm.

It updates only the changed elements, not the entire DOM.
      </div>
      <div className='sub-page-card  text-white'>
      3️⃣ State Management with Hooks

    useState and useEffect allow functional components to handle dynamic data.

    Helps manage UI updates, API calls, and user interactions efficiently.
    
      </div>
      
    </div>
  )
}
