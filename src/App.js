import React from 'react';
import { Provider } from 'react-redux';


import store from './store';
import Header from './components/screen/Header';
import Footer from './components/screen/Footer';
import MoviesList from './components/content/MoviesList';


import './App.css';

class App extends React.Component {
  state= {
    displayLikes: false
  }

  hideShowCategory = (cat) => {
    this.setState({displayCat: !this.state.displayCat})
}

  toggleSwitch () {
    this.setState({displayLikes: !this.state.displayLikes})
  }
  
  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <Header 
            defaultChecked={this.state.displayLikes}
            click={() => this.toggleSwitch()}
            check={() => this.hideShowCategory()}
          />
          <MoviesList 
            likes={this.state.displayLikes}
          />
          <Footer className="App-Footer"/>
        </div>
      </Provider>
    );
  }
}

export default App;
