import React from 'react';
import ReactDOM from 'react-dom';

// add snapshot tests
// first cd to PROJECT folder and do:
// npm install react-test-render -D
import renderer from 'react-test-renderer';

// make card component available
import { Card } from './Card';

// test suite
describe('Card component tests', () => {
    // smoke test
    it('renders without crashing', () => {
        // first create a DOM element to render the component into
        const div = document.createElement('div');

        // render the component, this is the actual test, if something is wrong it will fail here
        ReactDOM.render(<Card />, div);

        // clean up code
        ReactDOM.unmountComponentAtNode(div);
    });

    // snapshot test
    /*
    1. Render the component and create a human readable JSON file
    2. Compare the rendered component to a saved version of the component
    */
    it('renders the UI as expected with title = myTitle and content = myContent', () => {
        const tree = renderer
            .create(
                <div name="Card">
                    <button type="button">delete</button>
                    <h3>title={'myTitle'}</h3>
                    <p>content={'myContent'}</p>
                </div>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});