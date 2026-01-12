import type { TPlaceholderElement } from "platejs";
import type { PlateElementProps } from "platejs/react";
import * as React from "react";
export declare const PlaceholderElement: React.ForwardRefExoticComponent<Omit<PlateElementProps<TPlaceholderElement>, "ref"> & React.RefAttributes<unknown>>;
export declare function ImageProgress({ className, file, imageRef, progress, }: {
    file: File;
    className?: string;
    imageRef?: React.RefObject<HTMLImageElement | null>;
    progress?: number;
}): import("react/jsx-runtime").JSX.Element | null;
