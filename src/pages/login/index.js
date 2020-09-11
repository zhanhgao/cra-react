import React,{Component} from 'react';
import Header from '../../components/header';
import './login.css';

class Login extends Component{
    render(){
        return (
            <div className='P-login'>
                <Header/>
                <h1>Login Page</h1>
                <button onClick={this.goHome.bind(this)}>跳转到Home页</button>
            </div>
        )
    }
    goHome(){
        this.props.history.push('/home');
    }
}

export default Login