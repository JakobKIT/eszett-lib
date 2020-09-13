// All our imports are here
import ß from './lib/Eszett.js';
import MenuComponent from './components/MenuComponent.js';
import PostsComponent from './components/PostsComponent.js';

// Initialize app
const app = new ß('app');

// Adding our Components to the App
app.registerComponent(MenuComponent);
app.registerComponent(PostsComponent);