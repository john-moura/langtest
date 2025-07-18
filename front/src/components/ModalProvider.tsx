'use client';

import { ReactNode } from 'react';
import NiceModal from '@ebay/nice-modal-react';

export default function ModalProvider({ children }: { children: ReactNode }) {
  return <NiceModal.Provider>{children}</NiceModal.Provider>;
}
