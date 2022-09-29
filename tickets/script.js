const eventsContainer = document.querySelector(".events-container");
const nav = document.querySelector("nav");
const welcomeEvent = document.querySelector(".welcome-event");
const form = document.querySelector(".form");

const showEvents = (event, id) => {
  const { name, attendee, status, description, booked } = event;

  const eventStatus = status === 0 ? "free" : "paid";
  const output = `
        <div id="card" onclick="eventDetail(${booked} ,'${id}')">
          <img src=../img-assets/${id.toString()}.jpg />
          <div>
              <div>
                <h2>
                  ${name}
                </h2>
                <h3 id="book-btn"><i class="fas fa-bookmark"></i></h3>
              </div>
              <p>
                ${description}
              </p>
          </div>
        </div>
        `;
  eventsContainer.innerHTML += output;
};

const eventDetail = (bookedStatus, eventId) => {
  console.log("Booking Event");
  console.log(bookedStatus, eventId);
  window.location = "../view-event/?booked=" + bookedStatus + "&id=" + eventId;
};

eventArray.forEach((event, index) => {
  showEvents(event, index);
});
