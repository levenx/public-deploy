export type ImageProps = {
    src: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    backgroundColor?: string;
    enablePreview?: boolean;
    closeable?: boolean;
    onClose?: () => void;
};
export declare function Image({ src, alt, width, height, className, backgroundColor, enablePreview, closeable, onClose, }: ImageProps): import("react/jsx-runtime").JSX.Element;
