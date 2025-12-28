import React from "react";
import "./index.css";
export interface MaterialFormInputProps {
    repo: string;
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    limit?: number;
    noStyle?: boolean;
    style?: React.CSSProperties;
    className?: string;
}
export default function MaterialFormInput(props: MaterialFormInputProps): import("react/jsx-runtime").JSX.Element;
