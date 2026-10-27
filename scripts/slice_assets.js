import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = './public/assets/images';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extract() {
  const imgPath = './public/assets/aistudio/______f92a0869.png';
  const meta = await sharp(imgPath).metadata();
  console.log('Original dimensions:', meta.width, meta.height);

  // Let's extract key slices:
  // 1. Hero banner: Y ~ 120 to 1180
  await sharp(imgPath)
    .extract({ left: 0, top: 120, width: 1920, height: 1060 })
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'hero_campaign.jpg'));
  console.log('Saved hero_campaign.jpg');

  // 2. New Drop section: Y ~ 1200 to 2250
  // Product 1: Teal Hoodie
  await sharp(imgPath)
    .extract({ left: 160, top: 1450, width: 360, height: 460 })
    .png()
    .toFile(path.join(outDir, 'drop_teal_hoodie.png'));

  // Product 2: Fur Coat
  await sharp(imgPath)
    .extract({ left: 580, top: 1450, width: 360, height: 460 })
    .png()
    .toFile(path.join(outDir, 'drop_fur_coat.png'));

  // Product 3: Boyfriend Shirt
  await sharp(imgPath)
    .extract({ left: 1000, top: 1450, width: 360, height: 460 })
    .png()
    .toFile(path.join(outDir, 'drop_boyfriend_shirt.png'));

  // Product 4: Chainmail Bag
  await sharp(imgPath)
    .extract({ left: 1400, top: 1450, width: 360, height: 460 })
    .png()
    .toFile(path.join(outDir, 'drop_chainmail_bag.png'));

  // 3. Full Release Banner: Y ~ 2150 to 2600
  await sharp(imgPath)
    .extract({ left: 80, top: 2200, width: 1760, height: 430 })
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'banner_full_release.jpg'));

  // 4. Style Edit Left Large Look: Y ~ 2900 to 4100
  await sharp(imgPath)
    .extract({ left: 170, top: 2900, width: 550, height: 1100 })
    .png()
    .toFile(path.join(outDir, 'style_look_hero.png'));

  // Style Edit 4 small looks:
  await sharp(imgPath)
    .extract({ left: 1200, top: 2900, width: 230, height: 500 })
    .png()
    .toFile(path.join(outDir, 'style_look_1.png'));

  await sharp(imgPath)
    .extract({ left: 1540, top: 2900, width: 230, height: 500 })
    .png()
    .toFile(path.join(outDir, 'style_look_2.png'));

  await sharp(imgPath)
    .extract({ left: 1200, top: 3450, width: 230, height: 500 })
    .png()
    .toFile(path.join(outDir, 'style_look_3.png'));

  await sharp(imgPath)
    .extract({ left: 1540, top: 3450, width: 230, height: 500 })
    .png()
    .toFile(path.join(outDir, 'style_look_4.png'));

  // 5. Ornamental divider 1: Y ~ 4250 to 4450
  await sharp(imgPath)
    .extract({ left: 200, top: 4280, width: 1520, height: 150 })
    .png()
    .toFile(path.join(outDir, 'ornament_divider_1.png'));

  // 6. Best Seller section: Y ~ 4750 to 5350
  // 5 products:
  // Item 1: Bomber
  await sharp(imgPath)
    .extract({ left: 80, top: 6566 - 1900, width: 330, height: 420 })
    .png()
    .toFile(path.join(outDir, 'best_bomber.png'));

  // Item 2: Long Sleeve
  await sharp(imgPath)
    .extract({ left: 450, top: 6566 - 1900, width: 330, height: 420 })
    .png()
    .toFile(path.join(outDir, 'best_longsleeve.png'));

  // Item 3: Glow Hoodie
  await sharp(imgPath)
    .extract({ left: 800, top: 6566 - 1900, width: 330, height: 420 })
    .png()
    .toFile(path.join(outDir, 'best_glow_hoodie.png'));

  // Item 4: Faithless Jeans
  await sharp(imgPath)
    .extract({ left: 1180, top: 6566 - 1900, width: 330, height: 420 })
    .png()
    .toFile(path.join(outDir, 'best_faithless_jeans.png'));

  // Item 5: Slouch Bag
  await sharp(imgPath)
    .extract({ left: 1550, top: 6566 - 1900, width: 330, height: 420 })
    .png()
    .toFile(path.join(outDir, 'best_slouch_bag.png'));

  // 7. Ornamental divider 2:
  await sharp(imgPath)
    .extract({ left: 450, top: 6566 - 1420, width: 1020, height: 120 })
    .png()
    .toFile(path.join(outDir, 'ornament_divider_2.png'));

  // 8. Inside Sculptor tiles:
  // Hyundai Seoul:
  await sharp(imgPath)
    .extract({ left: 170, top: 6566 - 1050, width: 750, height: 440 })
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'inside_hyundai_seoul.jpg'));

  // BTS Video:
  await sharp(imgPath)
    .extract({ left: 1000, top: 6566 - 1050, width: 750, height: 440 })
    .jpeg({ quality: 90 })
    .toFile(path.join(outDir, 'inside_bts_photoshoot.jpg'));

  console.log('All slices extracted successfully!');
}

extract().catch(console.error);
