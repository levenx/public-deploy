export declare const formatRatioOptions: {
    label: string;
    value: number;
}[];
interface FormatRatioSelectorProps {
    value: number;
    onChange: (value: number) => void;
    includeAllOption?: boolean;
}
export declare function FormatRatioSelector({ value, onChange, includeAllOption, }: FormatRatioSelectorProps): import("react/jsx-runtime").JSX.Element;
export {};
