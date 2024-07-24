# Food King

Food King is a dynamic restaurant listing application that displays currently available restaurants based on the user's location. This project aims to enhance the user experience with a variety of features including a config-driven UI, authentication, multi-language support, Shimmer UI for loading states, protected routes, and search functionality.

## Live Demo

[Food King Live](https://food-king.onrender.com/)

## Demo Video

[![YouTube Video](https://img.youtube.com/vi/aO8QkgXSGvM/0.jpg)](https://www.youtube.com/watch?v=aO8QkgXSGvM)


## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [Usage](#usage)

## Features

-   **Restaurant Listing**: Displays available restaurants based on the user's location.
-   **Config-Driven UI**: Dynamically updates UI based on backend configurations.
-   **Authentication**: User authentication using Firebase.
-   **Multi-Language Support**: Supports multiple languages for a broader audience.
-   **Shimmer UI**: Placeholder effect for better user experience during data loading.
-   **Protected Routes**: Ensures secure access to specific parts of the application.
-   **Search Functionality**: Allows users to search for restaurants.
-   **Lazy Loading**: TO Optimize performance.

## Technologies Used

-   **Frontend**: React, Tailwind CSS
-   **Backend**: Node.js, Express
-   **Authentication**: Firebase
-   **Styling**: Tailwind CSS
-   **Multi-Language Support**: react-18

## Installation

### Prerequisites

-   Node.js
-   npm

### Clone the Repository

```bash
git clone https://github.com/Narasimha9271/Food-King.git
cd Food-King
```

### Install Frontend Dependencies

```bash
npm install
```

### Set Up Firebase

1. Create a Firebase project.
2. Enable authentication methods you want to use.
3. Replace the Firebase config object in `src/firebaseConfig.js` with your Firebase project's config.

### Run the Frontend Application

```bash
npm run dev
```

## Usage

1. Open your browser and navigate to \`http://localhost:5173\`.
2. Sign up or log in using the authentication method set up via Firebase.
3. Browse through the list of available restaurants based on your location.
4. Use the search functionality to find specific restaurants.
