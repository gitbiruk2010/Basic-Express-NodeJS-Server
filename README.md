Steps to Run the Server:

    Install Dependencies:
        Before running the server, ensure you have the required dependencies installed by running npm install.

    Start the Server:
        Launch the web server with the command node app.js. You will see a message in the terminal saying "Server is running on port 3000."

    Access the Routes:
        Open your web browser and visit the following routes:
            http://localhost:3000/: Returns "Hello World."
            http://localhost:3000/about: Returns "About page."

    Test the 404 Error Handling:
        To test the server's 404 error handling, visit any undefined route, such as http://localhost:3000/undefined. You will receive a "404 - Not Found" response.

Additional Information about Implementation:

    Server Configuration:
        The server listens on port 3000 by default, but you can change the port by setting the PORT environment variable.

    Express Framework:
        This project uses the Express framework, a popular choice for building Node.js web applications and APIs.

    Project Structure:
        The project's structure is intentionally minimal, providing a basic setup for handling routes. You can easily extend it by adding more routes, middleware, and functionality according to your project requirements.

Feel free to customize and enhance this server for your own projects.

Screenshot of a runnin server:
![runnin server](https://github.com/gitbiruk2010/Basic-Express-NodeJS-Server/assets/103274295/b390f07c-2a55-499c-ad7f-2538766a9896)
