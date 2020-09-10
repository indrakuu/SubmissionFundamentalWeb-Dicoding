class NavigationBar extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    set clickEvent(event){
        this._clickEvent = event
        this.render()
    }

    get value(){
        return this.querySelector("#searchElement").value
    }
    render(){
        this.innerHTML = `
        <style>
            .title{
                padding: 20px;
            }
            .title, .navigation{
                margin: 0 auto;
            }
            .responsive {
                margin: 0 auto;
                flex-direction: row;
                position: static;
            }
            @media screen and (max-width: 510px){
                .responsive input {
                    width: 100%;
                    margin-bottom: 10px;
                }
                .responsive button {
                    width: 100%;
                }
            }
        </style>
        <div id="navigation" class="navigation">
        <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand mb-0 h1 title">Meal Finder</a>
            <div class="form-inline responsive">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" id="searchElement">
                <button class="btn btn-danger my-2 my-sm-0" type="submit" id="searchButtonElement">Search</button>
            </div>
        </nav>
    </div>
        `;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent)
    }
}

customElements.define("navigation-bar", NavigationBar)