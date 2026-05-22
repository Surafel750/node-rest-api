# Dev Log

Day-to-day progress notes.

## 2025-07-05
- Initialised Express project. Set up folder structure following MVC pattern

## 2025-07-11
- JWT auth working. register + login endpoints tested with Postman

## 2025-07-17
- Added helmet and cors middleware. Tested preflight requests

## 2025-07-30
- User CRUD done. Fixed populate issue when listing users

## 2025-08-08
- Added express-rate-limit: 100 req per 15 min. Prevents brute-force on auth

## 2025-08-15
- Started logger middleware. Logs method, URL, status, response time in colour

## 2025-08-22
- errorHandler: centralised so no more try/catch boilerplate in every route

## 2025-09-04
- Post model added. Used $text index for full-text search on title and body

## 2025-09-10
- Post controller: pagination done. Default 10 posts per page, supports ?page=N&limit=M

## 2025-09-16
- Added POST /api/posts — requires JWT. Non-auth users can only GET

## 2025-09-22
- Docker: api + mongo running together with compose. One command setup works

## 2025-09-30
- Added tag filtering to posts: ?tag=javascript returns matching posts only

## 2025-10-04
- Refactored app.js: extracted routes into separate files. Much cleaner now

## 2025-10-10
- Added input validation with express-validator on register/login

## 2025-10-17
- Mongoose: added pre-save hook to hash password. Prevents plain-text storage

## 2025-10-22
- Added health check endpoint: GET /api/health returns uptime and version

## 2025-10-29
- Switched from nodemon to node --watch in dev. No extra dependency needed

## 2025-11-05
- Fixed CORS: added credentials:true for cookie support in browser

## 2025-11-12
- Dockerised the full stack. api + mongo with named volumes for persistence

## 2025-11-21
- Updated mongoose to 8.x. Migrated connection options to new API

## 2025-12-01
- Exam season — keeping commits small. Reading Node.js internals

## 2025-12-10
- Fixed post update: only author can update their own post (ownership check)

## 2026-01-05
- New year: planning to add JWT refresh tokens in Q1

## 2026-01-12
- Added pagination metadata to API responses: total, page, pages

## 2026-01-19
- Posts: added views counter. Increments atomically on GET /api/posts/:id

## 2026-01-26
- Switched error logging to structured format. Easier to parse in production

## 2026-02-02
- Fixed: deleted user's posts weren't cleaned up. Added cascade delete logic

## 2026-02-08
- Upgraded Node.js to 20 LTS. Updated Dockerfile base image

## 2026-02-12
- Added search endpoint: GET /api/posts?search=keyword uses $text index

## 2026-02-20
- Post tags: added lowercase normalization. 'Python' and 'python' → same tag

## 2026-02-24
- Improved JWT: added user role in token payload. Ready for role-based access

## 2026-03-04
- Added MongoDB aggregation pipeline for post analytics (views, tag counts)

## 2026-03-10
- Fixed: rate limiter was resetting on each deploy. Added Redis store option

## 2026-03-16
- Added GET /api/users/me endpoint. Returns current user from JWT

## 2026-03-20
- Improved error messages: 'User not found' instead of generic 404

## 2026-03-26
- Updated README: added Postman collection export link

## 2026-04-01
- Added bcrypt cost factor to env config. Default 12, can tune for performance

## 2026-04-07
- Posts: added published/draft toggle. Draft posts hidden from public GET

## 2026-04-14
- Refactored controllers: consistent response format {success, data/error}

## 2026-04-20
- docker-compose: added restart: unless-stopped for reliability

## 2026-04-28
- Added API versioning: all routes now under /api/v1/

## 2026-05-05
- Added Swagger/OpenAPI docs at /api/docs. Auto-generated from JSDoc

## 2026-05-11
- Post comments: schema designed, controller next

## 2026-05-18
- Security audit: added Mongoose sanitize to prevent NoSQL injection

## 2026-05-22
- Comment model + routes done. Nested under posts: /api/v1/posts/:id/comments

