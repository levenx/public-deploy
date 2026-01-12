export declare const BaseToggleKit: import("platejs").SlatePlugin<import("platejs").PluginConfig<"toggle", {
    openIds?: Set<string>;
}, {
    toggle: {
        toggleIds: (ids: string[], force?: boolean | null) => void;
    };
} & Record<"toggle", {
    toggleIds: (ids: string[], force?: boolean | null) => void;
}>, {}, {
    isOpen?: (toggleId: string) => boolean;
    someClosed?: (toggleIds: string[]) => boolean;
}>>[];
