import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pastas alvo para otimização
const publicDir = path.resolve(__dirname, '../public');
const pattern = `${publicDir.replace(/\\/g, '/')}/**/*.{jpg,jpeg,png}`;

console.log(`[Image Optimizer] Procurando imagens não otimizadas em ${publicDir}...`);

const files = globSync(pattern);

if (files.length === 0) {
  console.log('[Image Optimizer] Nenhuma imagem JPG ou PNG encontrada para otimizar.');
  process.exit(0);
}

console.log(`[Image Optimizer] ${files.length} imagens encontradas. Iniciando conversão...`);

async function optimizeImages() {
  for (const file of files) {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const dir = path.dirname(file);
    const targetPath = path.join(dir, `${basename}.webp`);
    
    // Pula se já existir uma versão webp equivalente (opcional)
    if (fs.existsSync(targetPath)) {
      console.log(`[Image Optimizer] Ignorado: ${basename}.webp já existe.`);
      continue;
    }

    try {
      await sharp(file)
        .webp({ quality: 80, effort: 6 })
        .toFile(targetPath);
      
      console.log(`[Image Optimizer] Otimizado: ${basename}${ext} -> ${basename}.webp`);
      
      // Opcional: deletar a original
      // fs.unlinkSync(file);
    } catch (err) {
      console.error(`[Image Optimizer] Erro ao otimizar ${file}:`, err);
    }
  }
  console.log('[Image Optimizer] Processo concluído.');
}

optimizeImages();
