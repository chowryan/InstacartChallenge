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
2. Modularize components, SignupForm.js can be broken up into smaller components.
3. Make the form mobile friendly in vertical orienetation with CSS media queries.
4. Additional CSS styling for more consistency.

## Part 2:

Unable to finish writing the script but my SQL query was in the following format:

`SELECT count(workflow_state), date(created_at, "weekday 1", "-7 day"), workflow_state
FROM applicants
WHERE created_at >= start_date AND created_at <= end_date
GROUP BY date(created_at, "weekday 1", "-7 day"), workflow_state;`

I tested this query using "DB Browser for SQLite http://sqlitebrowser.org/".
