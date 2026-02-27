    const presets = [
      { name: "Custom", denom: 50000 },
      { name: "Rare-ish (1 in 25,000)", denom: 25000 },
      { name: "Legend-tier (1 in 250,000)", denom: 250000 },
      { name: "Ultra-tier (1 in 1,000,000)", denom: 1000000 },
      { name: "Chase-tier (1 in 10,000,000)", denom: 10000000 }
    ];

    const auraEl = document.getElementById("aura");
    const denominatorEl = document.getElementById("denominator");
    const luckEl = document.getElementById("luck");
    const rpmEl = document.getElementById("rpm");
    const targetEl = document.getElementById("target");
    const confidenceEl = document.getElementById("confidence");

    const out = {
      perRoll: document.getElementById("perRoll"),
      expRolls: document.getElementById("expRolls"),
      expTime: document.getElementById("expTime"),
      hourChance: document.getElementById("hourChance"),
      goalRolls: document.getElementById("goalRolls"),
      goalHours: document.getElementById("goalHours"),
      sessions: document.getElementById("sessions"),
      focus: document.getElementById("focus"),
      note: document.getElementById("note")
    };

    function fmtInt(n) {
      return new Intl.NumberFormat().format(Math.round(n));
    }

    function fmtPct(p) {
      return (p * 100).toFixed(p < 0.01 ? 4 : 2) + "%";
    }

    function fmtHours(h) {
      if (!Number.isFinite(h)) return "∞";
      if (h < 1) return (h * 60).toFixed(1) + " min";
      if (h < 24) return h.toFixed(2) + " h";
      return (h / 24).toFixed(2) + " d";
    }

    function rollsForConfidence(p, target, confidence) {
      if (p <= 0 || target < 1) return Infinity;
      const cap = 5_000_000;
      const dist = Array(target).fill(0);
      dist[0] = 1;
      for (let n = 1; n <= cap; n++) {
        for (let s = target - 1; s >= 1; s--) {
          dist[s] = dist[s] * (1 - p) + dist[s - 1] * p;
        }
        dist[0] = dist[0] * (1 - p);

        const failProb = dist.reduce((a, b) => a + b, 0);
        const successProb = 1 - failProb;
        if (successProb >= confidence) return n;
      }
      return Infinity;
    }

    function plan() {
      const denominator = Math.max(2, Number(denominatorEl.value));
      const luck = Math.max(0.1, Number(luckEl.value));
      const rpm = Math.max(1, Number(rpmEl.value));
      const target = Math.max(1, Math.floor(Number(targetEl.value)));
      const confidence = Math.min(0.999, Math.max(0.5, Number(confidenceEl.value) / 100));

      const p = Math.min(1, luck / denominator);
      const expectedRolls = target / p;
      const expectedHours = expectedRolls / rpm / 60;
      const oneHourRolls = rpm * 60;
      const oneHourChance = 1 - Math.pow(1 - p, oneHourRolls);

      const goalRolls = rollsForConfidence(p, target, confidence);
      const goalHours = goalRolls / rpm / 60;
      const sessions = goalHours / 2;

      out.perRoll.textContent = `1 in ${fmtInt(1 / p)} (${fmtPct(p)})`;
      out.expRolls.textContent = fmtInt(expectedRolls);
      out.expTime.textContent = fmtHours(expectedHours);
      out.hourChance.textContent = fmtPct(oneHourChance);

      out.goalRolls.textContent = Number.isFinite(goalRolls) ? fmtInt(goalRolls) : "Too high";
      out.goalHours.textContent = fmtHours(goalHours);
      out.sessions.textContent = Number.isFinite(sessions) ? sessions.toFixed(1) : "Too many";

      if (expectedHours < 2) {
        out.focus.textContent = "Fast farm";
        out.focus.className = "v ok";
      } else if (expectedHours < 20) {
        out.focus.textContent = "Medium grind";
        out.focus.className = "v";
      } else {
        out.focus.textContent = "Long-term target";
        out.focus.className = "v";
      }

      out.note.textContent = Number.isFinite(goalRolls)
        ? `To reach ${(confidence * 100).toFixed(1)}% confidence, plan about ${fmtHours(goalHours)} of active rolling at your current setup.`
        : "Confidence target exceeds built-in calculator cap. Try higher luck or lower target copies.";
    }

    presets.forEach((preset, i) => {
      const option = document.createElement("option");
      option.value = preset.denom;
      option.textContent = preset.name;
      option.selected = i === 0;
      auraEl.appendChild(option);
    });

    auraEl.addEventListener("change", () => {
      denominatorEl.value = auraEl.value;
      plan();
    });

    document.getElementById("calc").addEventListener("click", plan);
    [denominatorEl, luckEl, rpmEl, targetEl, confidenceEl].forEach((el) => {
      el.addEventListener("input", plan);
    });

    plan();
