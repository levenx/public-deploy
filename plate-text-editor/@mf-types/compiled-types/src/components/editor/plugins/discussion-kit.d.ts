import type { TComment } from '@/components/ui/comment';
export type TDiscussion = {
    id: string;
    comments: TComment[];
    createdAt: Date;
    isResolved: boolean;
    userId: string;
    documentContent?: string;
};
export declare const discussionPlugin: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"discussion", {
    currentUserId: string;
    discussions: TDiscussion[];
    users: Record<string, {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    }>;
}, {}, {}, {
    currentUser: () => {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    };
    user: (id: string) => {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    };
}>>;
export declare const DiscussionKit: import("platejs/react").PlatePlugin<import("platejs").PluginConfig<"discussion", {
    currentUserId: string;
    discussions: TDiscussion[];
    users: Record<string, {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    }>;
}, {}, {}, {
    currentUser: () => {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    };
    user: (id: string) => {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    };
}>>[];
