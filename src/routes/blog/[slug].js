/** @type {import('./[slug]').RequestHandler} */
export async function get({ params }) {
  const item = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)).json()

  debugger

  if (item) {
    return {
      body: { item },
    }
  }

  return {
    status: 404,
  }
}
