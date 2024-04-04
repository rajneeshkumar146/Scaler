// VDOM -> react-tesing-library
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

/**
 * Unit testing : testing a component in isolation
  * by testing that in all the possible scinearios
  * We are using react-testing-lib to emulate rendering of that component
 * */

describe("Counter component test cases", () => {

    test("snapshot for counter", () => {
        const {asFragment} = render(<Counter />);
        expect(asFragment()).toMatchSnapshot();
    })

    test("intial state check", () => {
        render(<Counter />);

        const countText = screen.getByText("Count: 0");
        const plusText = screen.getByText("+");
        const minusText = screen.getByText("-");

        //assertions.
        expect(countText).toBeInTheDocument();
        expect(plusText).toBeInTheDocument();
        expect(minusText).toBeInTheDocument();
    })

    test("increment state check", () => {
        render(<Counter />);
        const plusText = screen.getByText("+");

        // Emulate one + click.
        fireEvent.click(plusText);

        //Assertion.
        expect(screen.getByText("Count: 1")).toBeInTheDocument();

        // Emulate second + click.
        fireEvent.click(plusText);

        //Assertion.
        expect(screen.getByText("Count: 2")).toBeInTheDocument();

        // Emulate third + click.
        fireEvent.click(plusText);

        //Assertion.
        expect(screen.getByText("Count: 3")).toBeInTheDocument();
    })

    test("decrement state check", () => {
        render(<Counter />);
        const minusText = screen.getByText("-");

        // Emulate one - click.
        fireEvent.click(minusText);

        //Assertion.
        expect(screen.getByText("Count: -1")).toBeInTheDocument();

        // Emulate second - click.
        fireEvent.click(minusText);

        //Assertion.
        expect(screen.getByText("Count: -2")).toBeInTheDocument();

        // Emulate third - click.
        fireEvent.click(minusText);

        //Assertion.
        expect(screen.getByText("Count: -3")).toBeInTheDocument();
    })
})