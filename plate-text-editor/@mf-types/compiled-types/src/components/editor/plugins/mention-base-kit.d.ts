export declare const BaseMentionKit: import("platejs").SlatePlugin<import("platejs").PluginConfig<"mention", {
    insertSpaceAfterMention?: boolean;
} & import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {
    insert: {
        mention: (options: {
            search: string;
            value: any;
            key?: any;
        }) => void;
    };
}, {}>>[];
