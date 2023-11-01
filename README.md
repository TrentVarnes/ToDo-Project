# Objective

This is a Next.js application that allows the user to keep up with their tasks. The user can add and delete tasks. The user can also mark whether a task is complete or not. This application also contains an analytics page that will show how many taks the user created and completed within a certain amount of time. This application uses postgreSQL to save the input task data into a database. 

This application was created and tested on a machine using Windows 11 version 22H2 using Next.js via VScode. 

# Objective - Your application should persist data in a database 
## Database
-   Postgres is the preferred database of choice 
-   Sequelize is the preferred ORM Create a to-do model. 
-   Each to-do should have a unique id, name, created_at, completed_at, and status field.
-   Implement the typical CRUD operations for this resource.

I used postgreSQL as my db.. I implemented it on my local machine using pgadmin4. In my code I connected to the db using sequelize with my credentials inside of the config.js file and exported it. 

I created my model using sequelize inside of the model/task.js file. I imported the db connection and created the model with a unique id, name, status, createdAt, and updatedAt which acts as completedAt. (I found this to be easier since sequelize automatically creates the updatedAt) I then exported this model with the name Tasks. 

# Objective - Your application should persist data in a database 
## API

-   Implement the typical CRUD operations for this resource.

My API endpoints are inside of the api/task.js and api/[id].js folders. The task folder imports the db connection and the Task model. The HTTP POST method is used to create a new Task which takes the req.body and inputs that as the name and sets the status to false. The HTTP GET method is used to get all tasks and return them via Task.findAll() thanks to sequelize functionality.

The [id].js folder also imports the db connection and the Tasks model. The tasks id is apassed in as a query parameter. The HTTP PUT method is used to update a task. This method is only used to update the status of a single task which is found via the Tasks id. The HTTP DELETE method is used to delete a single task via the Tasks id. 

# Objective - Using **React Bootstrap** and **React Hook Forms**:
## Pages and components

-   Create a page that shows:
    -   A list of the user's to-dos with a checkbox to mark the task complete
    -   A delete button that deletes a task
    -   A simple form to add new tasks (**React Hook Forms** should be used here)
-   Create a simple "analytics" page that shows the number of the to-dos created and the number of the to-dos completed in a specific time frame (default last 7 days). Using query parameters, the page should accept two date ranges and filter the to-dos accordingly


The Todo.js folder is implemented using React-Bootstrap. It exports the function Todo which takes a list of Tasks as its parameter.  Inside of the Todo function it returns a ListGroup of ListItems. Each task is mapped to which allows us to get the values of a single task with the key task. This allows us to display each task name as a ListGroupItem. There is also added functionality that marks the name as crossed out if the task status is true. Within this ListGroupItem there are two buttons, one to delete a task and one to mark a task complete/incomplete. There are two additional functions/const to handle what happens when these buttons are clicked. When the mark complete button is clicked it calls the handelChange function which takes the task id and status as parameters. This makes a fetch() PUT call using the task id as a query parameter and changes the value of the current status to the opposite of its current value. When the delete button is clicked it calls the handleDelete function which takes the task id as a parameter and makes fetch() DELETE call using the task id as a query parameter. This successfully deletes the task. 

The Form.js folder is implemented using React-Hook-Form. It exports the function Form which takes a list of tasks as its parameter. This Form returns a form that allows the user to enter a task. Inside of the form returned there is added functionality that only allows the user to type in a task from 1-42 chars long. It will display an error and not allow the create button to be clicked if otherwise. There is also a create button, this button is a submit type which means when it is clicked the onSubmit() function is called passing the input data as its parameter. It then makes a fetch() POST call which takes the data and sends the task name as the req.body creating a task with the task name. 

The NavBar.js folder is implemented using React-Bootstrap NavBar. This creates a NavBar to be seen on the top of every page. This has the link to the homepage and the analytics page. The analytics link accepts two query parameters which are default to the current date and 7 days before the current date. There is a function to make the 7 days ago date. NavBar is exported and input into Layout.js. Layout is then passed into the _app.js folder to be displayed on every page. 

The index.js folder is the home page of this application. It is imported the contents of the Form.js and Todo.js folders. It then displays these inside of a React-Bootstrap Card in the center of the page. This page also uses the function getServerSideProps() to make a fetch() GET call which will return all Tasks, this is passed as the parameter to the Todo and Form functions returned in this page. 

The analytics.js folder represents the analysis page link accessed via the NavBar. It uses query from useRouter to access the query contents passed in. This page exports a function called Analytics() which takes a parameter of a list of tasks. This page also uses the function getServerSideProps() to make a fetch() GET call which will return all Tasks, this is stored as the parameter to the Analytics() function. This page creates two empty arrays one called createdTasks and one completedTasks. There are two more consts created one named then to create a date representing  query parameter query.then and one named now to represent the query parameter query.now. This page then loops through the tasks passed as a parameter and runs two if statements on each task. Before the if statements are ran the task.createdAt and task.updatedAt values are accessed and saved in a new date named taskD and taskD2. The first if statements makes sure this task was created between the two query dates. If this is true the task is added to the createdTasks array. The next if statement also checks if the task was updated between the two dates and it also ensures the tasks status is set to true. It this statement returns true then the task is added to the completedTasks array. The code is written in these functions that it should work with any dates put in. The analytics page now displays this information in a React-Bootstrap Accordion that will display how many tasks were created and how many were completed within the query parameter dates. 
