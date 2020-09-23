import React, { Component } from "react";
import ReactDOM from 'react-dom';


const a = [1, 10, 100, 1000, 10000];
const Form = (props) => {
	return (
		<ul>
		{a.map(i => {
			return <li>{i}</li>
		})}
			</ul>
			)
		}
export default Lion;
