import { generateId } from "../utils/GenerateId.js";

export class House {
    constructor(data) {
        this.id = data.id || generateId();
        this.title = data.title;
        this.builtYear = data.builtYear;
        this.bedrooms = data.bedrooms;
        this.bathrooms = data.bathrooms;
        this.sqft = data.sqft;
        this.price = data.price;
        this.description = data.description;
        this.imgUrl = data.imgUrl;
    }

    get listingTemplate() {
        return /*html*/ `
        <section class="container">
            <div id="house-listing" class="row">
                <div class="col col-md-6 mb-3 d-flex house-border">
                    <div class="position-relative">
                        <img class="house-img"
                            src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="house for sale">
                                <div>
                                    <div class="d-flex justify-content-between">
                                    <small class="house-uploaded"> Listed 8/27/25 </small>
                                        <p class="fs-2 px-2 pt-3 mt-2">1977 this.title Modern Home
                                        </p>
                                        <div class="d-flex justify-content-end px-3">
                                        <span class="mdi mdi-bed-queen-outline fs-1 p-2 mt-1"></span>
                                        <small class="house-icon">3</small>
                                        <span class="mdi mdi-shower fs-1 p-2"></span>
                                        <small class="house-icon">3</small>

                                    </div>

                                </div>

                                <p class="p-2">this is where I am going to put the users decription, year, sqft of the home. Lorem ipsum dolor sit
                                    amet
                                    consectetur adipisicing elit. Iure sunt iste.</p>
                                <span class="house-price text-success px-2 m-1 fs-3"> $300000</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        `
    }
}