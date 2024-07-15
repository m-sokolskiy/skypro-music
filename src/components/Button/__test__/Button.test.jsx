import { screen, render, fireEvent } from '@testing-library/react';
import Button from '../Button';

const dataTestId = "test-id";

describe("<Button />", () => {

    describe("Callbacks tests", () => { 
        it("should call `onClick` prop", () => { 
            const cb = jest.fn();
            render( <Button onClick={cb} dataTestId={dataTestId} /> );
            fireEvent.click(screen.getByTestId(dataTestId)); 
            expect(cb).toBeCalledTimes(1);
         });
    });

});