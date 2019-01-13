export const testOptions = [
  { label: 'Test 1', value: 1 },
  { label: 'Test 2', value: 2 },
  { label: 'Test 3', value: 3 },
  { label: 'Test 4', value: 4 },
  { label: 'Test 5', value: 5 },
  { label: 'Test 6', value: 6 }
];

export const multiSelectChange = ele =>
  ele
    .find('.map-select-input')
    .at(0)
    .simulate('change', multiValue);

export const singleSelectChange = ele =>
  ele
    .find('.map-select-input')
    .at(0)
    .simulate('change', {
      label: 'First Name',
      value: 'firstName'
    });

export const addSelectValue = (ele, ...args) =>
  ele
    .find('.map-select-input')
    .at(0)
    .simulate('change', args);

export const activateCheckBox = parent =>
  parent
    .find('.ck-bx')
    .at(0)
    .props()
    .onChange();

export const clickCheckBox = parent =>
  parent
    .find('.ck-bx')
    .at(0)
    .props()
    .onClick();

export const activateMapSelectChange = (parent, className, value, label) =>
  parent
    .find(className)
    .at(0)
    .simulate('change', { label, value });

export const simulateUserSelect = (parent, className, value) =>
  parent
    .find(className)
    .at(0)
    .props();
// .simulate('change', { target: { value } });

export const multiValue = [
  { value: 'firstName', label: 'First Name' },
  { value: 'middleName', label: 'Middle Name' },
  { value: 'lastName', label: 'Last Name' }
];

export const singleValue = {
  value: 'firstName',
  label: 'First Name'
};

export const findInnerElement = (parent, className, index = 0) =>
  parent
    .find(className)
    .at(index)
    .props();
