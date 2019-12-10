//ES6 imports 
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter,{ history} from './routers/AppRouter';
import configureStore from './store/configureStore';

import {login, logout} from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';


const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(<LoadingPage />, document.getElementById('app'));

let hasRendered = false;

const renderApp = () =>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};


//this function is call each time the auth state changes
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('log in');
        store.dispatch(login(user.uid));
         
        renderApp();
        if(history.location.pathname == '/'){
            history.push('/dashboard');
        }
        
         
    }else{
        console.log('logged out');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

//STATELESS FUNCTIONAL COMPONENT EXAMPLE
/*const User = (props) =>{
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );

}
ReactDOM.render(<User name="Paula" age={5} />, document.getElementById('app'));
*/






/*
const template = <p>THIS IS JSX from WEBPACK</p>
ReactDOM.render(template, document.getElementById('app'));   

import validator from 'validator';

console.log(validator.isEmail('test@gma.com'));*/

// //import './utils.js';
/*
 import substract, {square, add} from './utils.js';

// console.log('APP is running!!');

 console.log(square(2));
 console.log(add(100,23));
 console.log(substract(30,20));



 //// Excercise
import isSenior, { isAdult, canDrink} from './person.js';
console.log(isAdult(20));
console.log(canDrink(20));
console.log(isSenior(65));

*/