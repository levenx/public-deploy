import type { IMaterialItem } from "@/services/material";
import "./index.css";
import type { FormatRatio } from "@/components/format-ratio-selector";
interface MaterialModalProps {
    repo: string;
    defaultRatio: FormatRatio;
    open: boolean;
    onClose: () => void;
    onSelect?: (value: IMaterialItem[]) => void;
    selectLimit: number;
}
export declare function MaterialModal(props: MaterialModalProps): import("react/jsx-runtime").JSX.Element;
export default function (props: MaterialModalProps): import("react/jsx-runtime").JSX.Element;
export {};
