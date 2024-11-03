import type { PortalProps } from '@/lib/types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, parent, className = '' }: Readonly<PortalProps>) => {
  useEffect(() => {
    if (parent) {
      parent.classList.add('overflow-hidden');
    }
    return () => {
      if (parent) {
        parent.classList.remove('overflow-hidden');
      }
    };
  }, [parent]);

  return createPortal(<div className={className}>{children}</div>, parent);
};

Portal.displayName = 'Portal';

export { Portal };
