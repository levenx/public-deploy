export declare enum FormatRatio {
    Horizontal = 1.78,
    Square = 1,
    Vertical = 0.56,
    InsertRectangle = 1.2,
    LargeBanner = 3.2,
    SmallBanner = 6.4
}
export declare const formatRatioOptions: {
    label: string;
    value: FormatRatio;
}[];
interface FormatRatioSelectorProps {
    value: number;
    onChange: (value: number) => void;
    includeAllOption?: boolean;
}
export declare function FormatRatioSelector({ value, onChange, includeAllOption, }: FormatRatioSelectorProps): import("react/jsx-runtime").JSX.Element;
export {};
