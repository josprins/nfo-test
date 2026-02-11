# Normec Foodcare Online Frontend Test

## Note about AI tools

We are looking for thoughtful engineers who understand the pros and cons of AI, not prompt engineers.

Using AI to enhance your workflow is fine; using AI to generate the test solution is not.

## Installing and running the test code

This project contains a basic development setup using `vite` and `vue`. Feel free to add to it or adapt it as needed.

### Requirements

- [Node.js](https://nodejs.org/) (v20 or above)
- `yarn` (v4 or above; comes with Node.js by default but you might need to activate it)

If you have any issues with running the project, please contact us as soon as possible.

### Commands

To install, run `yarn`.

To run a local development environment, run `yarn dev`.

To build a version for production, run `yarn build`.

To serve the production build locally, run `yarn preview`.

## How to complete the test

Using [this Figma design](https://www.figma.com/design/Tb0gSlu3tpNX5crgb2mPvw/NFO-Frontend-test?node-id=0-1&t=OZG7tFiH4kV8YY7c-1),
build the component(s) needed to create a **reusable** tab switcher. The password for the Figma design is
`basil-guide-powder-aloha`.

Keep in mind the design supports a dark and light mode. Your component(s) should automatically use the user
defined preference.

Note that the design we've provided is not perfect. You can either improve any issues you find, or document them.

Ensure that you structure your work into multiple commits, so we can see the way you work.

#### Context

Please work under the following assumptions:

- Consider modern browsers only (latest 2 versions of Chrome, Firefox, and Safari)
- The project must be as performant and accessible (think [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)) as
  possible.
- The target audience will be using 3G connections and slower devices to view this page.
- If in doubt, try to keep your solution simple.
- Consider happy and unhappy user paths
- The solution should be production-ready - whatever that means to you
- We prefer a polished, but unfinished solution over a rushed, but complete one.
    - Feel free to document what you would have added with more time (thoughts.md).
    - If you think of possible improvements that you think are out of scope but might be interesting, feel free to
      document those too.

#### Requirements

##### Requirements for the component(s)

- Tabs can be activated/changed from outside the component
- Tabs could be aligned to the start or end of the flow
- Tab buttons have an icon, label and suffix
    - icon can be empty
    - suffix can be empty
    - suffix can be anything
- Tab buttons have states:
    - Default & Hover
    - Active & Hover
    - Disabled
        - A disabled Tab button cannot activate that tab
- Tabs hold content
    - Content can be anything (including other components, including other Tabs)
    - The content can change at any moment

##### Requirements for how you work

- Implement the design.
- Please make it fully responsive (360px is the minimum viewport width you need to support)
- Document or resolve any issues in the design.
- If you make design decisions yourself, keep usability best practices in mind.
- Use whatever technologies or tools you feel are necessary.
    - Note: We expect that this part of the test is completed in vanilla Javascript or Vue, without using
      external tools (i.e. VueUse, a UI framework, a css framework, etc). If you strongly feel you should use one, you
      can - but be prepared to make the case for it in your technical interview.

## How to submit your test

Either:

- Package the project as a `.zip` file
- Keep your `.git` folder in the file.
- Upload the packaged test to a cloud service and include a share link in the message of your submission.

Or:

Share a link to a public GitHub or GitLab repository with the results of your test.