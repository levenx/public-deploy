import type { IResponse, IPageResponse, AxiosProgressEvent } from "@portal/request";
interface IMaterialGroup {
    id: number;
    name: string;
    count?: number;
}
interface IMaterialItemParams {
    pn: number;
    ps: number;
    repo: string;
    keyword?: string;
    ratio?: string;
    sorter?: string[];
    groupId?: number;
    status?: number;
}
export interface IMaterialItem {
    id: number;
    prefix: string;
    fileKey: string;
    fileType: string;
    fileSha: string;
    fileSize: number;
    fileName: string;
    createdAt: string;
    updatedAt: string;
    groups: Array<unknown>;
    viewCount: number;
    format?: string;
    status?: number;
}
export interface IMaterialView {
    id: number;
    url: string;
    origin: string;
    ip: string;
    createdAt: string;
    item: IMaterialItem;
}
export declare const getMaterialGroup: (repo: string) => Promise<IResponse<IMaterialGroup[]>>;
export declare const getMaterialItem: (params: IMaterialItemParams) => Promise<IPageResponse<IMaterialItem[]>>;
export declare const getOnlyMaterialItem: (id: number) => Promise<IResponse<IMaterialItem>>;
export declare const uploadMaterial: (formData: FormData, options: {
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
}) => Promise<IResponse<IMaterialItem>>;
export declare const batchRestore: (ids: number[]) => Promise<IResponse<unknown>>;
export declare const deleteMaterial: (ids: number[], isHardDelete: boolean) => Promise<IResponse<unknown>>;
export declare const getMaterialViews: (id: number) => Promise<IResponse<IMaterialView[]>>;
export declare const updateMaterialItem: (params: {
    id: number;
    fileName?: string;
}) => Promise<IResponse<IMaterialItem>>;
export {};
