import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
export declare enum MaterialPickerFeature {
    Uploader = "uploader",
    Delete = "delete",
    Selector = "selector",
    Trash = "trash"
}
export declare function MediaToolbarButton({ nodeType, ...props }: DropdownMenuProps & {
    nodeType: string;
}): import("react/jsx-runtime").JSX.Element;
