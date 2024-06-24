// src/types/fileSystem.d.ts
export {};

declare global {
  interface Window {
    showDirectoryPicker: () => Promise<FileSystemDirectoryHandle>;
  }

  interface FileSystemDirectoryHandle extends FileSystemHandle {
    kind: 'directory';
    name: string;
    values: () => AsyncIterable<FileSystemHandle>;
  }

  interface FileSystemFileHandle extends FileSystemHandle {
    kind: 'file';
    name: string;
    getFile: () => Promise<File>;
  }

  interface FileSystemHandle {
    kind: 'file' | 'directory';
    name: string;
  }
}
