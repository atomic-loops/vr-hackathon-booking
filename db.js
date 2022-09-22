


const eventArray = [
  {"name": "LA Dodgers","attendee": 500,"status": 1, "description": "Catch the Dodgers all season long with dugout club seats", "booked": 300},
  {"name": "LAFC vs Houston","attendee": 758,"status": 0, "description": "LAFC plays host to Houston Dynamo FC September 19 @ 7:30pm", "booked": 334},
  {"name": "2022 Super Bowl","attendee": 500,"status": 1, "description": "Catch the Dodgers all season long with dugout club seats", "booked": 300},
]
eventArray.forEach((event, index) => {
  showEvents(event, index)
});
