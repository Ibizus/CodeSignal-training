/**
 * Create a cloud storage class in memory:
 * 
 * Level 1: add, delete and getFileSize.
 *  Add: return true of false, does nothing if there is a file with the same name and return false.
 *  Delete: if found return the size of the deleted element, otherwise return null.
 *  getFileSize (by name): if found return size, otherwise return null. 
 * 
 * Level 2: get Bigest file.
 * 
 * Level 3: add users.
 */

export default class CloudStorage{
  
  storage: {
    fileName: string;
    fileSize: number;
    // Add more properties as needed
  }[];
  
  constructor() {
    this.storage = [];
  }

  // TODO: implement interface methods here
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
