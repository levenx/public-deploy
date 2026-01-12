import { type UseChatHelpers } from '@ai-sdk/react';
import { type UIMessage } from 'ai';
export type ToolName = 'comment' | 'edit' | 'generate';
export type TComment = {
    comment: {
        blockId: string;
        comment: string;
        content: string;
    } | null;
    status: 'finished' | 'streaming';
};
export type MessageDataPart = {
    toolName: ToolName;
    comment?: TComment;
};
export type Chat = UseChatHelpers<ChatMessage>;
export type ChatMessage = UIMessage<{}, MessageDataPart>;
export declare const useChat: () => {
    _abortFakeStream: () => void;
    id: string;
    setMessages: (messages: ChatMessage[] | ((messages: ChatMessage[]) => ChatMessage[])) => void;
    error: Error | undefined;
    status: import("ai").ChatStatus;
    stop: () => Promise<void>;
    sendMessage: (message?: (Omit<ChatMessage, "id" | "role"> & {
        id?: string | undefined;
        role?: "user" | "system" | "assistant" | undefined;
    } & {
        text?: never;
        files?: never;
        messageId?: string;
    }) | {
        text: string;
        files?: FileList | import("ai").FileUIPart[];
        metadata?: {} | undefined;
        parts?: never;
        messageId?: string;
    } | {
        files: FileList | import("ai").FileUIPart[];
        metadata?: {} | undefined;
        parts?: never;
        messageId?: string;
    } | undefined, options?: import("ai").ChatRequestOptions) => Promise<void>;
    regenerate: ({ messageId, ...options }?: {
        messageId?: string;
    } & import("ai").ChatRequestOptions) => Promise<void>;
    resumeStream: (options?: import("ai").ChatRequestOptions) => Promise<void>;
    addToolResult: <TOOL extends string>({ tool, toolCallId, output, }: {
        tool: TOOL;
        toolCallId: string;
        output: unknown;
    }) => Promise<void>;
    messages: ChatMessage[];
    clearError: () => void;
};
