import "../../index.css";
interface MaterialUploaderProps {
    repo: string;
    open: boolean;
    onClose: () => void;
    defaultImages?: string[];
}
export default function MaterialUploader(props: MaterialUploaderProps): import("react/jsx-runtime").JSX.Element;
export declare const renderMaterialUploader: (repo: string) => void;
export {};
