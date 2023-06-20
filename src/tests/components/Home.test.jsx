import {render} from '@testing-library/react';
import Home from '../../pages/home/Home'

test('Página HOME deve ser renderizada', () => {
   const view = render(<Home />);
   expect(view).toMatchSnapshot();
})