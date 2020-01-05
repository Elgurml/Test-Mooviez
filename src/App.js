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
    displayCat: true,
    currentPage: 1,
    postPerPage: 12
  }

  hideShowCategory = (cat) => {
    this.setState({displayCat: !this.state.displayCat})
}

  toggleSwitch () {
    this.setState({displayLikes: !this.state.displayLikes})
  }

  
  render() {
    // console.log(this.state.displayCat);
    // const indexOfLastPost = this.state.currentPage * this.state.postPerPage
    // const indexOfFirstPost = indexOfLastPost - this.state.postPerPage
    console.log(this.state.listMovies);
    // const currentPosts = this.state.listMovies.slice(indexOfFirstPost, indexOfLastPost)
    
    return (
      <Provider store={store}>
        <div className="App">
          <Header 
            defaultChecked={this.state.displayLikes}
            click={() => this.toggleSwitch()}
            check={() => this.hideShowCategory()}
            listMovies={this.state.listMovies}
          />
          <MoviesList 
            likes={this.state.displayLikes}
            listMovies={this.state.listMovies}
            catDisplay={this.state.displayCat}
          />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
