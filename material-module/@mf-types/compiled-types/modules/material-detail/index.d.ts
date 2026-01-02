import "./index.css";
interface MaterialDetailProps {
    open: boolean;
    onClose: () => void;
    onReload?: () => void;
    editItemId: number;
}
export default function MaterialDetail(props: MaterialDetailProps): import("react/jsx-runtime").JSX.Element;
export {};
