/**
 * CloudStorage - 3 implementations
 *
 * 1. Array of Tuples
 * 2. Array of Objects
 * 3. Plain Object (Dictionary)
 */

// 1. Array of Tuples
// Each file is a tuple: [fileName, fileSize]
// Pros: Simple, but not scalable for more metadata
// Cons: Harder to extend, less readable
export class CloudStorageTuples {
  storage: [string, number][];

  constructor() {
    this.storage = [];
  }

  addFile(name: string, size: number): boolean {
    // Check if file exists by name
    const exists = this.storage.some(([fileName]) => fileName === name);
    if (exists) return false;
    this.storage.push([name, size]);
    return true;
  }

  getFileSize(name: string): number | null {
    const file = this.storage.find(([fileName]) => fileName === name);
    return file ? file[1] : null;
  }

  deleteFile(name: string): number | null {
    const index = this.storage.findIndex(([fileName]) => fileName === name);
    if (index !== -1) {
      const [, fileSize] = this.storage[index];
      this.storage.splice(index, 1);
      return fileSize;
    }
    return null;
  }
}

// 2. Array of Objects
// Each file is an object: { fileName, fileSize, ... }
// Pros: Scalable, easy to add more metadata, readable
// Cons: Slightly slower lookup than plain object
export class CloudStorageObjects {
  storage: { fileName: string; fileSize: number; /* more fields */ }[];

  constructor() {
    this.storage = [];
  }

  addFile(name: string, size: number): boolean {
    const exists = this.storage.some(file => file.fileName === name);
    if (exists) return false;
    this.storage.push({ fileName: name, fileSize: size });
    return true;
  }

  getFileSize(name: string): number | null {
    const file = this.storage.find(file => file.fileName === name);
    return file ? file.fileSize : null;
  }

  deleteFile(name: string): number | null {
    const index = this.storage.findIndex(file => file.fileName === name);
    if (index !== -1) {
      const { fileSize } = this.storage[index];
      this.storage.splice(index, 1);
      return fileSize;
    }
    return null;
  }
}

// 3. Plain Object (Dictionary)
// Each file is a property: storage[fileName] = { fileName, fileSize, ... }
// Pros: Fastest lookup by name, easy to add metadata
// Cons: No ordering, can't store duplicate names
export class CloudStorageDict {
  storage: { [fileName: string]: { fileName: string; fileSize: number; /* more fields */ } };

  constructor() {
    this.storage = {};
  }

  addFile(name: string, size: number): boolean {
    if (name in this.storage) return false;
    this.storage[name] = { fileName: name, fileSize: size };
    return true;
  }

  getFileSize(name: string): number | null {
    return name in this.storage ? this.storage[name].fileSize : null;
  }

  deleteFile(name: string): number | null {
    if (name in this.storage) {
      const size = this.storage[name].fileSize;
      delete this.storage[name];
      return size;
    }
    return null;
  }
}
