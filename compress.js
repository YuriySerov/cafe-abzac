const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const compressFile = (filePath) => {
    const fileContents = fs.readFileSync(filePath);
    // Gzip 
    const gzip = zlib.gzipSync(fileContents);
    fs.writeFileSync(filePath + '.gz', gzip);
    // Brotli 
    const brotli = zlib.brotliCompressSync(fileContents);
    fs.writeFileSync(filePath + '.br', brotli);
};
const walk = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (/\.(js|css|html|svg)$/.test(fullPath)) {
            compressFile(fullPath);
            console.log(`Compressed: ${fullPath}`);
        }
    });
};
walk(path.join(__dirname, 'build'));
