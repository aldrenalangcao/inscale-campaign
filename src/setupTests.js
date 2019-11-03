import { configure } from 'enzyme';
import moment from 'moment';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

moment.now = () => new Date('10/29/2019')
