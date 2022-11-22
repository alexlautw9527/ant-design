import React from 'react';
import { Button, Input, Select } from 'antd';

const handleChange = (value: string | string[]) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <div
    style={{
      width: 500,
      position: 'relative',
      zIndex: 1,
      border: '1px solid red',
      background: '#FFF',
    }}
  >
    <Input style={{ width: 100 }} value="222" />
    <Select
      style={{ width: 120 }}
      onChange={handleChange}
      showSearch
      placeholder="233"
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'long',
          label: 'I am super super long!',
        },
      ]}
    />
    <Select
      mode="multiple"
      style={{ width: 120 }}
      defaultValue={['lucy']}
      onChange={handleChange}
      showSearch
      placeholder="233"
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'long',
          label: 'I am super super long!',
        },
      ]}
    />
    <span className="debug-align">AntDesign</span>
    <Button>222</Button>
  </div>
);

export default App;