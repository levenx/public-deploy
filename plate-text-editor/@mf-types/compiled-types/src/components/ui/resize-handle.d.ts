import { Resizable as ResizablePrimitive, type ResizeHandle as ResizeHandlePrimitive } from '@platejs/resizable';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';
export declare const mediaResizeHandleVariants: (props?: ({
    direction?: "left" | "right" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare const resizeHandleVariants: (props?: ({
    direction?: "bottom" | "left" | "right" | "top" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function ResizeHandle({ className, options, ...props }: React.ComponentProps<typeof ResizeHandlePrimitive> & VariantProps<typeof resizeHandleVariants>): import("react/jsx-runtime").JSX.Element | null;
declare const resizableVariants: (props?: ({
    align?: "left" | "right" | "center" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function Resizable({ align, className, ...props }: React.ComponentProps<typeof ResizablePrimitive> & VariantProps<typeof resizableVariants>): import("react/jsx-runtime").JSX.Element;
export {};
