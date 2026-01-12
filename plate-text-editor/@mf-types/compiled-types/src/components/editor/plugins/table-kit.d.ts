export declare const TableKit: (import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"table", {
    _cellIndices: Record<string, {
        col: number;
        row: number;
    }>;
    selectedCells: import("platejs").TElement[] | null;
    selectedTables: import("platejs").TElement[] | null;
    disableExpandOnInsert?: boolean;
    disableMarginLeft?: boolean;
    disableMerge?: boolean;
    enableUnsetSingleColSize?: boolean;
    initialTableWidth?: number;
    minColumnWidth?: number;
}, {
    create: {
        table: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { colCount, header, rowCount, ...cellOptions }?: import("@platejs/table").GetEmptyTableNodeOptions) => import("platejs").TTableElement>;
        tableCell: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { children, header, row }?: import("@platejs/table").CreateCellOptions) => {
            children: import("platejs").Descendant[];
            type: string;
        }>;
        tableRow: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { colCount, ...cellOptions }?: import("@platejs/table").GetEmptyRowNodeOptions) => {
            children: {
                children: import("platejs").Descendant[];
                type: string;
            }[];
            type: string;
        }>;
    };
    table: {
        getCellBorders: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { cellIndices, defaultBorder, element }: {
            element: import("platejs").TTableCellElement;
            cellIndices?: import("@platejs/table").CellIndices;
            defaultBorder?: import("platejs").TTableCellBorder;
        }) => import("@platejs/table").BorderStylesDefault>;
        getCellSize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { cellIndices, colSizes, element, rowSize }: {
            element: import("platejs").TTableCellElement;
            cellIndices?: import("@platejs/table").CellIndices;
            colSizes?: number[];
            rowSize?: number;
        }) => {
            minHeight: number | undefined;
            width: number;
        }>;
        getColSpan: (cellElem: import("platejs").TTableCellElement) => number;
        getRowSpan: (cellElem: import("platejs").TTableCellElement) => number;
        getCellChildren: (cell: import("platejs").TTableCellElement) => import("platejs").Descendant[];
    };
} & {
    create: {
        table: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { colCount, header, rowCount, ...cellOptions }?: import("@platejs/table").GetEmptyTableNodeOptions) => import("platejs").TTableElement>;
        tableCell: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { children, header, row }?: import("@platejs/table").CreateCellOptions) => {
            children: import("platejs").Descendant[];
            type: string;
        }>;
        tableRow: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { colCount, ...cellOptions }?: import("@platejs/table").GetEmptyRowNodeOptions) => {
            children: {
                children: import("platejs").Descendant[];
                type: string;
            }[];
            type: string;
        }>;
    };
    table: {
        getCellBorders: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { cellIndices, defaultBorder, element }: {
            element: import("platejs").TTableCellElement;
            cellIndices?: import("@platejs/table").CellIndices;
            defaultBorder?: import("platejs").TTableCellBorder;
        }) => import("@platejs/table").BorderStylesDefault>;
        getCellSize: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { cellIndices, colSizes, element, rowSize }: {
            element: import("platejs").TTableCellElement;
            cellIndices?: import("@platejs/table").CellIndices;
            colSizes?: number[];
            rowSize?: number;
        }) => {
            minHeight: number | undefined;
            width: number;
        }>;
        getColSpan: (cellElem: import("platejs").TTableCellElement) => number;
        getRowSpan: (cellElem: import("platejs").TTableCellElement) => number;
        getCellChildren: (cell: import("platejs").TTableCellElement) => import("platejs").Descendant[];
    };
}, {
    insert: {
        table: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { colCount, header, rowCount }?: import("@platejs/table").GetEmptyTableNodeOptions, { select: shouldSelect, ...options }?: import("platejs").InsertNodesOptions) => void>;
        tableColumn: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, options?: {
            at?: import("platejs").Path;
            before?: boolean;
            fromCell?: import("platejs").Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
        tableRow: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, options?: {
            at?: import("platejs").Path;
            before?: boolean;
            fromRow?: import("platejs").Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
    };
    remove: {
        table: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
        tableColumn: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
        tableRow: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
    };
    table: {
        merge: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
        split: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
    };
} & {
    insert: {
        table: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, { colCount, header, rowCount }?: import("@platejs/table").GetEmptyTableNodeOptions, { select: shouldSelect, ...options }?: import("platejs").InsertNodesOptions) => void>;
        tableColumn: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, options?: {
            at?: import("platejs").Path;
            before?: boolean;
            fromCell?: import("platejs").Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
        tableRow: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor, options?: {
            at?: import("platejs").Path;
            before?: boolean;
            fromRow?: import("platejs").Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
    };
    remove: {
        table: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
        tableColumn: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
        tableRow: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
    };
    table: {
        merge: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
        split: import("platejs").OmitFirst<(editor: import("platejs").SlateEditor) => void>;
    };
}, {
    cellIndices?: (id: string) => import("@platejs/table").CellIndices;
}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"tr", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"td", {}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"th", {}, {}, {}, {}>>)[];
