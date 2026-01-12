import emojiMartData from '@emoji-mart/data';
export declare const EmojiKit: (import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"emoji", {
    data?: emojiMartData.EmojiMartData;
    createEmojiNode?: (emoji: emojiMartData.Emoji) => import("platejs").Descendant;
} & import("@platejs/combobox").TriggerComboboxPluginOptions, {}, {}, {}>> | import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"emoji_input", {}, {}, {}, {}>>)[];
