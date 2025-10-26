Navigation Menu
To-do-list-application-

Code
Issues
Pull requests
To-do-list-application-
/README.md
jericogris619-creator
jericogris619-creator
yesterday
83 lines (78 loc) · 4.17 KB

Preview

Code

Blame
Final Demo Walkthrough Overview The To-Do List Application is a task management tool designed to help users organize their daily activities efficiently. The application allows users to create, update, and delete tasks, set priorities, assign deadlines, and mark tasks as completed. Core Features • Add New Tasks: Users can add tasks with titles, descriptions, and due dates. • Edit Tasks: Tasks can be updated to reflect progress or changes. • Delete Tasks: Completed or unnecessary tasks can be removed. • Task Prioritization: Tasks can be categorized as high, medium, or low priority. • Search & Filter: Users can filter tasks by priority or status. • Responsive UI: The interface adapts to mobile and desktop screens. Demo Flow

User logs in or enters the main interface.

The dashboard displays all tasks.

The user clicks “Add Task” and fills in the task details.

The task appears in the list with its due date and status.

The user can edit or delete tasks anytime.

When finished, the user marks a task as completed, and it moves to the “Completed” section. Technologies Used • Frontend: HTML, CSS, JavaScript / React (if applicable) • Backend: Node.js / Python Flask (optional) • Database: Firebase / MongoDB / LocalStorage • Version Control: Git & GitHub

Project Report Introduction The goal of the To-Do List Application is to simplify personal task management and improve productivity. With modern lifestyles, people often struggle to manage multiple responsibilities. This project provides a simple and effective solution through a lightweight and user-friendly application. Objectives • Enable users to create and manage daily tasks. • Provide a visual structure for prioritizing work. • Support easy updates and progress tracking. • Offer a minimalistic, distraction-free design. System Architecture The application follows a three-layer architecture:

Frontend Layer: Handles UI interactions and display logic.

Backend Layer: Manages business logic and API endpoints.

Database Layer: Stores task data and user preferences. Tools & Technologies • Frontend: HTML5, CSS3, JavaScript (React recommended) • Backend: Node.js with Express or Python Flask • Database: MongoDB / Firebase • Hosting: Vercel / Netlify / Render • Version Control: GitHub Functional Requirements • User should be able to add, edit, delete, and view tasks. • Tasks must persist after page reload (via database or local storage). • Users can set due dates and priority levels. Non-Functional Requirements • Must be responsive and accessible. • Should load within 2 seconds. • Must ensure data integrity and prevent duplication.

Screenshots / API Documentation Screenshots (describe your app visuals)

Home Page / Dashboard – Displays all active tasks.

Add Task Form – User inputs task details.

Task List View – Shows tasks with priorities and due dates.

Edit Task Modal – Interface to modify existing tasks.

Completed Tasks Page – Shows finished tasks.

API Documentation (if applicable) Endpoint Method Description Request Body Response /api/tasks GET Fetch all tasks — JSON array of tasks /api/tasks POST Add new task {title, description, dueDate, priority} Created task object /api/tasks/:id PUT Update existing task {title, status, priority} Updated task object /api/tasks/:id DELETE Delete a task — Success message

Challenges & Solutions Challenge Description Solution Implemented Data not persisting between sessions Tasks disappeared after reload Implemented LocalStorage / Firebase persistence UI alignment issues Components misaligned on mobile Used responsive CSS grid and media queries Managing multiple priorities Difficult to sort dynamically Added filter function with JS sorting algorithm Deployment errors Build failed during Vercel upload Fixed environment variable paths and reconfigured build Time management Balancing features before deadline Used Agile sprints and version control to stay organized

GitHub README & Setup Guide README Overview The README.md file includes: • Project title and description • Screenshots of UI • Tech stack and dependencies • Setup instructions • Demo and repository links • Contribution guidelines
