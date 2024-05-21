# DNature Restful API

This project is a NestJS-based RESTful API for the DNature online store. It provides functionality for user authentication, user profiles, pet profiles, veterinarian profiles, and tracking user purchases.

## Project Setup

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v14.x or later)
- Yarn package manager

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/julzel/dnature_restful
    cd dnature-restful
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    FACEBOOK_APP_ID=your-facebook-app-id
    FACEBOOK_APP_SECRET=your-facebook-app-secret
    JWT_SECRET=your-jwt-secret
    DATABASE_URI=database-uri
    ```

### Running the Application

To run the application in development mode:
```bash
yarn start:dev
