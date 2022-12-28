export default defineEventHandler(() => {
  return `
  <h1>Please open dev console</h1>
  <script>
  fetch('/api/echo', {method: 'POST', body: JSON.stringify({foo: 'bar'})})
  </script>
  `
})
