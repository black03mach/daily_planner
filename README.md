# daily_planner

## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
- THEN the current day is displayed at the top of the calendar
WHEN I scroll down
- THEN I am presented with timeblocks for standard business hours (bootstrap input boxes/cards, just have to handle 9-5)
WHEN I view the timeblocks for that day
- THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
- THEN I can enter an event (form input)
WHEN I click the save button for that timeblock
- THEN the text for that event is saved in local storage
WHEN I refresh the page
- THEN the saved events persist

??? functions ???
saveHandler - we need a function to handle click and save
displayCurrentTime - get current date and time and put it on the page (Moment.js)
renderColorCode - use moment.js (or alternatives in webapi) to get the current time "color code" (class and background-color)
renderCells - onLoad functions? or when the page is ready, we need to "render" any saved cells (defer document-ready? jquery timeout)


