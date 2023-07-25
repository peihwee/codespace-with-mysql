# How to Use the Codespace with MySQL Template Repository

This repository serves as a template to quickly set up a Codespace with MySQL for development. It includes a Docker Compose configuration to start a MySQL database along with a Codespace configuration for Visual Studio Code. By following these instructions, you can easily create a Codespace with MySQL support and start building your application.

## Prerequisites

Before you proceed, make sure you have the following installed:

- **GitHub Account**: You need a GitHub account to create a Codespace from this template repository.

## Steps to Use the Template Repository

### 1. Create a New Repository from Template
   - Go to the [codespace-with-mysql template repository](https://github.com/peihwee/codespace-with-mysql).
   - Click on the "Use this template" button, located at the top-right corner of the repository page.
   - Give your new repository a name, and choose a visibility (public or private).
   - Click "Create repository from template" to create your new repository.

### 2. Create a Codespace
   - Once your new repository is created, open it in Visual Studio Code.
   - You should see a notification in the bottom-right corner of VSCode, suggesting that you "Open Repository in Codespaces."
   - Click on the notification, and it will prompt you to create a new Codespace.

### 3. Configure Codespace
   - Follow the instructions to configure your Codespace. You can select the desired options like Codespace size, GitHub token, etc.
   - Wait for the Codespace to be provisioned. This might take a few minutes.



## Set Up the Environment Variables

1. In the project root directory, create a new file named `.env`.

2. Open the `.env` file in a text editor.

3. Copy the following example environment variables into the `.env` file:

   ```plaintext
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=1234
    DB_DATABASE=tryout
   ```

   Update the values of the environment variables according to your MySQL database configuration.

## Install Dependencies

- Open a terminal or command prompt and navigate to your project's root directory.
- Run the following command to install the project dependencies:

  ```bash
  npm install
  ```

  This will install the required packages, including `dotenv` and `mysql2`.

## Create Schema and Database

- The script defined in `createSchema.js` is responsible for creating the database if it doesn't already exist. It will also update the `pool` configuration to use the specified database name from the `.env` file.
- To initiate the schema and database creation, run the following command:

  ```bash
  npm run init_tables
  ```

This command will check if the database exists. If not, it will create it. If the database already exists, the script will simply proceed.

## Initialize Tables

- The script defined in `initTables.js` will create the necessary tables in the specified database. Run the following command to create the tables:

  ```bash
  npm run init_tables
  ```

- The script will execute the SQL statements defined in `initTables.js`, creating the required tables.

**Note:** It's important to ensure that you have set up your database schema and table definitions correctly in the `initTables.js` script. Modify the `SQLSTATEMENT` variable as needed to match your application's requirements.

## Start Your Application

- After successfully initializing the database schema and tables, you can start your application using the following command:

  ```bash
  npm start
  ```

- This command will execute the script defined in the `"start"` script in the `package.json` file, which will get the rows in the `messages` tables.

  ```
  1 ) Hello world!
  2 ) This is a test message
  3 ) This is another test message
  4 ) This is a test message from the server
  ```

That's it! You have now initialized the database schema and tables for your application. Remember to keep your database configuration secure, especially in production environments.

## Additional Notes

- **Customize MySQL Configuration**: You can modify the MySQL version, root password, and other configurations in the `docker-compose.yml` file as needed.
