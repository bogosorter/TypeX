# TypeX

A website to help you type faster. In short time, you will also be able to download the TypeX app.

## Structure

The TypeX website is a wrapper for the TypeXCore component. TypeXCore is shared between the website and the app, and therefore is in a different [repository](https://github.com/m7kra/TypeXCore). Both TypeXCore and TypeX are written in React.

### Controller

The settings are manage by the `Controller`. Its two goals are to:

- Store user settings in the browser.
- Get user settings and passing them to the `TypeXCore` component.

#### Methods

##### `constructor(setSettings)`

`setSettings` is a function that takes a settings object and updates the `Settings` component accordingly.

##### `getSettings()`

Returns the current settings.

##### `changeSettings(settings)`

Stores the new settings in the browser and modifies the app.

##### `implementSettings(settings)`

Updates the app to match the settings.

#### Events

A single event will be emitted within the app, `changeSettings`, which should be listened for within the app.

#### Settings

The settings are stored in the browser using `localStorage`, as a JSON object. They have the following structure:

```json
{
    "theme": {
        "name": "Theme",
        "type": "select",
        "options": ["light", "dark"],
        "value": "dark"
    },
    "language": {
        "name": "Language",
        "type": "select",
        "options": ["en", "fr", ...],
        "value": "en"
    },
    "version": "0.1.0"
}
```

Version should not be displayed, and the controller will add a property `firstTime`.

### Components

#### `<TypeXCore />`

The main component of the app. Its source code can be found in the [TypeXCore repository](https://github.com/m7kra/TypeXCore)

#### `<Settings settings={} />`

A component that renders and manages the settings, through a series of `Setting` components.

#### `<Button onClick={}>{children}</Button>`

A button component.

#### `<Header />`

The header of the website.

#### `<Banner />`

The banner of the website.