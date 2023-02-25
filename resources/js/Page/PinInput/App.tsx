import React from "react";
import { useState, useEffect } from "react";
import PinInput from "./PinInput";
import { LENGTH_OF_PIN } from "../../constant";

export default function App() {
    const [pin, setPin] = useState("");
    const [secretMode, setSecretMode] = useState(false);
    const onChange = (value: string) => {
        setPin(value);
    };
    const onReset = () => {
        setSecretMode(false);
        setPin("");
    };

    return (
        <div className="container">
            <h1 className="text-center">PIN INPUT DEMO</h1>
            <PinInput
                value={pin}
                valueLength={LENGTH_OF_PIN}
                secretMode={secretMode}
                onChange={onChange}
            />
            <div className="mt-10">
                <input
                    type="checkbox"
                    checked={secretMode}
                    onChange={() => setSecretMode(!secretMode)}
                />
                <label>Secret mode</label>
            </div>
            {pin.trim().length === LENGTH_OF_PIN && (
                <div className="mt-10">
                    <h2 className="result-title">Success! Your PIN is {pin}</h2>
                    <span className="reset" onClick={onReset}>
                        Reset
                    </span>
                </div>
            )}
        </div>
    );
}
