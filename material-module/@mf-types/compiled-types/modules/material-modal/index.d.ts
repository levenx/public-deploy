import type { IMaterialItem } from "@/services/material";
import "./index.css";
interface MaterialModalProps {
    repo: string;
    defaultRatio: number;
    open: boolean;
    onClose: () => void;
    onSelect?: (value: IMaterialItem[]) => void;
    selectLimit: number;
}
export declare function MaterialModal(props: MaterialModalProps): import("react/jsx-runtime").JSX.Element;
export default function (props: MaterialModalProps): import("react/jsx-runtime").JSX.Element;
export {};
