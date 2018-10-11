import React from 'react';

import './withSearch.scss';

const withSearch = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      searchTerm: ''
    }

    handleSearch = (e) => {
      this.setState({
        searchTerm: e.target.value
      })
    }

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <div styleName="search-component">
            <input styleName="search-component__input" type="text" onChange={this.handleSearch} placeholder="Search todo..." />
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm} {...this.props} />
        </div>
      )
    }
  }
}

export default withSearch;