import { screen, render, fireEvent } from '@testing-library/react';
import Filter from './Filter';
import "@testing-library/jest-dom";

describe("<Filter />", () => {
    it("should show genre button", () => {
        render(<Filter />);
        const genreBlock = screen.getByTestId("genre-block")
        fireEvent.click(genreBlock);
        const button = screen.getByText("жанру")
        expect(button).toHaveStyle("color: #ad61ff");
    });
});