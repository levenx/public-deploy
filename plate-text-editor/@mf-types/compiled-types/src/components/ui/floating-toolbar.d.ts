import { type FloatingToolbarState } from '@platejs/floating';
import type * as React from 'react';
import { Toolbar } from './toolbar';
export declare function FloatingToolbar({ children, className, state, ...props }: React.ComponentProps<typeof Toolbar> & {
    state?: FloatingToolbarState;
}): import("react/jsx-runtime").JSX.Element | null;
