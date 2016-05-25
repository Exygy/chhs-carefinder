export default function (src, callback) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  document.getElementsByTagName('head')[0].appendChild(script)
  script.src = src
}
