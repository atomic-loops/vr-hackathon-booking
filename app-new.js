const eventsContainer = document.querySelector(".events-container");
const nav = document.querySelector("nav");
const welcomeEvent = document.querySelector(".welcome-event");
const form = document.querySelector(".form");

const showEvents = (event, id) => {
  const { name, attendee, status, description, booked } = event;

  const eventStatus = status === 0 ? "free" : "paid";
  const output = `
        <div id="card">
          <img src=img-assets/${id.toString()}.jpg />
          <div>
              <div>
                <h2>
                  ${name} <sup class="${eventStatus}">${eventStatus}</sup>
                </h2>
                <h3 id="book-btn" onclick="bookEvent(${booked} ,'${id}')"><i class="fas fa-bookmark"></i></h3>
              </div>
              <p>
                ${description}
                <br/><br/>
                <span>${attendee - booked} attendees</span>
              </p>
          </div>
        </div>
        `;
  eventsContainer.innerHTML += output;
};

const bookEvent = (bookedStatus, eventId) => {
  console.log("Booking Event");
  console.log(bookedStatus, eventId);
  window.location = "bookings/bookseats.html";
};

/**
 *       <span>${attendee - booked} attendees</span>
 *       <span class="card--details-ribbon ribbon-${eventStatus}">
                ${eventStatus}
            </span>
 *  <button onclick="bookEvent(${booked} ,'${id}')" class="btn btn-tertiary">Book</button>
 */
