import {render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../App'

describe('Integration test for App', ()=> {
    test('Renders App', ()=> {
    	const tree = renderer
    		.create(
					<MemoryRouter>
						<App/>
					</MemoryRouter>
					)
    		.toJSON();
			expect(tree).toMatchSnapshot()
    })
})