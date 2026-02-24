#!/usr/bin/env node
/**
 * Andora QR Code Generator (Node.js version)
 * Generates a branded QR code with the Andora logo in the center
 * that links to www.andorahealth.com
 *
 * Usage:
 *   npm install qrcode sharp
 *   node generate-qr.mjs
 */

import QRCode from 'qrcode';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const URL = 'https://www.andorahealth.com';
const LOGO_PATH = path.join(__dirname, 'public', 'Andora_BlackLogo_Variant_PNG@14x.png');
const OUTPUT_PATH = path.join(__dirname, 'public', 'andora-qr.png');

// Andora brand colors
const QR_FILL_COLOR = '#1E3A5F';  // primary dark blue
const QR_BACK_COLOR = '#ffffff';   // white

async function generateQRCode() {
  console.log('Andora QR Code Generator');
  console.log('='.repeat(50));

  try {
    // Generate QR code as buffer
    const qrBuffer = await QRCode.toBuffer(URL, {
      errorCorrectionLevel: 'H',  // High error correction for logo embedding
      type: 'png',
      quality: 0.95,
      margin: 4,
      width: 800,
      color: {
        dark: QR_FILL_COLOR,
        light: QR_BACK_COLOR,
      },
    });

    // Load QR code with sharp
    const qrImage = sharp(qrBuffer);

    // Check if logo exists
    if (fs.existsSync(LOGO_PATH)) {
      // Get QR code dimensions
      const qrMetadata = await qrImage.metadata();
      const qrSize = qrMetadata.width;

      // Calculate logo size (1/4 of QR code for better visibility)
      const logoSize = Math.floor(qrSize / 4);

      // Create circular white background for logo
      const circleSize = logoSize + 24;
      const circleSvg = `
        <svg width="${circleSize}" height="${circleSize}">
          <circle cx="${circleSize / 2}" cy="${circleSize / 2}" r="${circleSize / 2}" fill="${QR_BACK_COLOR}"/>
        </svg>
      `;

      // Resize logo
      const logoBuffer = await sharp(LOGO_PATH)
        .resize(logoSize, logoSize, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })
        .toBuffer();

      // Composite: QR code + white circle + logo
      const circlePos = Math.floor((qrSize - circleSize) / 2);
      const logoPos = Math.floor((qrSize - logoSize) / 2);

      const finalImage = await qrImage
        .composite([
          {
            input: Buffer.from(circleSvg),
            top: circlePos,
            left: circlePos,
          },
          {
            input: logoBuffer,
            top: logoPos,
            left: logoPos,
          },
        ])
        .png({ quality: 95 })
        .toFile(OUTPUT_PATH);

      console.log('QR code generated successfully!');
      console.log(`  Output: ${OUTPUT_PATH}`);
      console.log(`  URL: ${URL}`);
      console.log(`  Color: ${QR_FILL_COLOR} (Andora Blue)`);
      console.log(`  Size: ${finalImage.width}x${finalImage.height}px`);
    } else {
      // Save QR code without logo
      await qrImage.toFile(OUTPUT_PATH);
      console.log(`Warning: Logo file not found at ${LOGO_PATH}`);
      console.log('  QR code generated without logo');
      console.log('  QR code saved to:', OUTPUT_PATH);
    }

  } catch (error) {
    console.error('Error generating QR code:', error.message);
    process.exit(1);
  }
}

// Run the generator
generateQRCode();
