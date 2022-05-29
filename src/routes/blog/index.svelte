<script>
  /**
   * @type { id: number, title: string, body: string }[]
   */
  export let postsWithUsers = []
</script>

<svelte:head>
  <title>My blog</title>
</svelte:head>

<ul class="list-none">
  {#each postsWithUsers as post}
    <li><a class="text-blue-600 hover:underline" href="/blog/{post.id}">{post.title}</a></li>
    <span class="text-sm text-neutral-400">posted by {post.user.name}</span>
  {/each}
</ul>
