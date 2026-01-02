import type { IMaterialItem } from "@/services/material";
import { type Dispatch, type ReactNode, type SetStateAction } from "react";
interface ScrollListProps {
    dataSource: IMaterialItem[];
    checkedIds: number[];
    setCheckedIds: Dispatch<SetStateAction<number[]>>;
    selectLimit: number;
    onLoadMore: () => void;
    onReload?: () => void;
    isLoading: boolean;
    showCheckbox: boolean;
    filterValue?: Record<string, string | string[]>;
    onFilterChange?: (filterValue: Record<string, string | string[]>) => void;
    renderCustomTag?: (item: IMaterialItem) => ReactNode;
    enablePreview?: boolean;
    enableEdit?: boolean;
}
export default function ScrollList({ dataSource, checkedIds, setCheckedIds, selectLimit, onLoadMore, onReload, isLoading, showCheckbox, filterValue, onFilterChange, renderCustomTag, enablePreview, enableEdit, }: ScrollListProps): import("react/jsx-runtime").JSX.Element;
export {};
