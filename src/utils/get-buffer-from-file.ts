export const getBufferFromFile = (file: File): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => resolve(Buffer.from(reader.result as ArrayBuffer) as Buffer);
    reader.onerror = (error) => reject(error);
  });
};
