const fs = require('fs');
const path = require('path');
const { minify: minifyHtml } = require('html-minifier-terser');
const CleanCSS = require('clean-css');
const terser = require('terser');

const srcDir = path.join(__dirname, 'src');
const outDir = path.join(__dirname, 'build');

// オプション設定
const htmlOptions = {
  collapseWhitespace: true,
  removeComments: true,
  minifyCSS: true,
  minifyJS: true,
};

// 再帰的にすべてのファイルを処理
function processDir(dir, base = '') {
  const files = fs.readdirSync(dir);

  files.forEach(async (file) => {
    const fullPath = path.join(dir, file);
    const relPath = path.join(base, file);
    const outPath = path.join(outDir, relPath);

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      fs.mkdirSync(outPath, { recursive: true });
      processDir(fullPath, path.join(base, file));
    } else {
      const ext = path.extname(file);
      const data = fs.readFileSync(fullPath, 'utf8');

      let output = '';
      if (ext === '.html') {
        output = await minifyHtml(data, htmlOptions);
      } else if (ext === '.css') {
        output = new CleanCSS().minify(data).styles;
      } else if (ext === '.js') {
        output = (await terser.minify(data)).code;
      } else {
        output = data; // その他のファイルはそのままコピー
      }

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, output, 'utf8');
      console.log(`✔ Minified: ${relPath}`);
    }
  });
}

// buildフォルダを空にして開始
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
processDir(srcDir);
