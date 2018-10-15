import React from 'react';
import { hot } from 'react-hot-loader';

import Header from './components/Header/Header';
import List from './components/List/List';
import { listAPIs } from './services/apiService';
import GlobalSearchProvider, { GlobalSearchContext } from './components/ContextAPIs/GlobalSearch/GlobalSearch';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayLists: []
    }
  }

  componentDidMount() {
    const arrayLists = this.state.arrayLists.slice();
    listAPIs.map(data => {
      arrayLists.push(data);
    });
    this.setState({ arrayLists });
  }

  render() {
    return (
      <div className="App">
        <Header tagline="Todos App" />
        <GlobalSearchProvider>
          <GlobalSearchContext.Consumer>
            {
              searchTerm => (
                this.state.arrayLists.map(list => (
                  <List 
                    key={list.name} 
                    globalSearchTerm={searchTerm} 
                    listName={list.name} 
                    fetchUrl={list.apiURL} 
                    apiData={list.apiData} />
                ))
              )
            }
          </GlobalSearchContext.Consumer>
        </GlobalSearchProvider>
      </div>
    )
  }
}

export default hot(module)(App);