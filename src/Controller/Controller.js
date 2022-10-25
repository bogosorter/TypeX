import packageInfo from '../../package.json';
import languages from '../resources/languages.js';

/**
 * Class that controls the app. Its three main purposes are the following:
 * 
 * - Storing user settings in the browser.
 * - Getting user settings and passing them to the `TypeXCore` component.
 * - Getting the word lists and passing them to the `TypeXCore` component.
 */
export default class Controller {
    /**
     * `setSettings` is a function that takes a settings object and updates the
     * `Settings` component accordingly.
     */
    constructor(setSettings) {
        this.setSettings = setSettings;

        const settings = this.getSettings();
        this.implementSettings(settings);

        // Listen for events from the `Settings` component
        window.addEventListener('changeSettings', event => {
            this.changeSettings(event.detail);
        });
    }

    /**
     * Returns the current settings.
     */
    getSettings() {
        // Settings are stored in localStorage
        const settings = localStorage.getItem('settings');
        if (settings) return JSON.parse(settings);
        else {
            // Store first time as false
            this.changeSettings(defaultSettings);
            return defaultSettings
        };
    }

    /**
     * Stores the new settings in the browser and modifies the app.
     */
    changeSettings(settings) {
        // firstTime is always stored as false
        settings.firstTime = false;
        localStorage.setItem('settings', JSON.stringify(settings));
        this.implementSettings(settings);
    }

    /**
     * Updates the app to match the settings.
     */
    implementSettings(settings) {
        this.setSettings(settings);
    }
}

const defaultSettings =  {
    theme: {
        name: 'Theme',
        value: 'light',
        options: ['light', 'dark']
    },
    language: {
        name: 'Language',
        value: 'english',
        options: languages
    },
    version: packageInfo.version,
    firstTime: false
};