import { fireEvent, getByText, render, screen } from "@testing-library/react"
import Counter from "../Counter"

/**
 * Unit testing : testing a component in isolation
  * by testing that in all the possible scinearios
  * We are using react-testing-lib to emulate rendering of that component
 * */


describe("Counter component test cases", () => {

    test("snapshot for counter", () => {
        const { asFragment } = render(<Counter />);
        expect(asFragment()).toMatchSnapshot();
    })

    test("intial state check", () => {
        // Act
        render(<Counter />)

        // Arrange for assertion.
        const counterText = screen.getByText("Count 0");
        const plusText = screen.getByText("+");
        const minusText = screen.getByText("-");

        // assertions.
        expect(counterText).toBeInTheDocument();
        expect(plusText).toBeInTheDocument();
        expect(minusText).toBeInTheDocument();
    });

    test("Increment state check", () => {
        // Act
        render(<Counter />)

        // Arrange for assertion.
        const plusText = screen.getByText("+");

        // Emulate one + click.
        fireEvent.click(plusText);

        // Assertions.
        const isOnePresent = screen.getByText("Count 1");
        expect(isOnePresent).toBeInTheDocument();

        // Emulate second + click.
        fireEvent.click(plusText);

        // Assertions.
        const isTwoPresent = screen.getByText("Count 2");
        expect(isTwoPresent).toBeInTheDocument();
    });

    test("Decrement state check", () => {
        // Act
        render(<Counter />)

        // Arrange for assertion.
        const minusText = screen.getByText("-");

        // Emulate one + click.
        fireEvent.click(minusText);

        // Assertions.
        const isMinusOnePresent = screen.getByText("Count -1");
        expect(isMinusOnePresent).toBeInTheDocument();

        // Emulate second + click.
        fireEvent.click(minusText);

        // Assertions.
        const isMinusTwoPresent = screen.getByText("Count -2");
        expect(isMinusTwoPresent).toBeInTheDocument();
    });







})