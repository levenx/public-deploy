export declare const DndKit: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"dnd", {
    _isOver?: boolean;
    draggingId?: string[] | string | null;
    dropTarget?: {
        id: string | null;
        line: import("@platejs/dnd").DropLineDirection;
    };
    enableScroller?: boolean;
    isDragging?: boolean;
    multiplePreviewRef?: React.RefObject<HTMLDivElement | null> | null;
    scrollerProps?: Partial<import("@platejs/dnd").ScrollerProps>;
    onDropFiles?: (props: {
        id: string;
        dragItem: import("@platejs/dnd").FileDragItemNode;
        editor: import("platejs/react").PlateEditor;
        monitor: import("react-dnd").DropTargetMonitor<import("@platejs/dnd").DragItemNode, unknown>;
        nodeRef: any;
        target?: import("platejs").Path;
    }) => void;
}, {}, {}, {}>>[];
