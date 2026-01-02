import React from "react";
import "./index.css";
import { FormatRatio } from "@/components/format-ratio-selector";
type ValueType = string | string[];
export interface MaterialFormInputProps {
    repo: string;
    value?: ValueType;
    onChange?: (value: ValueType) => void;
    limit?: number;
    noStyle?: boolean;
    style?: React.CSSProperties;
    className?: string;
    pickerType?: "drawer" | "modal";
    defaultRatio?: FormatRatio;
    drawerProps?: {
        className?: string;
        zIndex?: number;
    };
}
export default function MaterialFormInput(props: MaterialFormInputProps): import("react/jsx-runtime").JSX.Element;
export {};
