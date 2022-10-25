import Modal from 'react-bootstrap/Modal';
import Button from '../Button/Button';
import { GearFill, X } from 'react-bootstrap-icons';
import Select from 'react-select';

import { useState } from 'react';
import './settings.css';

/**
 * A component that renders and manages the settings, through a series of
 * `Setting` components.
 */
export default function Settings({ settings }) {

    // Wheter the settings are shown or not
    const [show, setShow] = useState(false);

    // Allow to change a single setting
    function changeSetting(name, value) {
        const newSettings = { ...settings };
        newSettings[name].value = value;

        // Emit an event to the controller
        window.dispatchEvent(new CustomEvent('changeSettings', { detail: newSettings }));
    }

    return (
        <>
            <Button onClick={() => setShow(true)}><GearFill /></Button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {Object.keys(settings).map(setting => {
                    
                    // firtTime and verson should not be shown
                    if (setting === 'firstTime' || setting === 'version') return null;

                    const options = settings[setting].options.map(option => {
                        return { value: option, label: option };
                    });
                    const value = { value: settings[setting].value, label: settings[setting].value };
                    return (
                        <div key={`${setting}-h`}>
                            <h5>{settings[setting].name}</h5>
                            <Select
                                name={setting}
                                value={value}
                                options={options}
                                onChange={(e) => changeSetting(setting, e.value)}
                                className={`setting`}
                            />
                        </div>
                    )
                })}
                </Modal.Body>
            </Modal>
        </>
    );
}