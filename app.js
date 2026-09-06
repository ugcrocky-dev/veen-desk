(function () {
  const products = window.VEEN_PRODUCTS || [];
  const groups = ["active", "creator", "practice", "archive"];

  function host(url) {
    try {
      return new URL(url).host.replace(/^www\./, "");
    } catch {
      return "";
    }
  }

  function renderRow(p) {
    const row = document.createElement("article");
    row.className = "row";

    const main = document.createElement("div");
    const name = document.createElement("h3");
    name.className = "name";
    name.textContent = p.name;
    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = p.desc;
    main.append(name, desc);

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = p.url ? host(p.url) : p.repo ? "repo only" : "—";

    const actions = document.createElement("div");
    actions.className = "actions";

    if (p.url) {
      const live = document.createElement("a");
      live.className = "chip live";
      live.href = p.url;
      live.target = "_blank";
      live.rel = "noopener";
      live.textContent = "Open live";
      actions.appendChild(live);
    }
    if (p.repo) {
      const repo = document.createElement("a");
      repo.className = "chip";
      repo.href = p.repo;
      repo.target = "_blank";
      repo.rel = "noopener";
      repo.textContent = "Repo";
      actions.appendChild(repo);
    }
    if (p.chat) {
      const chat = document.createElement("a");
      chat.className = "chip";
      chat.href = p.chat;
      chat.target = "_blank";
      chat.rel = "noopener";
      chat.textContent = "Chat";
      actions.appendChild(chat);
    }

    row.append(main, meta, actions);
    return row;
  }

  groups.forEach((g) => {
    const mount = document.querySelector(`[data-group="${g}"]`);
    if (!mount) return;
    products
      .filter((p) => p.group === g)
      .forEach((p) => mount.appendChild(renderRow(p)));
  });

  const active = products.filter((p) => p.group === "active").length;
  const live = products.filter((p) => !!p.url).length;
  const repos = products.filter((p) => !!p.repo).length;
  const elA = document.getElementById("count-active");
  const elL = document.getElementById("count-live");
  const elR = document.getElementById("count-repos");
  if (elA) elA.textContent = String(active);
  if (elL) elL.textContent = String(live);
  if (elR) elR.textContent = String(repos);

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".row").forEach((el) => io.observe(el));
})();
