import React from 'react';

import withSearch from '../HOC/withSearch/withSearch';
import './Comments.scss';

const Comments = (props) => {
  const { globalSearchTerm, showMatches } = props;
  const searchTerm = globalSearchTerm !== '' ? globalSearchTerm : props.searchTerm

  return (
    <React.Fragment>
      <p>Comments:</p>
      <ul styleName="comments">
        {
          props.comments.filter(comment => `${comment.name} ${comment.email} ${comment.body}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0).map(comment => (
            <li key={comment.id} styleName="comments__item">
              <p styleName="comments__item__name">Name: <span dangerouslySetInnerHTML={showMatches(comment.name, searchTerm)}></span></p>
              <p styleName="comments__item__email">Email: <span dangerouslySetInnerHTML={showMatches(comment.email, searchTerm)}></span></p>
              <p styleName="comments__item__body"><span dangerouslySetInnerHTML={showMatches(comment.body, searchTerm)}></span></p>
            </li>
          ))
        }
      </ul>
    </React.Fragment>
  )
};

export default withSearch(Comments);