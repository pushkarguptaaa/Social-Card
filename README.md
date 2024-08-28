# Social Card App

This is a simple **Full-Stack** application that allows users to create, view, update, and delete social cards. Each card includes a person's name, a short description, social media handles (e.g., LinkedIn, Twitter), and a list of interests. The app is built using **React** for the frontend and **Express** with **MongoDB** for the backend.

## Features

- **Create a Social Card**: Users can add a new card by providing a name, description, social media links, and interests.
- **View Social Cards**: Display all created social cards in a neat and organized manner.
- **Update Social Cards**: Modify the details of existing cards.
- **Delete Social Cards**: Remove cards that are no longer needed.
- **Form Validation**: Ensure that all required fields are filled out correctly before submitting.
- **CRUD Operations**: Full support for creating, reading, updating, and deleting cards.

## Tech Stack

### Frontend

- **React**
  - **Hooks**: `useState`, `useEffect`
  - **Components**: `Card`, `CardForm`
  - **Fetch API**: For making HTTP requests to the backend

### Backend

- **Express.js**: RESTful API for managing social cards.
- **MongoDB**: NoSQL database to store card data.
- **Zod**: Schema validation for request payloads.
