# Project Overview:
ToolsCount is a web application designed to help motorbike and Formula 1 teams track the number of parts used during a race weekend. The primary goal is to allow engineers to log in and record the parts they have utilized, providing a comprehensive tracking system for team logistics. The project was developed as a group effort for a Cloud Computing Module during an Erasmus program in Romania in 2023.

ToolsCount exemplifies the collaborative effort to leverage modern web development technologies and cloud services, providing a tool for racing teams to manage their parts efficiently during race weekends. This project showcases the practical application of cloud computing principles learned during the Erasmus program, highlighting the integration of robust frameworks, scalable databases, and reliable deployment platforms.

## Main Features:

- Parts Registration: Engineers can add parts and quantities used during race weekends.
- Counter Adjustment: Engineers can increment or decrement the quantity of a part used.
- Tool Editing: Users can update tool names and counters in case of entry errors.
- Tool Deletion: Users can remove tools from the tracking list.
- Email Communication: Built-in functionality for sending emails to facilitate communication among team members.

## Technologies and Rationale:

- Programming Language:
    - JavaScript: Chosen for its wide usage in web development and its ability to create dynamic, interactive client-side experiences. Its extensive community support and libraries expedite development and maintain structured code.

- Framework:
    - Angular: Selected for its robust, component-based framework ideal for large-scale web applications. Angular’s bidirectional data binding, dependency injection, and modularity ensure the development of a scalable, maintainable, and high-performance application. Its comprehensive documentation and active community provide ample support.

- Database:
    - Cloud SQL with MySQL: MySQL was chosen for its reliability, scalability, and security. Partnering it with Google Cloud Platform’s Cloud SQL offers managed services, ensuring optimal performance and easy administration.

- Deployment:
    - Google Cloud Platform (GCP): GCP provides extensive services and tools for efficient hosting, scaling, and management of web applications. Using Google App Engine for hosting ensures scalable and automated deployment, while Cloud SQL integration guarantees fast and secure database access. GCP’s monitoring and resource management tools allow focus on development over infrastructure concerns.

## Architectural Diagram:
The architecture includes:
- Front-End: Web browser interface using Angular for user interactions.
- Back-End: Node.js and Express.js handle server-side logic and routing, with a web server managing client requests.
- Database: Cloud SQL with MySQL stores and manages parts data.
- Communication: Front-end and back-end interact via HTTP requests, using HTML/CSS and JavaScript for UI and interactivity.
