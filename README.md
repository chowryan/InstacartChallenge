# InstacartChallenge

## PART 1:

![InstacartChallenge](https://media.giphy.com/media/3ohk2CTzJhhUGlMerK/giphy.gif)

### Running the App

1. `npm install` - installs required node modules.
2. `npm start` - runs server.
3. `npm run build` - runs webpack build.
4. Go to "http://localhost:5000/" in browser.

### Todo List

1. Write Jest and/or Mocha tests.
2. Modularize components, SignupForm.js can be broken up.
3. Make the form mobile friendly in vertical orientation with CSS media queries.
4. Additional CSS styling.

## Part 2:

I did not finish writing the SQL script; the query I ended with was the following:

`SELECT count(workflow_state), date(created_at, "weekday 1", "-7 day"), workflow_state
FROM applicants
WHERE created_at >= start_date AND created_at <= end_date
GROUP BY date(created_at, "weekday 1", "-7 day"), workflow_state;`

The results do not match the sample results but they seem to be within 10%, maybe an offset error. I will continue debugging this problem later, but this was what I ended with after the 4 hour time limit.

I tested this query using "DB Browser for SQLite http://sqlitebrowser.org/".

![InstacartChallenge](http://i.imgur.com/vfQsB37.png)
