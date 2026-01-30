#!/usr/bin/env node

/**
 * Simple Icon Generator for PWA
 * Creates basic PNG icons from SVG
 *
 * Usage: node generate-icons.js
 */

const fs = require('fs');
const path = require('path');

// SVG template for icon
const createSVG = (size) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#2563eb" rx="${size * 0.1}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.5}"
        font-weight="bold" fill="white" text-anchor="middle" dy=".35em">T</text>
  <circle cx="${size * 0.75}" cy="${size * 0.25}" r="${size * 0.1}" fill="#10b981"/>
</svg>`;

const sizes = [192, 512];
const iconsDir = path.join(__dirname, 'assets', 'icons');

// Ensure directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate SVG files
sizes.forEach(size => {
  const svgPath = path.join(iconsDir, `icon-${size}.svg`);
  fs.writeFileSync(svgPath, createSVG(size));
  console.log(`✓ Created ${svgPath}`);
});

console.log('\nSVG icons created successfully!');
console.log('\nTo convert to PNG, use one of these methods:');
console.log('\n1. ImageMagick:');
sizes.forEach(size => {
  console.log(`   convert assets/icons/icon-${size}.svg assets/icons/icon-${size}.png`);
});
console.log('\n2. Inkscape:');
sizes.forEach(size => {
  console.log(`   inkscape assets/icons/icon-${size}.svg --export-filename=assets/icons/icon-${size}.png -w ${size} -h ${size}`);
});
console.log('\n3. Online converter: https://cloudconvert.com/svg-to-png');
console.log('\n4. Or use the SVG files directly (most modern browsers support it)');
