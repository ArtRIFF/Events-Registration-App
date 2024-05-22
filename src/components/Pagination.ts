export function createPagination(cardAmount: number){
    const container = document.querySelector(".pagination_numbers-wrapper");
    const pagesAmount = Math.ceil(cardAmount/5);
    for (let index = pagesAmount; index > 0; index--) {
        container!.insertAdjacentHTML(
            "afterbegin", 
            `
            <li class="pagination_number">
                    <a href="?page=${index}" class="pagination_number-link">
                        <p class="a pagination_number_text">${index}</p>
                    </a>
                </li>
            `);
    }
}
