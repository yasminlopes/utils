import fs from 'fs';
import path from 'path';

console.log('🔥 server is running');

function loadFiles(directory: string) {
  fs.readdirSync(directory).forEach((file) => {
    const absolutePath = path.join(directory, file);

    if (fs.statSync(absolutePath).isDirectory()) {
      loadFiles(absolutePath);
    } else if (path.extname(file) === '.ts' && !file.endsWith('.test.ts')) {
      require(absolutePath);
    }
  });
}

loadFiles(__dirname);
