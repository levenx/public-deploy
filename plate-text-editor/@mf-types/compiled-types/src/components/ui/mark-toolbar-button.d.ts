import type * as React from 'react';
import { ToolbarButton } from './toolbar';
export declare function MarkToolbarButton({ clear, nodeType, ...props }: React.ComponentProps<typeof ToolbarButton> & {
    nodeType: string;
    clear?: string[] | string;
}): import("react/jsx-runtime").JSX.Element;
