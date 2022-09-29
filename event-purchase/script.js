//  get queryparams
var urlParams = new URLSearchParams(window.location.search);
var booked = urlParams.get("booked");
var id = urlParams.get("id");

//  get event details
var ev = eventArray[id];
const eventStatus = ev.status === 0 ? "free" : "paid";

// goto booking page
const purchaseEvent = () => {
  console.log("Booking Event");
  window.location = "../tickets";
  // window.location = "https://youtu.be/Z6LBJoIpLfA";
  // window.location = "../bookings/bookseats.html";
};
