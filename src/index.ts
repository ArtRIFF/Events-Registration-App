import { createEventCard } from "./components/Card";
import { sendRequest } from "./helpers/sendRequest";
import { TEventsCard } from "app/types/types";
import "./scss/style.scss";
console.log("Events board page");
document.addEventListener("DOMContentLoaded", function () {
  sendRequest("https://backend-events-registration-app.vercel.app")
    .then((response) => {
        response.cards.forEach((data: TEventsCard) => {
            createEventCard({
                _id: data._id,
                title: data.title,
                event_date: data.event_date,
                organizer: data.organizer,
                description: data.description
            });
        });
        
    })
    .catch((error) => console.log(error));
});
