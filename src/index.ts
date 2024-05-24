import { createEventCard } from "./components/Card";
import { sendRequest } from "./helpers/sendRequest";
import { TEventsCard } from "app/types/types";
import "./scss/style.scss";
import { createPagination } from "./components/Pagination";
console.log("Events board page");
let url = "https://backend-events-registration-app.vercel.app";
const urlWidth = url.length;
const loaderHTMLElement  = document.querySelector(".cards_loader");
function loadContent(url: string) {
  sendRequest(url)
    .then((response) => {
      response.cards.forEach((data: TEventsCard) => {
        createEventCard(data);
      });
      loaderHTMLElement?.classList.add("hide");
      createPagination(response.totalCardCount);
    })
    .then(() => {
      const links = document.querySelectorAll(".card_view-link");
      links.forEach((link) => {
        link!.addEventListener("click", (event) => {
          event.preventDefault();
          const linkHref = link?.getAttribute("href");
          const param = "eventId=";
          const startIndex = linkHref?.lastIndexOf(param);
          const paramValue = linkHref?.slice(
            startIndex! + param.length,
            linkHref.length
          );
          const linkForTransition = linkHref?.slice(0, startIndex! - 1);
          localStorage.setItem(param, paramValue!);

          window.location.href = `${linkForTransition}.html`;
        });
      });
      const paginationNumbers = document.querySelectorAll(
        ".pagination_number-link"
      );
      paginationNumbers.forEach((paginationLink) => {
        paginationLink.addEventListener("click", (event) => {
          event.preventDefault();
          const linkHref = paginationLink?.getAttribute("href");
          const param = "page=";
          const startIndex = linkHref?.lastIndexOf(param);
          const paramValue = linkHref?.slice(
            startIndex! + param.length,
            linkHref.length
          );
          localStorage.setItem(param, paramValue!);
          const cards = document.querySelectorAll(".card");
          const paginationItems =
            document.querySelectorAll(".pagination_number");
          cards.forEach((item) => item.remove());
          paginationItems.forEach((item) => item.remove());
          const originalURL =
            "https://backend-events-registration-app.vercel.app".slice(
              0,
              urlWidth
            );
          url = originalURL + "/?" + param + paramValue;
          loaderHTMLElement?.classList.remove("hide");
          loadContent(url);
        });
      });
    })
    .catch((error) => console.log(error));
}

document.addEventListener("DOMContentLoaded", function () {
  loadContent(url);
});
