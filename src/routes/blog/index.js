/** @type {import('./index').RequestHandler} */
export async function get() {
  const [posts, users] = await Promise.all([
    await (await fetch('https://jsonplaceholder.typicode.com/posts')).json(),
    await (await fetch('https://jsonplaceholder.typicode.com/users')).json(),
  ])

  const postsWithUsers = posts.map((post) => {
    const user = users.find((user) => user.id === post.userId)
    return {
      ...post,
      user,
    }
  })

  return {
    body: { postsWithUsers },
  }
}
