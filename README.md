# Large Dynamically Generated Forms

_Inside of /src you will find:_

-   DynamicForm
    -   Simple dynamic form implementation.
-   DynamicFormOrganized
    -   Organized each part into their own components to better see how the tree renders
    -   Converted `Components` to `PureComponents`.
-   DynamicFormOrganizedWithContext
    -   Added the use of Context to reduce the number of components that must re-render.
-   DynamicFormOrganizedWithContextHooks
    -   Migrated components to function components through the use of hooks.

_To run this demo simply:_

1. Clone the repo
2. At the base folder run `yarn install`
3. Run `yarn start`
4. Toggle which component you are loading in the `index.js`.
