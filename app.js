(function () {
  const products = window.VEEN_PRODUCTS || [];
  const meta = window.VEEN_META || {};
  const groups = ["active", "vps", "creator", "practice", "archive"];

  function hostLabel(url) {
    try {
      return new URL(url).host.replace(/^www\./, "");
    } catch {
      return "";
    }
  }

  function renderRow(p) {
    const row = document.createElement("article");
    row.className = "row";
    if (p.host === "vps") row.classList.add("is-vps");

    const main = document.createElement("div");
    const name = document.createElement("h3");
    name.className = "name";
    name.textContent = p.name;

    if (p.host) {
      const badge = document.createElement("span");
      badge.className = "badge host-" + p.host;
      badge.textContent = p.host;
      name.appendChild(document.createTextNode(" "));
      name.appendChild(badge);
    }

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = p.desc;
    main.append(name, desc);

    if (p.note) {
      const note = document.createElement("p");
      note.className = "note";
      note.textContent = p.note;
      main.appendChild(note);
    }

    if (Array.isArray(p.altUrls) && p.altUrls.length) {
      const alts = document.createElement("div");
      alts.className = "alts";
      p.altUrls.forEach((u) => {
        const a = document.createElement("a");
        a.href = u;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = hostLabel(u) || u;
        alts.appendChild(a);
      });
      main.appendChild(alts);
    }

    const metaEl = document.createElement("div");
    metaEl.className = "meta";
    metaEl.textContent = p.url ? hostLabel(p.url) : p.repo ? "repo only" : "—";

    const actions = document.createElement("div");
    actions.className = "actions";

    if (p.url) {
      const live = document.createElement("a");
      live.className = "chip live";
      live.href = p.url;
      live.target = "_blank";
      live.rel = "noopener";
      live.textContent = p.host === "vps" ? "Open VPS" : "Open live";
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

    row.append(main, metaEl, actions);
    return row;
  }

  groups.forEach((g) => {
    const mount = document.querySelector(`[data-group="${g}"]`);
    if (!mount) return;
    products
      .filter((p) => p.group === g)
      .forEach((p) => mount.appendChild(renderRow(p)));
  });

  const set = (id, n) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(n);
  };
  set("count-active", products.filter((p) => p.group === "active").length);
  set("count-vps", products.filter((p) => p.group === "vps").length);
  set(
    "count-live",
    products.filter((p) => !!p.url).length +
      products.reduce((n, p) => n + (Array.isArray(p.altUrls) ? p.altUrls.length : 0), 0)
  );
  set("count-repos", products.filter((p) => !!p.repo).length);

  const updated = document.getElementById("updated-at");
  if (updated) updated.textContent = meta.updatedAt || "—";

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
