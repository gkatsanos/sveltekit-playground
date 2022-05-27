<script>
  import BlogPost from '$components/BlogPost.svelte'
  /**
   * @type {{ title: any; body: any; }}
   */
  export let item
</script>

<BlogPost post={item} />
