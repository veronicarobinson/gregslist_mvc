import { AppState } from "../AppState.js"

export class HousesController {
    constructor() {
        this.drawHouseListings()

    }

    drawHouseListings() {
        let houses = AppState.houses
        let listingContent = ''
        houses.forEach((house) => {
            listingContent += house.listingTemplate
        })
        const houseListingElm = document.getElementById('house-listing')
        houseListingElm.innerHTML = listingContent
    }
}