import { type TTableCellElement, type TTableElement, type TTableRowElement } from 'platejs';
import { type PlateElementProps } from 'platejs/react';
import * as React from 'react';
export declare const TableElement: React.ForwardRefExoticComponent<Omit<PlateElementProps<TTableElement>, "ref"> & React.RefAttributes<unknown>>;
export declare function TableRowElement({ children, ...props }: PlateElementProps<TTableRowElement>): import("react/jsx-runtime").JSX.Element;
export declare function TableCellElement({ isHeader, ...props }: PlateElementProps<TTableCellElement> & {
    isHeader?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export declare function TableCellHeaderElement(props: React.ComponentProps<typeof TableCellElement>): import("react/jsx-runtime").JSX.Element;
