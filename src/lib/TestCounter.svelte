<script>
  let count = $state(0);
  const incement = () => {
    count += 1;
  };
</script>

<button onclick={incement}>
  count is {count}
</button>
