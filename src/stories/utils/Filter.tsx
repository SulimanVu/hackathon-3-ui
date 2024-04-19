import React, { useState } from 'react';

import { Flex, Input } from 'antd';

export interface FilterProps {
  placeholder?: string;
  children: (search: string) => React.ReactNode;
}

export const Filter: React.FC<FilterProps> = ({ placeholder = 'Find', children }) => {
  const [search, setSearch] = useState('');

  return (
    <Flex vertical>
      <Input placeholder={placeholder} onChange={(e) => setSearch(e.target.value)} value={search} />
      {children(search)}
    </Flex>
  );
};
