import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from './pages/Todo'
import Home from './pages/Home'
import Header from './components/Header'
import EditToDo from './pages/EditToDo'

function App() {
  // localStorage.setItem("name", "Rajit Prajapati");
  // console.log(localStorage.getItem("name"));
 
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route index element={<Todo />} />
        <Route path="/edittodo" element={<EditToDo />} />
        <Route path="*" element={<h1>Path not found !</h1>}/>
      </Routes>
    </div>
  )
}

export default App