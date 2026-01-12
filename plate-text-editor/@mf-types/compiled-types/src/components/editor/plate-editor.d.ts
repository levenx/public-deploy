import type { Value } from "platejs";
interface PlateEditorProps {
    loadMarkdownData: () => Promise<string>;
    onChange?: (markdownText: string, value: Value) => void;
}
export declare function PlateEditor(props: PlateEditorProps): import("react/jsx-runtime").JSX.Element;
export {};
