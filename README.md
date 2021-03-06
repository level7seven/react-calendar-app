# prolifiCal - Calendar App

## Summary
 A full-stack MERN Calendar App

## Live Site
TBD

## Technical Requirements
* MERN App (front end and backend, using MongoDB, React, and Node.js)
* CRUD functionality
* Implement thoughtful user stories
* Have a visually impressive design
* Be deployed online so it's publicly accessible

## User Stories
* When I look at my calendar, I want to be able to see not only if I have events on a particular day but also how many events I have that day. For easier visiblity, I want to be able to assign colors to my events and have those colors show up on the month view. I'd also like to be able to see a snapshot of my day or week (the ability to choose) below my monthly view so that I can see general AND more specific. 
* I have multiple day events and I don't want to have multiple, single dots denoting singular events. Rather, I'd like multiple day events to be denoted by a line or something continuous so that I know that what I see on my calendar is longer than a day rather than a single-day event. 

## Our Process
### Sprint 1:
![Trello Board](/public/images/sprint-1.png)
* We started by trello-boarding, working on wireframes for the different views, and discussing user stories/what we wanted in terms of functionality.

### Wireframes:
![Mobile View: Month](/public/images/mobile-month-view.png)
![Mobile View: Week](/public/images/mobile-week-view.png)
![Mobile View: Day](/public/images/mobile-day-view.png)
![Desktop View: Month](/public/images/desktop-month-view.png)
![Desktop View: Week](/public/images/desktop-week-view.png)

### Sprint 2:
![Trello Board](/public/images/sprint-2.png)

## Technologies Used
* Mongodb
* Express
* React
* Node.js

## React Components
* Home
* Profile

## Backend Routes
METHOD | URL | Purpose
--- | --- | ---
POST | /auth/signup | Adds new user to user database
POST | /auth/login | Authenticates login details
POST | /auth/me/from/token | Checks if token is present on browser refresh
POST | /calendar/all | Finds all calendars associated with a user
POST | /calendar/oneCal | Finds a single calendar associated with a user
POST | /calendar/addHoliday | Adds holidays to the user's chosen calendar
POST | /calendar/add | Creates a calendar
POST | /calendar/edit | Adds a contributor too the calendar
POST | /calendar/editName | Edits the name of the calendar
POST | /calendar/events | Shows all events for a month
POST | /calendar/one | Add an event to the calendar
POST | /calendar/editone | Edit a single event
POST | /calendar/event/delete | Delete a single event

## Next Steps
* Week view
* Change icons for different events
* More advanced styling

## Getting Started
* Fork and clone this repository
* Run `npm install` in both the parent folder and in the client folder to install dependencies
    * Use nodemon to run the whole app (or npm start from the client folder for only the front end)
    * Create a .env file in the parent directory with: 
        * JWT_SECRET for authentification
        * API keys