Test Plan

**Overview.**
Test the functionality of wanted queries.

**Test Criteria:**

- User can submit valid data
- A warning is given upon incorrect input

- Agency identifier only accepts nine numbers
- Height only accepts three numbers

- Navigation, buttons, and basic functionality work

**Entry Criteria:**
- Has access to the git repository

**Exit Criteria:**
- All high priority tests have passed


Sanity Test

**Description:**
(Smoke test, high level test) to verify that a user can successfully navigate and operate around the site.

**Steps:**
1. Navigate throughout the website
2. Try pushing buttons
3. Put text in text fields

**Postconditions:**
- All pages should load properly
- Navigation bar is usable
- Buttons do things
- Can put text into text fields


User can submit fully valid data - High Level Test

This test will verify that a user can input correct data and have it verified for making an enter wanted query.

**Steps:**
1. Input valid data
2. Press submit button

**Postconditions:**
- Website should say, "Valid"


Warning for incorrect input - High Level Test

This test will verify that a user will be warned upon inputting incorrect data.

**Steps:**
1. Input any invalid data
2. Press submit button

**Postconditions:**
- Website should give a warning and explain which data was invalid.


Agency identifier field only accepts nine numbers - Low Level Test

This test will verify that a user will be warned and told that the agency identifier field needs nine valid numbers for input

**Steps:**
1. Input non-numeric data
2. Press submit button
3. Input numeric data longer/shorter than nine
4. Press submit button

**Postconditions:**
- The website should give a specific warning for the agency identifier field upon pushing the submit button.


Height only accepts three numbers - Low Level Test

This test will verify that a user will be warned and told that the height field needs three valid numbers for input.

**Steps:**
1. Input non-numeric data
2. Press submit button
3. Input numeric data longer/shorter than three
4. Press submit button

**Postconditions:**
- The website should give a specific warning for the height field upon pushing the submit button.