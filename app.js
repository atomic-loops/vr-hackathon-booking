const eventsContainer = document.querySelector('.events-container')
const nav = document.querySelector('nav')
const welcomeEvent = document.querySelector('.welcome-event')
const form = document.querySelector('.form')

const showEvents = (event, id) => {
  const {name, attendee, status, description, booked} = event

  const eventStatus = status === 0 ? 'free': 'paid'
  const output = `
        <div class="card">
          <div class="card--details">
            <div>
              <h1>${name}</h1>
              <span>${attendee - booked} attendees</span>
            </div>
            <span class="card--details-ribbon ribbon-${eventStatus}">
                ${eventStatus}
            </span>
            
             <p>${description}</p>
            <img class="vr-event-image" style='object-fit:cover;' src=img-assets/${id.toString()}.jpg alt='event photo' width='100%' height='30%'>
            <button onclick="bookEvent(${booked} ,'${id}')" class="btn btn-tertiary">Book</button>

          </div>
        </div>
        `
    eventsContainer.innerHTML += output;
}
const bookEvent = (bookedStatus, eventId) => {
  console.log("Booking Event");
  console.log(bookedStatus, eventId);
  window.location = 'bookings/bookseats.html'

}
