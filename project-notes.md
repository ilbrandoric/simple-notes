
## Setup

``` bash
npm install
npm run dev
```


## How does it all work?

The Flow:

main.jsx = The starting point

This file loads first and says "I'm going to wrap the app in a router so we can have multiple pages"
It puts your entire App inside BrowserRouter

App.jsx = The page director

This decides which page to show based on the URL
When you go to /, it says "show MainLayout, and put Dashboard inside it"
MainLayout.jsx = The page template

This is like a frame or wrapper that appears on every page
It shows "MainLayout is mounted" at the top
The <Outlet /> is a placeholder that says "put the actual page content here"

Dashboard.jsx = The actual content

This is what fills the <Outlet /> placeholder
It shows "Dashboard works"
Simple analogy:
Think of it like a TV show with opening credits:

main.jsx = Turning on the TV

App.jsx = The channel selector (decides what show to play)

MainLayout.jsx = The opening credits and backdrop (same on every episode)

Dashboard.jsx = The actual episode content (what changes per page)

So when you visit the site, you see the "opening credits" (MainLayout) + the "episode" (Dashboard) combined!


## The app

---------------------------------
Navbar        (always visible)
---------------------------------
Sidebar       |   Main Content
              |
              |  Dashboard
              |  - Task list
              |  - Add task form
              |
---------------------------------
Footer        (always visible)
---------------------------------



Data Flow (not UI)

App.jsx <--- ONLY App.jsx changes the data
(state: tasks)
   |
   v
Dashboard
   |
   v
TaskList
   |
   v
TaskCard




What features we will build (in order)

We are building the app layer by layer:

✅ App runs, router works, layout works
✅ Show task list (read-only)
⬜ Delete a task
⬜ Create a task
⬜ Update a task
⬜ Task details page
⬜ Styling

