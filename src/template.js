export default function template(title, initialState, content) {
  let scripts = '';
  // 来自服务端
  if (content) {
    scripts = `
    <script>
      window.__STATE__ = ${JSON.stringify(initialState)}
    </script>
    <script src="assets/client.js"></script>
`;
  } else {
    scripts = '<script src="assets/bundle.js"></script>';
  }

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
    </head>
    <body>
      <div id="app">
        ${content}
      </div>
      ${scripts}
    </body>
  </html>
  `;
}
