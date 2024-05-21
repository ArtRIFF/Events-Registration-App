import { TEventsCard, TParticipan } from "app/types/types";

export function createEventCard(data: TEventsCard){
    const container = document.querySelector(".cards_container");
    container!.insertAdjacentHTML(
        "afterbegin", 
        `<div class="card">
                    <div class="card_header">
                        <h4 class="card_title">${data.title}</h4>
                        <p class="card_data">${data.event_date.substring(0,10)}</p>
                    </div>
                    <div class="card_organizer-wraper">
                        <h3 class="card_organizator_description">Organizer:</h3>
                        <h3 class="card_organizator">${data.organizer}</h3>
                    </div>
                    <div class="card_description-wrapper">
                        <p class="card_description">${data.description}</p>
                    </div>
                    <div class="card_footer">
                        <a class="card_register-link" href="./registration.html">Register</a>
                        <a class="card_view-link" href="./participants&eventId=${data._id}">View</a>
                    </div>
                </div>
        `);
}

export function createParticipantCard(data: TParticipan){
    const container = document.querySelector(".cards_container");
    container!.insertAdjacentHTML(
        "afterbegin", 
        `<div class="card --participants">
        <div class="card_header">
            <h4 class="card_title">${data.name}</h4>
        </div>
        <p class="card_email">
            ${data.name}
        </p>
       </div>
        `);
}