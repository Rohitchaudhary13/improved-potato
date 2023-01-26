import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import SingleNote from "./screens/SingleNote/SingleNote";
import Week1Single from "./screens/MarksPage/Week1Single";
import Week2Single from "./screens/MarksPage/Week2Single";
import Week3Single from "./screens/MarksPage/Week3Single";
import Week4Single from "./screens/MarksPage/Week4Single";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/SingleNote/CreateNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import StudentReport from "./screens/StudentReport/StudentReport";
import Dashboard from "./screens/Dashboard/Dashboard";
import WeekDash from "./screens/Dashboard/WeekDash";
import About from './screens/AboutPage/About';
function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route
          path="/mystudents"
          component={({ history }) => (
            <MyNotes search={search} history={history} />
          )}
        />
        <Route
          path="/studentreport"
          component={({ history }) => (
            <StudentReport search={search} history={history} />
          )}
        />             
        <Route path="/week1/:id" component={Week1Single} />
        <Route path="/week2/:id" component={Week2Single} />
        <Route path="/week3/:id" component={Week3Single} />
        <Route path="/week4/:id" component={Week4Single} />

        <Route path="/note/:id" component={SingleNote} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/week1dash" component={() => <WeekDash wk='1'/>} />
        <Route path="/week2dash" component={() => <WeekDash wk='2'/>} />
        <Route path="/week3dash" component={() => <WeekDash wk='3'/>} />
        <Route path="/week4dash" component={() => <WeekDash wk='4'/>} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
