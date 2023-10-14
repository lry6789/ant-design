import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const plainOptions = ['True', 'False', 'Unclear'];
const options = [
  { label: 'True', value: 'True' },
  { label: 'False', value: 'False' },
  { label: 'Unclear', value: 'Unclear' },
];
const optionsWithDisabled = [
  { label: 'True', value: 'True' },
  { label: 'False', value: 'False' },
  { label: 'Unclear', value: 'Unclear', disabled: true },
];

const App: React.FC = () => {
  const [value1, setValue1] = useState('True');
  const [value2, setValue2] = useState('True');
  const [value3, setValue3] = useState('True');
  const [value4, setValue4] = useState('True');

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio1 checked', value);
    setValue1(value);
  };

  const onChange2 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio2 checked', value);
    setValue2(value);
  };

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };

  return (
    <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
      <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
      <br />
      <br />
      <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
      <br />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};

export default App;
