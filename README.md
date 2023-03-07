# Simple React Native App

## Introduction

This is an assignment I've completed. It contains 3 pages:

- home,
  - a screen with a list of numbers. If the number is divisible by 5, it prints beep, if 10, it prints boop, if 100, it prints beep boop.
  - a button to scroll to the bottom of the list, or top of the list.
- display
  - a screen that displays users and contacts saved in async storage.
- capture
  - a screen that allows users or contacts to be added to async storage.
  - does simple validation on the input fields.

## Running the app

Do the following to run the app:

```bash
yarn install
npx react-native start
```

Then, in a new terminal window, run:

```bash
npx react-native run-ios
```

(I have done most my dev on iOS)

## Notes

- I have used react-native-navigation for navigation. I included a bottom tab navigator, and a stack navigator for the home screen.
- I tried to structure my code in a way that is easy to understand and maintain, even if it were to grow in size.
- If it were to grow in size, I would probably have different journeys in their own routes.
- I do know that my UI is a bit basic, but I wanted to focus on the functionality.
- I'm not sure if it was intended that the contact list is related to the user list, but by the way it is documented, in the assignment, it wasn't possible to relate them (There wasn't a userID or some foreign key). So I just made it so that the contact list is a list of contacts, and the user list is a list of users. I don't believe it's best UX/UI however that's what was asked for. I'd personally have seperated the contact list and user list into different screens.
- I have included a demo video in the root of the project for convenience.

## Questions

Q: What is CORS?
A: CORS stands for Cross-Origin Resource Sharing. It is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. For example, a page at https://www.example.com can freely embed cross-origin images from https://www.example.com, but not from https://www.example.org. CORS also applies to XMLHttpRequest, Fetch, and other technologies that use HTTP. This is a security feature that prevents a malicious site from reading sensitive data from another site. I have worked with CORS issues before, there are multiple ways to get around it, such as disabling it in browser (If the issue is only within dev) or using a proxy server.

Q: What is difference between synchronise and asynchronous execution? Give an example of where asynchronous execution happens in an React application.
A: Synchronous execution means that the code is executed in the order it is written, meaning the synchronous call would block any code from running up until it is finished. Asynchronous, however, will not do this, and will allow other code to run while waiting for a response. This can potentially cause issues if you try to access a variable that has not been set yet, like in the example below:

```javascript
const response = asyncCall();
console.log(response); // This may not be set yet.
```

A typical example of an async execution in a react application is state calls. This is done asynchronously because we don't want to make the website slower to use, but if the dev is not careful, they may try to access a state variable that has not been set yet. This is a race condition, but there are ways to avoid it.

Q: Define REST?
A: Something I wish I got more of. Just kidding. REST is generally used to describe a set of principles that are used to design web APIs/services. REST stands for representational state transfer. It is a software architectural style that defines a set of constraints to be used for creating web services. REST is an approach to communications that is often used in the development of web services. REST-compliant web services, often called RESTful web services, provide interoperability between computer systems on the internet.

Q: When should you use Redux?
A: Redux is generally needed when you have a large amount of app state needed in many places in the app. State can always be passed around via props, however this can get messy. Redux is a state management library that can be used to manage state in a more organized way. It is also useful for debugging, as you can see the state of the app at any point in time. That being said, it is not always needed, and can be overkill for smaller apps or even larger apps that don't need it, and is not always the best solution.

## Thanks

Thanks for taking the time to review my assignment. I hope you like it. I'm looking forward to hearing from you.
