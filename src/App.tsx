import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';



type AppProps = { message?: number }; /* could also use interface */


const App = ({ message = 123 }: AppProps) => 


<div>{message}</div>;

export default App;
