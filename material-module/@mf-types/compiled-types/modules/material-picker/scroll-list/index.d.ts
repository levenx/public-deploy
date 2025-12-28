import type { IMaterialItem } from "@/services/material";
import { type Dispatch, type SetStateAction } from "react";
interface ScrollListProps {
    dataSource: IMaterialItem[];
    checkedIds: number[];
    setCheckedIds: Dispatch<SetStateAction<number[]>>;
    selectLimit: number;
    onLoadMore: () => void;
    isLoading: boolean;
    showCheckbox: boolean;
    filterValue?: Record<string, string>;
    onFilterChange?: (filterValue: Record<string, string>) => void;
}
export default function ScrollList({ dataSource, checkedIds, setCheckedIds, selectLimit, onLoadMore, isLoading, showCheckbox, filterValue, onFilterChange, }: ScrollListProps): import("react/jsx-runtime").JSX.Element;
export {};
