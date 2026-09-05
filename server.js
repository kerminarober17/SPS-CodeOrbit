const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.txt': 'text/plain; charset=UTF-8'
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Normalize path
  if (pathname === '/') {
    pathname = '/index.html';
  } else if (!path.extname(pathname)) {
    // Check if pathname.html exists or if it's a directory with index.html
    const potentialHtml = path.join(PUBLIC_DIR, pathname + '.html');
    if (fs.existsSync(potentialHtml) && fs.statSync(potentialHtml).isFile()) {
      pathname = pathname + '.html';
    } else {
      const potentialIndex = path.join(PUBLIC_DIR, pathname, 'index.html');
      if (fs.existsSync(potentialIndex) && fs.statSync(potentialIndex).isFile()) {
        pathname = path.join(pathname, 'index.html');
      }
    }
  }

  const filePath = path.join(PUBLIC_DIR, pathname);

  // Prevent directory traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback for 404
      const notFoundPath = path.join(PUBLIC_DIR, '404.html');
      if (fs.existsSync(notFoundPath)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        fs.createReadStream(notFoundPath).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`
          <!DOCTYPE html>
          <html>
          <head><title>404 - Page Not Found</title></head>
          <body style="font-family: sans-serif; text-align: center; padding: 50px;">
            <h1>404 - Page Not Found</h1>
            <p>The requested page <code>${pathname}</code> was not found.</p>
            <a href="/" style="color: #2563EB;">Return to Homepage</a>
          </body>
          </html>
        `);
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Handle range requests for video/audio
    const range = req.headers.range;
    if (range && (ext === '.mp4' || ext === '.webm')) {
      const total = stats.size;
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : total - 1;
      const chunksize = (end - start) + 1;

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${total}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
      });

      const fileStream = fs.createReadStream(filePath, { start, end });
      fileStream.pipe(res);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[SPS Code Orbit] Pure Vanilla Web Server running on port ${PORT}`);
});
