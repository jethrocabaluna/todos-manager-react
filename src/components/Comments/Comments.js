import React from 'react';

import withSearch from '../HOC/withSearch/withSearch';
import './Comments.scss';

const Comments = (props) => {
  const { searchTerm, showMatches } = props;
  const commentsSample = [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 1,
      "id": 3,
      "name": "odio adipisci rerum aut animi",
      "email": "Nikita@garfield.biz",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
      "postId": 1,
      "id": 4,
      "name": "alias odio sit",
      "email": "Lew@alysha.tv",
      "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    }
  ];

  return (
    <ul styleName="comments">
      {/* {
        commentsSample.slice(0, Math.floor((Math.random() * 5))).map(comment => (
          <li key={ comment.id } styleName="comments__item">
            <p styleName="comments__item__name">Name: { comment.name }</p>
            <p styleName="comments__item__email">Email: { comment.email }</p>
            <p styleName="comments__item__body">{ comment.body }</p>
          </li>
        ))
      } */}
      {
        commentsSample.filter(comment => `${comment.name} ${comment.email} ${comment.body}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0).map(comment => (
          <li key={ comment.id } styleName="comments__item">
            <p styleName="comments__item__name">Name: <span dangerouslySetInnerHTML={ showMatches(comment.name, searchTerm) }></span></p>
            <p styleName="comments__item__email">Email: <span dangerouslySetInnerHTML={ showMatches(comment.email, searchTerm) }></span></p>
            <p styleName="comments__item__body"><span dangerouslySetInnerHTML={ showMatches(comment.body, searchTerm) }></span></p>
          </li>
        ))
      }
    </ul>
  )
};

export default withSearch(Comments);