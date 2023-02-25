import App from "../Page/PinInput/App";
import PinInput from "../Page/PinInput/PinInput";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LENGTH_OF_PIN } from "../constant";

describe("Pin Input", () => {
    it("Should have title", () => {
        render(<App />);
        expect(screen.getByText(/PIN INPUT DEMO/i)).toBeInTheDocument();
    });

    it("Default value is empty", () => {
        const app = render(<App />);
        const pins = app.container.querySelector(".pin-input");
        expect(pins?.textContent).toEqual("");
    });

    it("The inputs should be equal to the length specified", () => {
        const app = render(<App />);
        const pins = app.container.querySelectorAll(".pin-input");
        expect(pins?.length).toEqual(LENGTH_OF_PIN);
    });
    it("The inputs should not allow special characters", () => {
        const initialValue = "^%#$@";
        const pinInput = render(
            <PinInput
                value={initialValue}
                valueLength={LENGTH_OF_PIN}
                secretMode={false}
                onChange={() => console.log("on Change")}
            />
        );
        expect(
            pinInput.container.querySelectorAll(".pin-input")?.textContent
        ).toEqual();
    });
});
