class MealSet extends HTMLElement {

    set meal(meal) {
        this._meal = meal
        this.render();
    }

    render() {
        this.innerHTML = ``;
    }
}
customElements.define("meal-set", MealSet)