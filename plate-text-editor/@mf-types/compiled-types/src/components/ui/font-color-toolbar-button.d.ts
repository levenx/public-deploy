import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import React from 'react';
export declare function FontColorToolbarButton({ children, nodeType, tooltip, }: {
    nodeType: string;
    tooltip?: string;
} & DropdownMenuProps): import("react/jsx-runtime").JSX.Element;
type TColor = {
    isBrightColor: boolean;
    name: string;
    value: string;
};
export declare function ColorDropdownMenuItems({ className, color, colors, updateColor, ...props }: {
    colors: TColor[];
    updateColor: (color: string) => void;
    color?: string;
} & React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
export declare const DEFAULT_COLORS: {
    isBrightColor: boolean;
    name: string;
    value: string;
}[];
export {};
