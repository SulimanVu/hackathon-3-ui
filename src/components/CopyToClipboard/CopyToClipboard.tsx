import React, { useEffect } from 'react';
import { useCopyToClipboard } from 'react-use';

import { Tooltip, message } from 'antd';

import { Button } from '../Button';

import { Icon } from '@/components';

export interface CopyToClipboardProps {
  tooltipTitle: string;
  tooltipSuccessTitle: string;
  textToCopy: string;
  textErrorCopy: string;
}

export const CopyToClipboard = ({
  textToCopy,
  textErrorCopy,
  tooltipTitle,
  tooltipSuccessTitle,
}: CopyToClipboardProps) => {
  const [state, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    if (state.value) {
      message.success(tooltipSuccessTitle);
    } else if (state.error) {
      message.error(textErrorCopy);
    }
  }, [state, textErrorCopy, tooltipSuccessTitle]);

  return (
    <Tooltip title={state.value ? tooltipSuccessTitle : tooltipTitle}>
      <Button
        icon={<Icon as={'CopyLight'} size={24} />}
        type="text"
        onClick={() => copyToClipboard(textToCopy)}
      />
    </Tooltip>
  );
};
