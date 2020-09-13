// Import statements
import Component from '../lib/Component.js';

// HTML-Template
const menuTemplate = (state) =>`
  <header>
    <h1>
      <a href="#/posts">${state.name}'s Blog</a>
    </h1>
  </header>
`;

// Component
const MenuComponent = new Component(
  'menu', 
  {
    name: 'Jakob'
  },
  menuTemplate);

export default MenuComponent;