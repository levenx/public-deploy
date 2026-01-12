export declare const BaseCalloutKit: import("platejs").SlatePlugin<import("platejs").PluginConfig<"callout", {}, {}, {
    insert: {
        callout: (args_0?: ({
            batchDirty?: boolean;
            hanging?: boolean;
            nextBlock?: boolean;
            removeEmpty?: import("platejs").QueryNodeOptions | boolean;
            select?: boolean;
        } & {
            id?: boolean | string;
            block?: boolean;
            empty?: boolean;
            match?: import("platejs").Predicate<import("platejs").NodeIn<import("platejs").Value>> | undefined;
            text?: boolean;
        } & import("platejs").QueryAt & import("platejs").QueryMode & import("platejs").QueryVoids & {
            icon?: string;
            variant?: (string & {}) | import("platejs").TCalloutElement["variant"];
        }) | undefined) => void;
    };
}, {}>>[];
