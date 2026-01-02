interface UseMaterialRequestOptions {
    pn: number;
    ps: number;
    repo: string;
    keyword?: string;
    ratio?: string;
    sorter?: string[];
    status?: number;
    enableRequest?: boolean;
}
export default function useMaterialRequest(options: UseMaterialRequestOptions): {
    dataSource: import("@/services/material").IMaterialItem[];
    hasNextPage: boolean;
    fetchNextPage: (args: import("@tanstack/react-query").FetchNextPageOptions | undefined) => void;
    reload: () => Promise<import("@tanstack/react-query").QueryObserverResult<import("@tanstack/react-query").InfiniteData<import("@/services/material").IMaterialItem[], unknown>, Error>>;
    total: number;
    isLoading: boolean;
};
export {};
