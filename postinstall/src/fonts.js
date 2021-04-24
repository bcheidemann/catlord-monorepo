const { promises: fsPromises } = require('fs');
const { join, resolve } = require('path');
const logger = require('./logger');

const FONTS_DIR = './assets/fonts';
const WEBSITE_SRC_DIR = resolve('./apps/catlord-website/src/');
const SOUTHPAW_DIR = resolve('./node_modules/@south-paw/typeface-minecraft');

(async () => {

    logger.logBold('Copying fonts...');

    logger.log('Creating fonts directories...');
    await fsPromises.mkdir(join(WEBSITE_SRC_DIR, FONTS_DIR), { recursive: true });
    await fsPromises.mkdir(join(SOUTHPAW_DIR, FONTS_DIR), { recursive: true });


    logger.log('Copying fonts...');
    for (const fontName of ['minecraft.woff', 'minecraft.woff2']) {
        const src = resolve(join(SOUTHPAW_DIR, 'files', fontName));
        logger.log(`Copying ${src}...`);
        await fsPromises.copyFile(src, join(WEBSITE_SRC_DIR, FONTS_DIR, fontName));
        await fsPromises.copyFile(src, join(SOUTHPAW_DIR, FONTS_DIR, fontName));
    }

    logger.logBold('Done.\n');

    logger.logBold('Patching @south-paw/typeface-minecraft...');

    const southpawCssFile = join(SOUTHPAW_DIR, 'index.css');

    logger.log(`Reading ${southpawCssFile}...`);
    const data = await fsPromises.readFile(southpawCssFile, 'utf8');

    logger.log(`Patching ${southpawCssFile}...`);
    
    function patchImports(data) {
        if (data.includes('./files/')) {
            return patchImports(data.replace('./files/', './assets/fonts/'));
        }
        return data;
    }
    const newData = patchImports(data);
    await fsPromises.writeFile(southpawCssFile, newData);

    logger.logBold('Done.\n');

})();
