/**
 * 重命名一个 File 对象。
 * 由于 File 对象的 name 属性是只读的，此函数通过创建一个新的 File 对象来实现重命名。
 *
 * @param {File} originalFile - 需要重命名的原始文件对象。
 * @param {string} newName - 新的文件名。
 * @returns {File} 一个具有新名称的新 File 对象，其内容、类型和最后修改日期与原始文件相同。
 */
export declare function renameFile(originalFile: File, newName: string): File;
export declare function getMimeTypeByExtension(filename: string): string;
