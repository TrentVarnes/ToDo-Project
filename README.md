### Objective

Create a to-do list application using NextJS.

### Brief

To better organize your daily objectives, you are going to create a to-do list application. To make it slightly more interesting, you will add functionality to track
your progress over time! This will help you answer questions such as: How many tasks have you finished over a period of time? What is your most productive day of the week? How many minutes/hours/days do you need to complete a task on average?

### Tasks

-   Implement assignment using:
    -   Language: **Node**
    -   Framework: **NextJS**
-   Your application should persist data in a database
    -   Postgres is the preferred database of choice
	-	Sequelize is the preffered ORM
-   Create a to-do model. Each to-do should have a unique id, name, created_at, completed_at, and status field
    -   Implement the typical CRUD operations for this resource
-   Using **React Bootstrap** and **React Hook Forms**:
    -   Create a page that shows:
        -   A list of the user's to-dos with a checkbox to mark the task complete
        -   A delete button that deletes a task
        -   A simple form to add new tasks (**React Hook Forms** should be used here)
    -   Create a simple "analytics" page that shows the number of the to-dos created and the number of the to-dos completed in a specific time frame (default last 7 days). Using query parameters, the page should accept two date ranges and filter the to-dos accordingly

### Note

You are **NOT** required to implement an authentication system. Assume each request is coming from the same user. Assume the API is only consumed by you and your own application. The API endpoints do not need to be RESTful, and using regular, framework rendered HTML is perfectly fine.

### Evaluation Criteria

-   **Node** best practices
-	**React** best practices
-   Show us your work through your commit history
-   Completeness: did you complete the features?
-   Correctness: does the functionality act in sensible, thought-out ways?
-   Maintainability: is it written in a clean, maintainable way?

### CodeSubmit

Please organize, design, test, and document your code as if it were going into production - then push your changes to the
master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The Greaktech Team
