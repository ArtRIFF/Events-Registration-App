import { createEventCard } from "./components/Card";
import { sendRequest } from "./helpers/sendRequest";
import { TEventsCard } from "app/types/types";
import "./scss/style.scss";
console.log("Events board page");
document.addEventListener("DOMContentLoaded", function () {
    sendRequest("https://backend-events-registration-app.vercel.app/")
      .then((response) => {
          response.cards.forEach((data: TEventsCard) => {
              createEventCard(data);
          });

      })
      .then(()=>{
      const links = document.querySelectorAll(".card_view-link");
      
      links.forEach((link)=>{
          link!.addEventListener("click", (event) => {
            event.preventDefault();
            const linkHref = link?.getAttribute("href");
            const param = "eventId=";
            const startIndex = linkHref?.lastIndexOf(param);
            const paramValue = linkHref?.slice(startIndex! + param.length, linkHref.length);
            const linkForTransition = linkHref?.slice(0, startIndex! - 1);
            localStorage.setItem(param, paramValue!);
            console.log(linkHref);
            console.log(paramValue);
            
            window.location.href = `${linkForTransition}.html`;
          });
      });
      })
      .catch((error) => console.log(error));
      
});
