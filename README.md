# Innov8mate
 Innovative product dev using for large scale development

 1. Frontend
    - vite and tailwind setup.

    - working fine prevent page routing before user have to login, can't acess content before login.
2. Backend
   - Express, nodemon , mongoose.
   - Mongodb server connection.
   - Routing for user and conrollers

3. Addon's definetly needed are(needs to implement )
   - user needs to update thier own information only, not others.
   - already existing username problem , user need to try for another name.
   - ownerId, userId , ideasId and email of user
   - ideas
      - when user posts idea he should return owner is true.
      - when user supports idea then supporter is true, and data of supporter from localstorage
         should send to the owner who already stored his id in database when posted idea.
      - based on id of profile should fetch from the user data and show it in ideas page for profile when someone seen your idea.
