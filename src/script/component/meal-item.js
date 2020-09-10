class MealItem extends HTMLElement{

    set meal(meal){
        this._meal = meal
        this.render();
    }

    render(){
        this.innerHTML = `
       <style>
            
           meal-item div{
                float: left;
            }
            .card{
                width: 100px;
                height: 100px;
                margin:20px;
                border-radius: 20px;
                overflow: hidden;
                position: relative;
                box-shadow: 3px 3px 3px 0 rgba(0,0,0,0.41);
            }
            .card .img-meal {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
                border-radius: 20px;
                transition: .3s;
                transform: scale(1);
            }
            .card span{
                width: 100%;
                color: white;
                text-size-adjust: 15px;
                border-radius: 20px;
                display: block;
                position: absolute;
                top: 0;
                text-align: center;
                font-weight: bold;
                line-height: 100px;
                transform: scale(0);
                opacity:0;
                transition: .3s;
            }
            .card a:hover span{
                opacity:1;
                transform: scale(1);
            }
            .card a:hover .img-meal{
                filter: brightness(50%);
                transform: scale(1.1);
            }
            
       </style>
            <div class="col-lg-4 col-sm-12">
                <div class="card">
                    <a href="#">
                        <img class="img-meal" src="${this._meal.strMealThumb}" alt="Img Meals">
                        <span>${this._meal.strMeal}</span>
                    </a>
                    </div>
                </div>`;
    }
}
customElements.define("meal-item", MealItem)