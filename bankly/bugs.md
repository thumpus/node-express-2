- bug #1: The user cannot edit their own profile info. fixed by adding a requireAdminOrCurrUser method to middleware/auth.js

- bug #2: Admin authorization isn't functional: Admin can't delete or update other users. this is happening when the JSON web
    token is given to the user, which always sets the admin status to false (default value) in its payload. This was caused
    by the auth.js login route not awaiting the promise of the User authenticate method, resulting in it passing a null 'admin' value
    to the createToken function. 

- bug #3: VERY BAD!!! When updating a user's info, if the user passes a password in the body, it puts the UNHASHED password into the database.
    Looking further into it, this is happening because the user/admin can update the user's username and password, which should not be possible.
    Fixed by removing the username, admin, and password fields from the fields to update in the PATCH /:username route in users.js.

- bug #4: When attempting to find a user that doesn't exist, the request goes through and returns an empty body rather than returning an error.
    This was caused by the User.get() method not properly throwing the "not found" error due to the omission of the word 'throw' before new ExpressError.

- bug #5: 

- bug #6: The authUser middleware function wasn't properly throwing an error when given an invalid JWT. This wasn't caught before because every
    instance where authUser was being used also involved another another middleware function that would throw a 401 error for another reason, so
    the test would always get the 401 error it was expecting. Fixed this by adding a check for a valid payload from the token when decoding it
    in the authUser function.
