# User update modal project

## Intro

An application that provides an interface for providing user updates through a modal form.

## Getting started

Please follow these steps:

1. install dependencies

```
yarn
```

2. run the development server

```
yarn dev
```

## More about the project

### Technologies used

- React
- TypeScript
- Emotion (CSS-in-JS)
- Vite
- axe DevTools (a11y testing)

### Folder structure

- `assets` - at the moment containing only necessary fonts
- `components` - UI components, including the main `UserUpdateModal` component
- `theme` - configuration and TypeScript definitions for the Emotion theme
- `utils` - TypeScript types, constants, and helper functions

### Additional comments

I really enjoyed working on this project. If I had more time to refine it, I’d love to focus on adding unit tests, improving the UI to match the designs better, reorganizing the components folder to include more generic components (e.g. Typography) and streamline consistency in styling. To improve the modal’s performance, I’d experiment with using uncontrolled inputs and the FormData API, which could help reduce the state management overhead. Additionally, there are some pesky build issues, mostly related to the Emotion setup, that need to be resolved. I’d take the time to clean those up to ensure everything runs smoothly.
