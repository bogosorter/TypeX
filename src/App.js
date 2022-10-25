import TypeXCore from './Components/TypeXCore/TypeXCore';
import Settings from './Components/Settings/Settings';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';

import Controller from './Controller/Controller';
import { useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {

    const [settings, setSettings] = useState();

    const controller = useMemo(() => new Controller(setSettings), []);

    // Wait for the settings and words to be loaded
    if (!settings) return;

    return (
        <>
            <div id='app' className={settings.theme.value}>
                <Header theme={settings.theme.value} />
                <div id='container'>
                    <div className='spacer-100' />
                    <Banner />
                    <div className='spacer-100' />
                    <TypeXCore
                        settings={settings}
                        settingsButton={() => <Settings settings={settings} />}
                    />
                </div>
            </div>
        </>
    );
}