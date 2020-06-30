import React, { Component } from 'react';
import styles from './style.module.scss'
import AuthForm from './AuthForm';

export default class AuthPage extends Component{
    render() {
        return(
            <div className={styles.wrapper}>
                <AuthForm setLoggedUser = {this.props.setLoggedUser}/>
            </div>
        )

    }
}