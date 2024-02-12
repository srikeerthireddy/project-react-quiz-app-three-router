// eslint-disable-next-line no-unused-vars
import React from "react";
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponet';
import ResultComponent from './components/ResultComponent';
import {Routes,Route} from 'react-router-dom';
import './App.css'

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/quiz" element={<QuizComponent/>}/>
        <Route path="/result" element={<ResultComponent/>}/>


      </Routes>
    </div>
  )
}
export default App;
