import { QueryClient } from "@tanstack/react-query";
import { type IMaterialItem } from "@/services/material";
import "../../index.css";
export declare let queryClient: QueryClient;
export declare enum MaterialPickerFeature {
    Uploader = "uploader",
    Delete = "delete",
    Selector = "selector",
    Trash = "trash"
}
export declare enum MaterialPickerScene {
    Creator = "creator",
    Trash = "trash"
}
export interface MaterialPickerProps {
    repo: string;
    open: boolean;
    onClose: () => void;
    selectLimit?: number;
    onSelect?: (selectedFiles: Array<IMaterialItem>) => void;
    features: Array<MaterialPickerFeature>;
    scene?: MaterialPickerScene;
    source: string;
    defaultRatio?: string;
}
export declare function MaterialPicker(props: MaterialPickerProps): import("react/jsx-runtime").JSX.Element;
export default function (props: MaterialPickerProps): import("react/jsx-runtime").JSX.Element;
