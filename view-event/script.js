//  get queryparams
var urlParams = new URLSearchParams(window.location.search);
var booked = urlParams.get("booked");
var id = urlParams.get("id");

//  get event details
var ev = eventArray[id];
const eventStatus = ev.status === 0 ? "free" : "paid";

// update event details on page
document.querySelector(".event-image").src = "../img-assets/" + id + ".jpg";
document.querySelector(".event-name").innerHTML =
  ev.name + ` <sup class="${eventStatus}">${eventStatus}</sup>`;
document.querySelector(".event-description").innerHTML =
  ev.description +
  `<br/><br/><span>${ev.attendee - ev.booked} attendees</span>`;

// goto payment page
const purchaseEvent = () => {
  console.log("Booking Event");
  window.location = "https://youtu.be/Z6LBJoIpLfA";
  // window.location = "../event-purchase/" + "?id=" + id + "&booked=" + booked;
};
