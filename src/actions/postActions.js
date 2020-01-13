import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch =>  {
      fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => 
       dispatch({
         type: FETCH_POSTS,
         payload: posts
       })
    );
}