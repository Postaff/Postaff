# Postaff

Full-stack staffing and scheduling platform connecting staffing agencies, client organizations, and job seekers. Designed with a modular industry-agnostic schema and initially configured for substitute teacher dispatch and shift management.

*(2018 engineering archive)*

## Stack

- Frontend: React, Redux, Material-UI, Webpack, Babel (ES6+)
- API and Data Query: GraphQL, Apollo Client, Apollo Server
- Backend and Database: Node.js, Express, MySQL, Sequelize ORM
- Integrations and Auth: JWT Authentication, Twilio SMS Notifications

## Environment Configuration

Create a `.env` file in the project root with the following variables before starting the server:

- `SQL_DBUSER` - MySQL database username
- `SQL_DBPASS` - MySQL database password
- `JWT_SECRET` - Secret key for signing JSON Web Tokens
- `TWILIO_ACCOUNT_SID` - Twilio account SID for SMS dispatch
- `TWILIO_AUTH_TOKEN` - Twilio authentication token

## Getting Started

Install dependencies:

```sh
npm install
```

Compile the frontend bundle with Webpack and Babel:

```sh
npm run react-build
```

Start the local Express and GraphQL server:

```sh
npm run start
```

## Decisions

- One GraphQL API (Apollo Server and Apollo Client) instead of a REST route per screen. The admin, school and substitute dashboards read the same jobs, schools and substitutes in different shapes, so each view asks only for the fields it needs.
- The job lifecycle is a set of mutations: a school creates a job, a substitute claims it, an admin approves it (createJob, claimJob, approveJob, editJob).
- MySQL with Sequelize, because the data is relational: a job belongs to one school and one substitute, and each user account links to an admin, school or substitute profile.
- One login for three roles: Passport with a local strategy (bcrypt) to sign in, then a JWT on each request.
- Job alerts on two channels: Twilio for SMS, Nodemailer for email.
- Seed data generated with Faker (server/dataGenerator.js), so the dashboards can be shown without real records.

## Contributors

Hesh London | Ainslie Hsu | Feng Chen | Mayank Patel
