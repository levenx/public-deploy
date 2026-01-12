export declare const MentionKit: (import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"mention", {
    insertSpaceAfterMention?: boolean;
} & import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {
    insert: {
        mention: (options: {
            search: string;
            value: any;
            key?: any;
        }) => void;
    };
}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"mention_input", {}, {}, {}, {}>>)[];
