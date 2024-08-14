import { screen, render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Logo from './Logo';

describe("render <Logo />", () => {
    it("should render img with alt text", () => {
        render(<Logo/>);
        const img = screen.getByAltText('logo')
        expect(img).toBeInTheDocument();
    });
});