import withData from '../HOC/withData';
import PostList from './PostList';

const WithDataPostList = withData(PostList, 'https://dummyjson.com/posts');
export default WithDataPostList;
