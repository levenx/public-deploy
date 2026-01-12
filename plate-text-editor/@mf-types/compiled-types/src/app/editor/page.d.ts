import type { Value } from "platejs";
import "../globals.css";
export interface MarkdownEditorProps {
    loadMarkdownData: () => Promise<string>;
    onChange?: (markdownText: string, value: Value) => void;
    className?: string;
}
export default function MarkdownEditor(props: MarkdownEditorProps): import("react/jsx-runtime").JSX.Element;
