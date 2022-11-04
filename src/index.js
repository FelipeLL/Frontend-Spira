import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './routes/public/Login';
import Backoffice from "./routes/private/Backoffice";
import CreateUser from "./routes/private/CreateUser";
import AssingCourse from "./routes/private/AssingCourse";
import UserList from "./routes/private/UserList";
import CourseList from "./routes/public/CourseList";
import UserProvider from './context/UserProvider';
import Auth from "./components/Auth"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Login />} />
            <Route path="/backoffice" element={<Auth> <Backoffice /> </Auth>} />
            <Route path="/backoffice/create" element={<Auth> <CreateUser /> </Auth>} />
            <Route path="/backoffice/assign" element={<Auth><AssingCourse /> </Auth>} />
            <Route path="/backoffice/list" element={<UserList />} />
            <Route path="/list" element={<CourseList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
