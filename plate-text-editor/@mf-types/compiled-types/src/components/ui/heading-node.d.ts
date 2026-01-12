import { type VariantProps } from 'class-variance-authority';
import type { PlateElementProps } from 'platejs/react';
declare const headingVariants: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function HeadingElement({ variant, ...props }: PlateElementProps & VariantProps<typeof headingVariants>): import("react/jsx-runtime").JSX.Element;
export declare function H1Element(props: PlateElementProps): import("react/jsx-runtime").JSX.Element;
export declare function H2Element(props: PlateElementProps): import("react/jsx-runtime").JSX.Element;
export declare function H3Element(props: PlateElementProps): import("react/jsx-runtime").JSX.Element;
export declare function H4Element(props: PlateElementProps): import("react/jsx-runtime").JSX.Element;
export declare function H5Element(props: PlateElementProps): import("react/jsx-runtime").JSX.Element;
export declare function H6Element(props: PlateElementProps): import("react/jsx-runtime").JSX.Element;
export {};
