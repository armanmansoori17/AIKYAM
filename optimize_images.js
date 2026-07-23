const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(publicDir);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const filePath = path.join(publicDir, file);
        const stat = fs.statSync(filePath);
        
        // Optimize all PNGs and JPGs
        const basename = path.basename(file, ext);
        const webpPath = path.join(publicDir, `${basename}.webp`);
        
        console.log(`Processing: ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
        
        // Basic resize parameters - max width 1920 for backgrounds, 800 for cards, but we'll try to preserve aspect ratio
        let image = sharp(filePath);
        const metadata = await image.metadata();
        
        // If image is very wide, scale it down to max 1920
        if (metadata.width && metadata.width > 1920) {
          image = image.resize({ width: 1920, withoutEnlargement: true });
        }
        
        await image
          .webp({ quality: 80, effort: 6 }) // effort 6 gives better compression
          .toFile(webpPath);
          
        const newStat = fs.statSync(webpPath);
        console.log(` -> Created ${basename}.webp (${(newStat.size / 1024 / 1024).toFixed(2)} MB)`);
      }
    }
    console.log('Image optimization complete.');
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimizeImages();
