1. Auth Router

- POST signup
- POST login
- POST logout

2. Profile Router

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

3. Connection Request Router

- POST /request/send/:status/:userId (status-interested, ignored)
- POST /request/review/:status/:requestId (status - accepted, rejected)

4. User Router

- GET /user/connections
- GET /user/requests
- GET /user/feed
