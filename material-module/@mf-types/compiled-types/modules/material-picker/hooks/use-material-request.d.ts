interface UseMaterialRequestOptions {
    pn: number;
    ps: number;
    repo: string;
    keyword?: string;
    ratio?: string;
    status?: number;
}
export default function useMaterialRequest(options: UseMaterialRequestOptions): {
    dataSource: import("@/services/material").IMaterialItem[];
    hasNextPage: boolean;
    fetchNextPage: (...args: any[]) => void;
    reload: () => Promise<import("@tanstack/react-query").QueryObserverResult<import("@tanstack/react-query").InfiniteData<import("@/services/material").IMaterialItem[], unknown>, Error>>;
    total: number;
    isLoading: boolean;
};
export {};
