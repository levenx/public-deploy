export declare const CursorOverlayKit: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"cursorOverlay", {
    cursors: Record<string, import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>>;
}, {
    cursorOverlay: {
        addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
        removeCursor: (id: (string & {}) | "drag" | "selection") => void;
    };
} & Record<"cursorOverlay", {
    addCursor: (id: string, cursor: Omit<import("@platejs/selection/react").CursorState<import("@platejs/selection/react").CursorData>, "id">) => void;
    removeCursor: (id: (string & {}) | "drag" | "selection") => void;
}>, {}, {}>>[];
