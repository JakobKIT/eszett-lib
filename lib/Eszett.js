class ß {
  constructor(selector) {
    this.eszettElement = document.querySelector(`#${selector}`);
    this.components = {};
    console.log('Eszett initialized!');
  }

  registerComponent(component) {
    this.components[component.name] = component;
    this.updateView();
  }

  updateView() {
    if (this.components) {  
      let mergedViews = '';
      Object.keys(this.components).forEach(key => {
        mergedViews += this.components[key].view()
      });
      this.eszettElement.innerHTML = mergedViews;
    }
  }
}

export default ß;