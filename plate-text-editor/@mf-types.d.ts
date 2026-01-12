
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/markdown-editor';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/markdown-editor' ? typeof import('REMOTE_ALIAS_IDENTIFIER/markdown-editor') :any;