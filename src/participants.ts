
import { createParticipantCard } from "./components/Card";
import { sendRequest } from "./helpers/sendRequest";
import "./scss/style.scss";
import { TParticipan } from "./types/types";
document.addEventListener("DOMContentLoaded", function () {
    console.log("Event participants page");
   const param = "eventId=";
   const paramValue = localStorage.getItem(param);
  
      sendRequest(`https://backend-events-registration-app.vercel.app/participans?eventId=${paramValue}`)
        .then((response) => {
            response.cards.forEach((data: TParticipan) => {
                createParticipantCard(data);
            });
  
        })
        .catch((error) => console.log(error));
  });
  