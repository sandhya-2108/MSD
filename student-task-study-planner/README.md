# Student Task & Study Planner (MERN)

A full-stack student planner with task CRUD, subject/status/priority filters, search, dashboard statistics, and MongoDB persistence.

## Requirements
- Node.js 18+
- MongoDB Atlas account OR local MongoDB Community Server
- VS Code

## 1. Configure MongoDB
### MongoDB Atlas
1. Create a free cluster at https://www.mongodb.com/atlas/database
2. Create a database user and password.
3. In Network Access, add your current IP address (for local development).
4. Select Connect -> Drivers and copy the connection string.
5. Replace `<username>`, `<password>`, and the database name as needed.

### Local MongoDB
If MongoDB Community Server is installed and running, use:
`mongodb://127.0.0.1:27017/student_planner`

## 2. Configure the backend
Open a terminal in the `server` folder:
```bash
npm install
```
Copy `.env.example` to `.env` and set `MONGODB_URI` to your connection string.
Then run:
```bash
npm run dev
```
The API should report that it is running on `http://localhost:5000`.

## 3. Configure the frontend
Open a second terminal in the `client` folder:
```bash
npm install
npm run dev
```
Open the local URL Vite prints, usually `http://localhost:5173`.

## 4. Test
- Add a task.
- Edit its details and status.
- Complete a task.
- Search or filter by status/priority.
- Delete a task.
- Refresh the browser: tasks should remain because they are saved in MongoDB.

## API endpoints
- `GET /api/health` - API status
- `GET /api/tasks` - list tasks (supports `search`, `status`, `priority`, `subject`)
- `GET /api/tasks/:id` - get one task
- `POST /api/tasks` - create task
- `PUT /api/tasks/:id` - update task
- `DELETE /api/tasks/:id` - delete task

## Troubleshooting
- `MONGODB_URI is not defined`: create `server/.env` from `.env.example`.
- MongoDB connection error: verify URI, database password, IP allowlist, and cluster status.
- Port in use: stop the other process or change `PORT` in `server/.env`.
- Frontend cannot load tasks: keep backend terminal running and check `http://localhost:5000/api/health`.
