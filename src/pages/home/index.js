import React,{Component} from 'react';
import Header from '../../components/header';
import './home.css';

class Home extends Component{
    render(){
        return (
            <div className='P-home'>
                <Header param1="param1" param2="param2" fn={console.log('fn1')}/>
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default Home