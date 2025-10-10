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

