# Simple Weather App
This is a basic implemetation of weather foreCast know as **Simple Weather App** which tell user about the entered cities Weather Fore Cast for 24 hours.
Every hours fore cost is shown to user from the time when user hit the search.

# Approach
**HTMl(inde.html)** contains one input field to enter city name and a submit button to fetch results from a weather api.
**CSS(main.css)** file contains all the css code which provides styling on the page.
**JavaScript(main.js)** file contains all the JavaScript code.
JS code includes :
  1. Validation for entered city name i.e it should not be blank and also does not contain any special characters (uses **Regular Expression**).
  2. Snippet for fore cast is added dynamically in the results section.
  3. Fore Cast is fetched from external weather api by **Visual Crossing**.
  4. For successful fetch response we get results. If city name is wrong then error message is displayed.
  5. Error messages are shown to user if validation for city name fails or city name is wrong.