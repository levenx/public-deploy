
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/material-picker';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/material-picker' ? typeof import('REMOTE_ALIAS_IDENTIFIER/material-picker') :any;