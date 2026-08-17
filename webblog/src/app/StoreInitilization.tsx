'use client';

import { type ReactNode, useState } from 'react';

import { useAppStore } from './hooks/hooks';
import { AppStore } from './store/rootReducer';

interface StoreInitializerProps {
  initialize: (store: AppStore) => void;
  children: ReactNode;
}

export function StoreInitializer({
  initialize,
  children,
}: StoreInitializerProps) {
  const store = useAppStore();

  useState(() => {
    initialize(store);
  });

  return <>{children}</>;
}
