import "../../index.css";
import type { IMaterialItem } from "@/services/material";
export interface MaterialUploaderProps {
    repo: string;
    open: boolean;
    onClose: (result?: IMaterialItem[]) => void;
    defaultImages?: Array<string | File>;
}
export default function MaterialUploader(props: MaterialUploaderProps): import("react/jsx-runtime").JSX.Element;
export declare const renderMaterialUploader: (repo: string) => void;
