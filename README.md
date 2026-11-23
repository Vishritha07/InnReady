# InnReady – Hotel Housekeeping Tracker

Responsive HTML/CSS/JS frontend with an Express/MongoDB API scaffold.

## Run locally
1. Install Node.js LTS and MongoDB (local) or use a MongoDB connection string.
2. In this folder run `npm install`.
3. Copy `.env.example` to `.env`; set `MONGO_URI` and a private `JWT_SECRET`. The temporary employee registration ID is `INNREADY-DEMO-2026` by default.
4. Run `npm run dev` (or `npm start`).
5. Open http://localhost:3000.

## Roles
Hotel, Receptionist, Housekeeper and Supervisor. Hotel registration creates the Hotel account. Employee registration requires the temporary hotel ID. That ID is validated server-side and is **not stored** in employee records.

## Current implementation
- Frontend role-aware screens, signup/login, floor/room grid, room detail modal, room management, employee activity and task actions.
- API authentication with bcrypt and JWT; role middleware; room and activity endpoints.
- The dashboard frontend can be previewed using demo mode when the API/database is unavailable (demo login buttons are shown on login screen). Demo mode is browser-local and is not real authentication.

Demo mode accounts: Hotel / Receptionist / Housekeeper / Supervisor (use the quick demo buttons).
