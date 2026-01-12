export declare const ToggleKit: (import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"indent", {
    indentMax?: number;
    offset?: number;
    unit?: string;
}, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"toggle", {
    openIds?: Set<string>;
} & {
    toggleIndex?: ReturnType<(elements: import("platejs").Value) => Map<string, string[]>>;
}, {
    toggle: {
        toggleIds: (ids: string[], force?: boolean | null) => void;
    };
}, {}, {
    isOpen?: (toggleId: string) => boolean;
    someClosed?: (toggleIds: string[]) => boolean;
}>>)[];
