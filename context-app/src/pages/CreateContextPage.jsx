import React, { createContext } from 'react'

const CreateContextPage =  createContext('');

export default CreateContextPage


// creates a Context for sharing user-related data across components without manually passing props.

// createContext() creates a React Context object.
// CreateContextPage is the context that components can provide and consume.
// export default CreateContextPage allows you to import this context into other files.