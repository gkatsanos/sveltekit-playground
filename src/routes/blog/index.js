/** @type {import('./index').RequestHandler} */
export async function get() {
  let posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()

  const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

  posts = posts.map((post) => {
    const user = users.find((user) => user.id === post.userId)
    return {
      ...post,
      user,
    }
  })

  debugger
  return {
    body: { posts },
  }
}
