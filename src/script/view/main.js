import '../component/meal-list.js'
import '../component/navigation-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("navigation-bar");
    const mealListElement = document.querySelector("meal-list");

    const renderAllMeals = async () =>{
        const result = await DataSource.searchMeal(searchElement.value)
        renderResult(result)
    }
    renderAllMeals(searchElement)

    const onButtonsearchClicked = async () => {
        try{
            const result = await DataSource.searchMeal(searchElement.value)
            renderResult(result)
        } catch (message) {
            fallbackResult(message)
        }
    }
    const renderResult = results => {
        mealListElement.meals = results
    }

    const fallbackResult = message => {
        mealListElement.renderError(message)
    }
    searchElement.clickEvent = onButtonsearchClicked
};
export default main;