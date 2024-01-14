import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { AuthProvider, useAuth } from './AuthContext';
import { Login, Signup, PublicUp, All, Home, Like, Roll, Mainhome, Memo } from './components';



function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/login" element={<Login/>}/>
            <Route path = "/roll/:idx" element={<Roll/>}/>
            <Route path = "/sign" element={<Signup/>}/>
            <Route path = "/all" element={<All/>}/>
            <Route path = "/like" element={<Like/>}/>
            <Route path = "/mainhome" element={<Mainhome/>}/>
            <Route path = "/memo" element={<Memo/>}/>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
    
  );
}

export default App;
