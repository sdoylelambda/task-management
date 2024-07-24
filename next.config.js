module.exports = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/task-management/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/task-management' : '',
  }