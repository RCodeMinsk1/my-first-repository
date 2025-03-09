function wait() {
  for (let index = 0; index < 1000000000; index++) {}
  let loading = document.getElementById("loading");
  loading.style.display = "none";
}

export { wait };
