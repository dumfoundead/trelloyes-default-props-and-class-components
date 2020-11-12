import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { List } from './List';

// test suite
describe('List component tests', () => {
    // can also test with an empty array:
    // const myCards = [];

    const myCards = [
        { id: 'a', title: 'First card', content: 'lorem ipsum' },
        { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        { id: 'c', title: 'Third card', content: 'lorem ipsum' }
    ];

    // smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cards={myCards} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // snapshot test
    // add a test to perform a snapshot test on the List component with the header prop set to myHeader and the cards set to a new array
    // List component expects a prop named cards (this.props.cards) which is an array of objects with the keys id, title, and content
    it('renders the UI as expected with cards array', () => {
        const tree = renderer
            .create(
                <section className="List">
                    <header className="List-header">
                        <h2>header={'myHeader'}</h2>
                    </header>
                    <div className="List-cards">
                        <List cards={myCards} />
                        <button type="button" className="List-add-button">
                            + Add Random Card
                        </button>
                    </div>
                </section>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});