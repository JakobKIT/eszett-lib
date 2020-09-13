class Component {
  constructor(name, state, template) {
    this.name = name;
    this.state = state;
    this.template = template;
  }

  view() {
    return this.template(this.state);
  }
}

export default Component;