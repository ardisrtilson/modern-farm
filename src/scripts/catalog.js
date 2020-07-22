export const Catalog = (harvested) => {

    const contentElement = document.querySelector(".container")

    for(const post of harvested) {
    contentElement.innerHTML +=
    `<div class="container">${post.type}</div>`
}
}