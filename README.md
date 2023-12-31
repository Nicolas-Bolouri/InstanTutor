# InstanTutor

InstanTutor connects students and tutors in STEM instantly through video chat. Originally built in 2022 with JavaScript, HTML, and CSS, it was refactored in 2023 using NextJs and ExpressJs and is hosted on Heroku. Our app proudly won the Matrox Video Multimedia Award at the 2022 McGill Code Jam 12 Hackathon against 56 other teams.

## Table of Contents 

- [Built With](#built-with)
- [History & Awards](#history--awards)
- [Deployment](#deployment)
- [Getting Started](#getting-started)


## Built With

- NextJs
- ExpressJs
- Agora SDK


## History & Awards 

- Developed in 2022 with vanilla JavaScript, HTML, and CSS in the context of the 2022 McGill Code Jam 12 Hackathon
- Winner of the Matrox Video Multimedia Award for the best use of multimedia against 56 other teams
- Refactored in 2023 using NextJs, ExpressJs, and deployed on Heroku


## Deployment 

The app is deployed using Heroku at: https://instantutor-184f552213d8.herokuapp.com/

## Getting Started 

1. **Clone the Repository**


2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Configure**
    - Update the `.env` file with your server api endpoint and your Agora project keys (www.agora.io)

4. **Run the App**
    - First, run the backend server:
    ```bash
    npm run start-server 
    ```
    
     - Second, build the app:
    ```bash
    npm run build 
    ```

      - Third, run the frontend:
    ```bash
    npm run start  
    ```

