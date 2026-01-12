import { type VariantProps } from 'class-variance-authority';
import type { SlateElementProps } from 'platejs/static';
import type * as React from 'react';
declare const headingVariants: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function HeadingElementStatic({ variant, ...props }: SlateElementProps & VariantProps<typeof headingVariants>): import("react/jsx-runtime").JSX.Element;
export declare function H1ElementStatic(props: SlateElementProps): import("react/jsx-runtime").JSX.Element;
export declare function H2ElementStatic(props: React.ComponentProps<typeof HeadingElementStatic>): import("react/jsx-runtime").JSX.Element;
export declare function H3ElementStatic(props: React.ComponentProps<typeof HeadingElementStatic>): import("react/jsx-runtime").JSX.Element;
export declare function H4ElementStatic(props: React.ComponentProps<typeof HeadingElementStatic>): import("react/jsx-runtime").JSX.Element;
export declare function H5ElementStatic(props: React.ComponentProps<typeof HeadingElementStatic>): import("react/jsx-runtime").JSX.Element;
export declare function H6ElementStatic(props: React.ComponentProps<typeof HeadingElementStatic>): import("react/jsx-runtime").JSX.Element;
export {};
