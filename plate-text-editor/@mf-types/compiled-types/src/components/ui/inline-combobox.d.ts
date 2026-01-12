import { ComboboxGroup, ComboboxGroupLabel, type ComboboxItemProps, ComboboxPopover } from '@ariakit/react';
import type { TElement } from 'platejs';
import * as React from 'react';
type FilterFn = (item: {
    value: string;
    group?: string;
    keywords?: string[];
    label?: string;
}, search: string) => boolean;
type InlineComboboxProps = {
    children: React.ReactNode;
    element: TElement;
    trigger: string;
    filter?: FilterFn | false;
    hideWhenNoValue?: boolean;
    showTrigger?: boolean;
    value?: string;
    setValue?: (value: string) => void;
};
declare const InlineCombobox: ({ children, element, filter, hideWhenNoValue, setValue: setValueProp, showTrigger, trigger, value: valueProp, }: InlineComboboxProps) => import("react/jsx-runtime").JSX.Element;
declare const InlineComboboxInput: {
    ({ className, ref: propRef, ...props }: React.HTMLAttributes<HTMLInputElement> & {
        ref?: React.RefObject<HTMLInputElement | null>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const InlineComboboxContent: typeof ComboboxPopover;
declare const InlineComboboxItem: ({ className, focusEditor, group, keywords, label, onClick, ...props }: {
    focusEditor?: boolean;
    group?: string;
    keywords?: string[];
    label?: string;
} & ComboboxItemProps & Required<Pick<ComboboxItemProps, "value">>) => import("react/jsx-runtime").JSX.Element | null;
declare const InlineComboboxEmpty: ({ children, className, }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element | null;
declare const InlineComboboxRow: (props: import("@ariakit/react").ComboboxRowProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
declare function InlineComboboxGroup({ className, ...props }: React.ComponentProps<typeof ComboboxGroup>): import("react/jsx-runtime").JSX.Element;
declare function InlineComboboxGroupLabel({ className, ...props }: React.ComponentProps<typeof ComboboxGroupLabel>): import("react/jsx-runtime").JSX.Element;
export { InlineCombobox, InlineComboboxContent, InlineComboboxEmpty, InlineComboboxGroup, InlineComboboxGroupLabel, InlineComboboxInput, InlineComboboxItem, InlineComboboxRow, };
