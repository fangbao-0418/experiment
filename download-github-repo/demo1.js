var wget = require('download');

async function download(repo, dest, fn){
  var url = repo;
  const res = await wget(url, dest, { extract: false })
  console.log(res, 'res')
}

const repo = 'http://192.168.20.7/front-end/xt-youxan/xt-crm-microservice/portal/blob/master/README.md'

console.log(wget, 'wget')

download(repo, './src')