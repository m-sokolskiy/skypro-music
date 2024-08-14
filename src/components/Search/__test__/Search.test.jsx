import { screen, render, fireEvent } from '@testing-library/react';
import Search from '../Search';
import "@testing-library/jest-dom";

describe("render <Search />", () => {
    it("should render the search input", () => {
        render(<Search/>);
        const search = screen.getByPlaceholderText("Поиск")
        expect(search).toBeInTheDocument();
    });
});