import type { TResolvedSuggestion } from '@platejs/suggestion';
import { type NodeEntry, type Path, type TElement, type TSuggestionText } from 'platejs';
import { type TDiscussion } from '@/components/editor/plugins/discussion-kit';
import { type TComment } from './comment';
export interface ResolvedSuggestion extends TResolvedSuggestion {
    comments: TComment[];
}
export declare function BlockSuggestionCard({ idx, isLast, suggestion, }: {
    idx: number;
    isLast: boolean;
    suggestion: ResolvedSuggestion;
}): import("react/jsx-runtime").JSX.Element;
export declare const useResolveSuggestion: (suggestionNodes: NodeEntry<TElement | TSuggestionText>[], blockPath: Path) => ResolvedSuggestion[];
export declare const isResolvedSuggestion: (suggestion: ResolvedSuggestion | TDiscussion) => suggestion is ResolvedSuggestion;
