import React from 'react';
import Enzyme, { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import TextField from '@material-ui/core/TextField';
import Reminder from 'Components/reminder/Reminder';
import AddReminder from 'Components/add-reminder/AddReminder';

import App from './App';

configure({ adapter: new Adapter() })
describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<App dialogOpen={true}/>);
	});

	it('renders', () => {
		expect(wrapper).not.toBeNull();
	});

	it('Adds Reminder', () => {
		expect(wrapper).not.toBeNull();
    act( () => {
      const dateInput = wrapper.find(TextField).at(0).props();
      dateInput.onChange({ target: { name: dateInput.name, value: '2020-09-07'}, persist: jest.fn()});
    });
    wrapper.update();
    act( () => {
      const timeInput = wrapper.find(TextField).at(1).props();
      timeInput.onChange({ target: { name: timeInput.name, value: '00:50'}, persist: jest.fn()});
    });
    wrapper.update();
    act( () => {
      const cityInput = wrapper.find(TextField).at(2).props();
      cityInput.onChange({ target: { name: cityInput.name, value: 'TESSSSSt'}, persist: jest.fn()});
      wrapper.update();
    });
    act( () => {
      const textInput = wrapper.find(TextField).at(3).props();
      textInput.onChange({ target: { name: textInput.name, value: 'test'}, persist: jest.fn()});
    });
    wrapper.update();
    act( () => {
      wrapper.find('#add-reminder-button').simulate('click');
    });
    wrapper.update();

    expect(wrapper.find('#r-8-7').children().find(Reminder).text()).toEqual('test');
	});

});
