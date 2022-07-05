import React, { Dispatch, SetStateAction } from 'react';

export type FCWithChildren<T = {}> = React.FC<T & { children: React.ReactNode }>;

export type SetState<T = any> = Dispatch<SetStateAction<T>>;
