# React App with CASL for Permissions

This is a simple React application that demonstrates the usage of CASL for managing permissions.

## Project Structure

The project consists of the following files:

- `ability.js`: Defines the permissions using CASL's `AbilityBuilder`.
- `App.js`: Contains the main component of the application where CASL's `Can` component is used.

## How to Change Permissions in `ability.js`

To change permissions, update the `defineAbilityFor(user)` function in `ability.js`. This function takes a `user` object as an argument and defines permissions based on the user's attributes, such as `role` and `isAuthorised`.

Here's an example of how you can change permissions for different types of users:

```javascript
// Define abilities based on user attributes
export function defineAbilityFor(user) {
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

    can('read', 'all');
    can('create', 'profile');

    if (user.role === 'admin') {
        can('manage', 'all');
    }
    
    if (user.role === 'manager') {
        can('manage', 'article');
    }

    if (user.isAuthorised) {
        can('update', 'profile');
        can(['create', 'update'], 'article');
        cannot('create', 'profile');
    }

    return build();
};
```

## How to Use Abilities in `App.js` with `Can` Component

In `App.js`, you can use the `Can` component from `@casl/react` to conditionally render components based on the user's permissions. The `Can` component takes three props: `I`, `an`, and `ability`.

Here's an example of how you can use the `Can` component to render a button based on the user's ability to create an article:

```javascript
// App.js
import { Can } from "@casl/react";
import { defineAbilityFor } from "./ability";

function App() {
    const admin = { name: "mariglen", role: "admin" };
    const ability = defineAbilityFor(admin);

    return (
        <div className="App">
            <header className="App-header">
                <p>This is an example of CASL in react.</p>
            </header>
            <p>This is a button to create an article for an admin user.</p>
            <Can I="create" an="article" ability={ability}>
                <button>Create Article</button>
            </Can>
        </div>
    );
}

export default App;
```

## Getting Started

To run the application, clone the repository and install the dependencies:

```bash
git clone https://github.com/mariglenc/react-casle-scratch
cd react-casle-scratch
npm install
```

Then, start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
