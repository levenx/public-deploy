import React from "react";
import "./index.css";
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
}
export default function MaterialFormInput(props: MaterialFormInputProps): import("react/jsx-runtime").JSX.Element;
export {};
