const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const filesToUpdate = [
  path.join(__dirname, 'config', 'data.ts'),
  path.join(__dirname, 'app', 'eco', 'page.tsx')
];

let fileMapping = [];

function walkAndRename(dir, category) {
  const items = fs.readdirSync(dir);
  let counter = 1;
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkAndRename(fullPath, item);
    } else if (item.startsWith('Copy-of-') || item.startsWith('WhatsApp-Image-')) {
      const ext = path.extname(item);
      const newName = category.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + counter.toString().padStart(2, '0') + ext;
      const newFullPath = path.join(dir, newName);
      
      const oldRelPath = fullPath.replace(publicDir, '').replace(/\\\\/g, '/');
      const newRelPath = newFullPath.replace(publicDir, '').replace(/\\\\/g, '/');
      
      fileMapping.push({ old: oldRelPath, new: newRelPath });
      
      fs.renameSync(fullPath, newFullPath);
      counter++;
    }
  }
}

walkAndRename(publicDir, 'general');

for (const filePath of filesToUpdate) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const mapping of fileMapping) {
      content = content.split(mapping.old).join(mapping.new);
    }
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log('Renamed files: ', fileMapping.length);
