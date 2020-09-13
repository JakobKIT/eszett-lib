import Component from '../lib/Component.js';

const postsTemplate = (state) => `
  ${state.posts.map(post => `
    <li>
      <div class="article">
        <h3>${post.title}</h3>
        <p>${post.text}</p>
      </div>
    </li>`).join('')}
`;

const PostsComponent = new Component(
  'posts', 
  {
    posts: [{
      title: 'My first blog post',
      text: 'This is my first blog post EVER, its awesome!'
    },
    {
      title: 'Writing my own component library',
      text: 'In this article I want to share with you my experience on how to write a component library!'
    }],
  },
  postsTemplate
);

export default PostsComponent;