import React, {Component} from 'react';
import './styles/global.scss';
import AuthPage from './components/pages/AuthPage';

class App extends Component {
    state = {
        user: null
    };

    setLoggedUser = (user) => {
      this.setState({ user });
    };

    render() {
        console.log(this.state)
        return (
            <div className="App">
                {(this.state.user && <div/>) || (
                    <AuthPage setLoggedUser = {this.setLoggedUser}/>
                )}
            </div>
        );
    }
}
export default App;
    