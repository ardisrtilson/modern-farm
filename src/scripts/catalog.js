export const Catalog = (harvested) => {

    /* This searches for items with the container class in the HTML.*/

    const contentElement = document.querySelector(".container")

    /* This adds each step in from the incoming array to the inner HTML
    of the section marked with the container class. */

    for(const post of harvested) {
    contentElement.innerHTML +=
    `<div class="container">${post.type}</div>`
}
}