import type { VariantProps } from 'class-variance-authority';
import type { PlateContentProps, PlateViewProps } from 'platejs/react';
import type * as React from 'react';
declare const editorContainerVariants: (props?: ({
    variant?: "comment" | "select" | "default" | "demo" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function EditorContainer({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof editorContainerVariants>): import("react/jsx-runtime").JSX.Element;
declare const editorVariants: (props?: ({
    disabled?: boolean | null | undefined;
    focused?: boolean | null | undefined;
    variant?: "comment" | "select" | "default" | "none" | "ai" | "aiChat" | "demo" | "fullWidth" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type EditorProps = PlateContentProps & VariantProps<typeof editorVariants>;
export declare const Editor: {
    ({ className, disabled, focused, variant, ref, ...props }: EditorProps & {
        ref?: React.RefObject<HTMLDivElement | null>;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare function EditorView({ className, variant, ...props }: PlateViewProps & VariantProps<typeof editorVariants>): import("react/jsx-runtime").JSX.Element;
export declare namespace EditorView {
    var displayName: string;
}
export {};
