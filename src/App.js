import React from 'react';
import { Provider } from 'react-redux';


import store from './store';
import Header from './components/screen/Header';
import Footer from './components/screen/Footer';
import MoviesList from './components/content/MoviesList';


import './App.css';

class App extends React.Component {
  state= {
    displayLikes: false,
  }

  // deleteMovie = (index) => {
  //   const newListMovies = this.state.listMovies
  //   newListMovies.splice(index, 1)
  //   this.setState({listMovies: newListMovies})
  // }

  toggleSwitch () {
    this.setState({displayLikes: !this.state.displayLikes})
  }

  hideShowCat = (index) => {

  }

  render() {
    
    return (
      <Provider store={store}>
        <div className="App">
          <Header 
            defaultChecked={this.state.displayLikes}
            click={() => this.toggleSwitch()}
            listMovies={this.state.listMovies}
            // check={() => this.hideShowCat(index)}
          />
          <MoviesList 
            likes={this.state.displayLikes}
            listMovies={this.state.listMovies}
            // erase={() => this.deleteMovie(index)}
          />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
