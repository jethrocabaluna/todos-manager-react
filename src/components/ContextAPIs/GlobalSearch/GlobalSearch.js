import React, { Component } from 'react';
import withSearch from '../../HOC/withSearch/withSearch';

const GlobalSearchContext = React.createContext('');

class GlobalSearchProvider extends Component {
  // state = {
  //   searchTerm: this.props.searchTerm
  // }

  render() {
    return (
      <GlobalSearchContext.Provider value={this.props.searchTerm}>
        { this.props.children }
      </GlobalSearchContext.Provider>
    )
  }
}

export { GlobalSearchContext };
export default withSearch(GlobalSearchProvider);