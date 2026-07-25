#!/usr/bin/env node
/**
 * exportar-cartel.js
 * Genera cartel-vacaciones.pdf y cartel-vacaciones.png
 * desde cartel-vacaciones.html usando Puppeteer.
 *
 * Uso:
 *   npm install puppeteer
 *   node exportar-cartel.js
 *
 * Prerequisito: coloca el archivo qr-code.png en esta misma carpeta.
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const HTML_FILE = path.resolve(__dirname, 'cartel-vacaciones.html');
const PDF_OUT   = path.resolve(__dirname, 'cartel-vacaciones.pdf');
const PNG_OUT   = path.resolve(__dirname, 'cartel-vacaciones.png');

// A4 en píxeles a 300 dpi (1 inch = 25.4 mm → 210mm = 2480px, 297mm = 3508px)
const A4_WIDTH_PX  = 2480;
const A4_HEIGHT_PX = 3508;

async function main() {
  if (!fs.existsSync(HTML_FILE)) {
    console.error('❌  No se encuentra cartel-vacaciones.html');
    process.exit(1);
  }

  const qrPath = path.resolve(__dirname, 'qr-code.png');
  if (!fs.existsSync(qrPath)) {
    console.warn('⚠️  AVISO: no se encuentra qr-code.png en esta carpeta.');
    console.warn('   Coloca el archivo QR original antes de exportar para que aparezca en el cartel.');
  }

  console.log('🚀 Iniciando Puppeteer…');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Viewport a resolución 300 dpi para PNG
  await page.setViewport({
    width: A4_WIDTH_PX,
    height: A4_HEIGHT_PX,
    deviceScaleFactor: 1,
  });

  const fileUrl = `file://${HTML_FILE}`;
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // Esperar a que las imágenes carguen (incluido el QR)
  await page.evaluate(() => {
    return Promise.all(
      Array.from(document.images).map(img =>
        img.complete
          ? Promise.resolve()
          : new Promise(resolve => { img.onload = resolve; img.onerror = resolve; })
      )
    );
  });

  // ── Exportar PNG de alta calidad (300 dpi equivalente) ──
  await page.screenshot({
    path: PNG_OUT,
    fullPage: true,
    type: 'png',
    omitBackground: false,
  });
  console.log(`✅ PNG generado → ${PNG_OUT}`);

  // ── Exportar PDF con formato A4 real ──
  await page.pdf({
    path: PDF_OUT,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
    preferCSSPageSize: false,
  });
  console.log(`✅ PDF generado → ${PDF_OUT}`);

  await browser.close();
  console.log('\n🎉 Exportación completada. Revisa los archivos generados.');
}

main().catch(err => {
  console.error('❌  Error durante la exportación:', err);
  process.exit(1);
});
