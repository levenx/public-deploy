import type { TTableCellElement, TTableElement } from 'platejs';
import type { SlateElementProps } from 'platejs/static';
export declare function TableElementStatic({ children, ...props }: SlateElementProps<TTableElement>): import("react/jsx-runtime").JSX.Element;
export declare function TableRowElementStatic(props: SlateElementProps): import("react/jsx-runtime").JSX.Element;
export declare function TableCellElementStatic({ isHeader, ...props }: SlateElementProps<TTableCellElement> & {
    isHeader?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export declare function TableCellHeaderElementStatic(props: SlateElementProps<TTableCellElement>): import("react/jsx-runtime").JSX.Element;
