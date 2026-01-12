import type { VariantProps } from 'class-variance-authority';
import { type PlateStaticProps } from 'platejs/static';
export declare const editorVariants: (props?: ({
    disabled?: boolean | null | undefined;
    focused?: boolean | null | undefined;
    variant?: "select" | "default" | "none" | "ai" | "aiChat" | "demo" | "fullWidth" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function EditorStatic({ className, variant, ...props }: PlateStaticProps & VariantProps<typeof editorVariants>): import("react/jsx-runtime").JSX.Element;
