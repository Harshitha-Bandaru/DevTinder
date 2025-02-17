1. Auth Router

- POST signup
- POST login
- POST logout

2. Profile Router

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

3. Connection Request Router

- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

4. User Router

- GET /user/connections
- GET /user/requests
- GET /user/feed
