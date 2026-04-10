    const generateBtn = document.getElementById("generateBtn");
    const clearTypesBtn = document.getElementById("clearTypesBtn");
    const newChallengeBtn = document.getElementById("newChallengeBtn");
    const shareBtn = document.getElementById("shareBtn");
    const saveBtn = document.getElementById("saveBtn");
    const loadBtn = document.getElementById("loadBtn");
    const clearBtn = document.getElementById("clearBtn");
    const compareBtn = document.getElementById("compareBtn");
    const battleBtn = document.getElementById("battleBtn");
    const dailyBtn = document.getElementById("dailyBtn");

    const preloadIndicatorEl = document.getElementById("preloadIndicator");
    const preloadTextEl = document.getElementById("preloadText");
    const shareToastEl = document.getElementById("shareToast");
    const historySlots = document.getElementById("historySlots");
    const historyEmpty = document.getElementById("historyEmpty");
    const weaknessSection = document.getElementById("weaknessSection");
    const weaknessGrid = document.getElementById("weaknessGrid");
    const dailyTitleEl = document.getElementById("dailyTitle");
    const dailySubEl = document.getElementById("dailySub");

    const startDraftBtn = document.getElementById("startDraftBtn");
    const resetDraftBtn = document.getElementById("resetDraftBtn");
    const useDraftBtn = document.getElementById("useDraftBtn");

    const exportPngBtn = document.getElementById("exportPngBtn");
    const versusStatusEl = document.getElementById("versusStatus");
    const versusTurnBadgeEl = document.getElementById("versusTurnBadge");
    const versusChoicesListEl = document.getElementById("versusChoicesList");
    const versus1GridEl = document.getElementById("versus1Grid");
    const versus2GridEl = document.getElementById("versus2Grid");
    const versus1ScoreEl = document.getElementById("versus1Score");
    const versus2ScoreEl = document.getElementById("versus2Score");
    const startVersusBtn = document.getElementById("startVersusBtn");
    const resetVersusBtn = document.getElementById("resetVersusBtn");
    const battleVersusBtn = document.getElementById("battleVersusBtn");
    const versusBattleBoxEl = document.getElementById("versusBattleBox");

    const generationSelect = document.getElementById("generationSelect");
    const selectionModeSelect = document.getElementById("selectionModeSelect");
    const shinyChanceInput = document.getElementById("shinyChanceInput");
    const typeCheckboxes = document.querySelectorAll('#typeCheckboxes input[type="checkbox"]');

    const teamGrid = document.getElementById("teamGrid");
    const statusEl = document.getElementById("status");
    const metaEl = document.getElementById("meta");
    const emptyStateEl = document.getElementById("emptyState");
    const challengeTextEl = document.getElementById("challengeText");
    const challengeMetaEl = document.getElementById("challengeMeta");

    const manualInputs = document.querySelectorAll(".manual-input");
    const manualResultEl = document.getElementById("manualResult");
    const battleBoxEl = document.getElementById("battleBox");

    const draftStatusEl = document.getElementById("draftStatus");
    const draftChoicesGridEl = document.getElementById("draftChoicesGrid");
    const draftPicksGridEl = document.getElementById("draftPicksGrid");
    const draftScoreBoxEl = document.getElementById("draftScoreBox");

    const overallScoreEl = document.getElementById("overallScore");
    const overallTextEl = document.getElementById("overallText");
    const powerScoreEl = document.getElementById("powerScore");
    const balanceScoreEl = document.getElementById("balanceScore");
    const coverageScoreEl = document.getElementById("coverageScore");
    const cursedScoreEl = document.getElementById("cursedScore");
    const cursedTextEl = document.getElementById("cursedText");

    const STORAGE_KEY = "pokemon-team-randomizer-saved-team-v52";
    const FETCH_TIMEOUT_MS = 8000;
    const MAX_HISTORY = 5;

    const generationRanges = {
      all: [1, 1025],
      gen1: [1, 151],
      gen2: [152, 251],
      gen3: [252, 386],
      gen4: [387, 493],
      gen5: [494, 649],
      gen6: [650, 721],
      gen7: [722, 809],
      gen8: [810, 905],
      gen9: [906, 1025]
    };

    const typeColors = {
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD"
    };

    const typeEffectiveness = {
      normal:   { rock: 0.5, ghost: 0, steel: 0.5 },
      fire:     { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
      water:    { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
      electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
      grass:    { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
      ice:      { fire: 0.5, water: 0.5, grass: 2, ground: 2, flying: 2, dragon: 2, steel: 0.5, ice: 0.5 },
      fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
      poison:   { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
      ground:   { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
      flying:   { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
      psychic:  { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
      bug:      { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
      rock:     { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
      ghost:    { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
      dragon:   { dragon: 2, steel: 0.5, fairy: 0 },
      dark:     { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
      steel:    { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, fairy: 2, steel: 0.5 },
      fairy:    { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 }
    };

    // FIX 4 – score weights as named constants instead of magic numbers
    const SCORE_WEIGHTS = {
      power: 0.42,
      balance: 0.33,
      coverage: 0.20,
      cursePenaltyFactor: 0.7
    };

    const pokemonCache = new Map();
    const movesCache = new Map(); // id -> array of top moves
    const evolutionChainCache = new Map(); // pokemonId -> chainId
    const chainMembersCache = new Map();   // chainId -> Set of pokemonIds

    // FIX 3 – loading guard against race conditions
    let isLoading = false;

    let currentTeam = [];
    let currentChallenge = null;
    let currentScoreData = null;

    let currentManualTeam = [];
    let currentManualScore = null;

    let draftTeam = [];
    let draftChoices = [];
    let draftRound = 0;
    let draftUsedIds = new Set();
    let draftUsedEvoIds = new Set(); // Evolution relatives of draft picks

    // Versus Mode state
    let versusPlayer1 = [];
    let versusPlayer2 = [];
    let versusCurrentPlayer = 1;
    let versusRound = 0;
    let versusChoices = [];
    let versusUsedIds = new Set();
    let versusUsedEvoIds = new Set();
    let versusActive = false;

    // History: last MAX_HISTORY generated teams
    let teamHistory = [];

    function capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }

    function clamp(num, min, max) {
      return Math.max(min, Math.min(max, num));
    }

    function average(arr) {
      if (!arr.length) return 0;
      return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

    function randomFrom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function setStatus(message, meta = "") {
      statusEl.textContent = message;
      metaEl.textContent = meta;
    }

    function getSelectedTypes() {
      return Array.from(typeCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
    }

    function getTypeLabel() {
      const selectedTypes = getSelectedTypes();
      return selectedTypes.length
        ? selectedTypes.map(capitalize).join(", ")
        : "all types";
    }

    function getRandomPokemonId() {
      const [min, max] = generationRanges[generationSelect.value];
      return getRandomInt(min, max);
    }

    function rollIsShiny() {
      const shinyChance = Number(shinyChanceInput.value) || 0;
      const normalizedChance = clamp(shinyChance, 0, 100);
      return Math.random() * 100 < normalizedChance;
    }

    function getGenFromId(id) {
      if (id <= 151) return 1;
      if (id <= 251) return 2;
      if (id <= 386) return 3;
      if (id <= 493) return 4;
      if (id <= 649) return 5;
      if (id <= 721) return 6;
      if (id <= 809) return 7;
      if (id <= 905) return 8;
      return 9;
    }

    // FIX 2 – AbortController mit Timeout für alle fetch-Aufrufe
    async function fetchWithTimeout(url) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
      try {
        const response = await fetch(url, { signal: controller.signal });
        return response;
      } catch (err) {
        if (err.name === "AbortError") {
          throw new Error("PokéAPI isn't responding (timeout). Try again.");
        }
        throw err;
      } finally {
        clearTimeout(timer);
      }
    }

    async function fetchPokemon(identifier, forcedShiny = null) {
      const cacheKey = String(identifier).toLowerCase();

      let basePokemon;

      if (pokemonCache.has(cacheKey)) {
        basePokemon = pokemonCache.get(cacheKey);
      } else {
        const response = await fetchWithTimeout(`https://pokeapi.co/api/v2/pokemon/${identifier}`);

        if (!response.ok) {
          throw new Error(`Failed to load Pokémon: ${identifier}`);
        }

        const data = await response.json();

        const stats = {};
        data.stats.forEach((entry) => {
          stats[entry.stat.name] = entry.base_stat;
        });

        const bst = Object.values(stats).reduce((sum, val) => sum + val, 0);

        basePokemon = {
          id: data.id,
          name: data.name,
          defaultImage:
            data.sprites.other["official-artwork"].front_default ||
            data.sprites.front_default,
          shinyImage:
            data.sprites.other["official-artwork"].front_shiny ||
            data.sprites.front_shiny ||
            data.sprites.other["official-artwork"].front_default ||
            data.sprites.front_default,
          types: data.types.map((typeInfo) => typeInfo.type.name),
          height: data.height,
          weight: data.weight,
          baseExperience: data.base_experience ?? 0,
          stats,
          bst,
          gen: getGenFromId(data.id)
        };

        pokemonCache.set(cacheKey, basePokemon);
        pokemonCache.set(String(basePokemon.id), basePokemon);
        pokemonCache.set(basePokemon.name.toLowerCase(), basePokemon);
      }

      const isShiny = forcedShiny === null ? rollIsShiny() : forcedShiny;

      // FIX 1 – always derive image from isShiny, not from saved value
      return {
        ...basePokemon,
        isShiny,
        image: isShiny ? basePokemon.shinyImage : basePokemon.defaultImage
      };
    }

    async function getEvolutionChainIds(pokemonId) {
      if (evolutionChainCache.has(pokemonId)) {
        const chainId = evolutionChainCache.get(pokemonId);
        return chainMembersCache.get(chainId) || new Set([pokemonId]);
      }
      try {
        const specRes = await fetchWithTimeout(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
        if (!specRes.ok) return new Set([pokemonId]);
        const specData = await specRes.json();
        const chainUrl = specData.evolution_chain.url;
        const chainId = parseInt(chainUrl.split("/").filter(Boolean).pop(), 10);
        evolutionChainCache.set(pokemonId, chainId);

        if (chainMembersCache.has(chainId)) {
          return chainMembersCache.get(chainId);
        }

        const chainRes = await fetchWithTimeout(chainUrl);
        if (!chainRes.ok) {
          const solo = new Set([pokemonId]);
          chainMembersCache.set(chainId, solo);
          return solo;
        }
        const chainData = await chainRes.json();
        const ids = new Set();
        function traverseChain(node) {
          const sid = parseInt(node.species.url.split("/").filter(Boolean).pop(), 10);
          ids.add(sid);
          for (const next of node.evolves_to) traverseChain(next);
        }
        traverseChain(chainData.chain);
        chainMembersCache.set(chainId, ids);
        for (const id of ids) evolutionChainCache.set(id, chainId);
        return ids;
      } catch (_) {
        return new Set([pokemonId]);
      }
    }

    function matchesTypeFilter(pokemon) {
      const selectedTypes = getSelectedTypes();
      if (!selectedTypes.length) return true;
      return pokemon.types.some((type) => selectedTypes.includes(type));
    }

    function getRole(pokemon) {
      const speed = pokemon.stats.speed ?? 0;
      const attack = pokemon.stats.attack ?? 0;
      const spAttack = pokemon.stats["special-attack"] ?? 0;
      const defense = pokemon.stats.defense ?? 0;
      const spDefense = pokemon.stats["special-defense"] ?? 0;
      const hp = pokemon.stats.hp ?? 0;

      const offensive = Math.max(attack, spAttack);
      const defensive = (defense + spDefense + hp) / 3;

      if (speed >= 110) return "speedster";
      if (offensive >= 120) return "sweeper";
      if (defensive >= 95) return "tank";
      return "balanced";
    }

    function getSelectionScore(pokemon) {
      const speed = pokemon.stats.speed ?? 0;
      const attack = pokemon.stats.attack ?? 0;
      const spAttack = pokemon.stats["special-attack"] ?? 0;
      const hp = pokemon.stats.hp ?? 0;
      const defense = pokemon.stats.defense ?? 0;
      const spDefense = pokemon.stats["special-defense"] ?? 0;

      let score = 0;
      score += pokemon.bst;
      score += Math.max(attack, spAttack) * 0.7;
      score += speed * 0.5;
      score += ((hp + defense + spDefense) / 3) * 0.35;

      if (pokemon.bst < 420) score -= 90;
      if (pokemon.bst < 380) score -= 120;
      if (pokemon.bst > 550) score += 40;
      if (pokemon.bst > 600) score += 30;

      return Math.round(score);
    }

    function getDraftPowerCount(team) {
      return team.filter((p) => getSelectionScore(p) >= 680).length;
    }

    function getGeneratorPoolOptions() {
      const mode = selectionModeSelect.value;

      if (mode === "classic") {
        return { poolSize: 1, pickStrategy: "classic" };
      }

      if (mode === "chaos") {
        return { poolSize: 5, pickStrategy: "chaos" };
      }

      return { poolSize: 6, pickStrategy: "smart" };
    }

    async function getRandomPokemonMatchingFilter(usedIds, usedEvoIds = new Set()) {
      let attempts = 0;
      const maxAttempts = 220;

      while (attempts < maxAttempts) {
        const id = getRandomPokemonId();

        if (usedIds.has(id) || usedEvoIds.has(id)) {
          attempts++;
          continue;
        }

        const pokemon = await fetchPokemon(id);

        if (matchesTypeFilter(pokemon)) {
          usedIds.add(id);
          return pokemon;
        }

        attempts++;
      }

      throw new Error("No matching Pokémon found. Try different types or a different gen.");
    }

    async function getSmartRandomPokemonMatchingFilter(usedIds, options = {}, usedEvoIds = new Set()) {
      const {
        poolSize = 6,
        pickStrategy = "smart"
      } = options;

      if (pickStrategy === "classic") {
        return getRandomPokemonMatchingFilter(usedIds, usedEvoIds);
      }

      const candidates = [];
      let attempts = 0;
      const maxAttempts = 320;

      while (candidates.length < poolSize && attempts < maxAttempts) {
        const id = getRandomPokemonId();

        if (usedIds.has(id) || usedEvoIds.has(id) || candidates.some((p) => p.id === id)) {
          attempts++;
          continue;
        }

        const pokemon = await fetchPokemon(id);

        if (!matchesTypeFilter(pokemon)) {
          attempts++;
          continue;
        }

        candidates.push(pokemon);
        attempts++;
      }

      if (!candidates.length) {
        throw new Error("No matching Pokémon found.");
      }

      candidates.sort((a, b) => getSelectionScore(b) - getSelectionScore(a));

      let picked;

      if (pickStrategy === "chaos") {
        const lowerHalfStart = Math.floor(candidates.length / 2);
        const chaosPool = candidates.slice(lowerHalfStart);
        picked = randomFrom(chaosPool.length ? chaosPool : candidates);
      } else {
        const topCount = Math.min(3, candidates.length);
        const topCandidates = candidates.slice(0, topCount);
        picked = randomFrom(topCandidates);
      }

      usedIds.add(picked.id);
      return picked;
    }

    function createTypeBadge(type) {
      const badge = document.createElement("span");
      badge.className = "type-badge";
      badge.textContent = capitalize(type);
      badge.style.background = typeColors[type] || "#777";
      return badge;
    }

    function createPokemonCard(pokemon, animIndex = -1) {
      const card = document.createElement("article");
      card.className = "card";

      if (animIndex >= 0) {
        card.classList.add("card-animating");
        card.style.animationDelay = `${animIndex * 60}ms`;
      }

      const top = document.createElement("div");
      top.className = "card-top";

      const idEl = document.createElement("div");
      idEl.className = "pokemon-id";
      idEl.textContent = `#${pokemon.id}`;
      top.appendChild(idEl);

      if (pokemon.isShiny) {
        const shinyEl = document.createElement("div");
        shinyEl.className = "shiny-badge";
        shinyEl.textContent = "✨ Shiny";
        top.appendChild(shinyEl);
      }

      const imageWrap = document.createElement("div");
      imageWrap.className = "pokemon-image-wrap";

      if (pokemon.image) {
        const img = document.createElement("img");
        img.className = "pokemon-image";
        img.src = pokemon.image;
        img.alt = pokemon.name;
        imageWrap.appendChild(img);
      } else {
        const fallback = document.createElement("div");
        fallback.textContent = "No image";
        imageWrap.appendChild(fallback);
      }

      const nameEl = document.createElement("div");
      nameEl.className = "pokemon-name";
      nameEl.textContent = capitalize(pokemon.name);

      const typesEl = document.createElement("div");
      typesEl.className = "types";
      pokemon.types.forEach((type) => {
        typesEl.appendChild(createTypeBadge(type));
      });

      const statsEl = document.createElement("div");
      statsEl.className = "stats";
      statsEl.innerHTML = `
        <div class="stat-line"><span>BST</span><strong>${pokemon.bst}</strong></div>
        <div class="stat-line"><span>Speed</span><strong>${pokemon.stats.speed ?? 0}</strong></div>
        <div class="stat-line"><span>Atk / SpA</span><strong>${pokemon.stats.attack ?? 0} / ${pokemon.stats["special-attack"] ?? 0}</strong></div>
        <div class="stat-line"><span>Score</span><strong>${getSelectionScore(pokemon)}</strong></div>
      `;

      // Moves section — starts as loading placeholder, filled async
      const movesEl = document.createElement("div");
      movesEl.className = "card-moves";
      movesEl.innerHTML = `<div class="move-loading">Loading moves...</div>`;

      card.appendChild(top);
      card.appendChild(imageWrap);
      card.appendChild(nameEl);
      card.appendChild(typesEl);
      card.appendChild(statsEl);
      card.appendChild(movesEl);

      // Load moves async and fill in without blocking the card render
      loadMovesForCard(pokemon, movesEl);

      return card;
    }

    function renderTeam(team, animate = false) {
      teamGrid.innerHTML = "";
      if (team.length) {
        emptyStateEl.style.display = "none";
        team.forEach((pokemon, i) => {
          teamGrid.appendChild(createPokemonCard(pokemon, animate ? i : -1));
        });
        renderWeaknessAnalysis(team);
        weaknessSection.style.display = "block";
      } else {
        emptyStateEl.style.display = "block";
        teamGrid.appendChild(emptyStateEl);
        weaknessSection.style.display = "none";
      }
    }

    function getTeamVerdict(overall) {
      if (overall >= 85) return "Absolutely filthy. This team has main character energy.";
      if (overall >= 72) return "Strong. This could unironically be pretty solid.";
      if (overall >= 58) return "Decent. Has potential, but also some questionable vibes.";
      if (overall >= 42) return "Sus. This team feels slightly cursed.";
      return "Abysmal. This team is apologizing to the matchmaking system.";
    }

    function getCursedVerdict(cursed) {
      if (cursed >= 85) return "Maximally cursed. Pure chaos.";
      if (cursed >= 65) return "Very cursed. Dark forces are at work here.";
      if (cursed >= 40) return "Kinda cursed. You can feel the imbalance.";
      if (cursed >= 20) return "Slightly cursed. Still manageable.";
      return "Surprisingly clean. Almost professional.";
    }

    function evaluateTeam(team) {
      if (!team.length) {
        return {
          overall: 0,
          power: 0,
          balance: 0,
          coverage: 0,
          cursed: 0,
          verdict: "",
          cursedVerdict: "",
          avgBst: 0
        };
      }

      const bstValues = team.map((p) => p.bst);
      const avgBst = average(bstValues);
      const maxPossibleReasonableBst = 720;
      const minPossibleReasonableBst = 250;

      const power = clamp(
        ((avgBst - minPossibleReasonableBst) / (maxPossibleReasonableBst - minPossibleReasonableBst)) * 100,
        0,
        100
      );

      const allTypes = team.flatMap((p) => p.types);
      const uniqueTypes = new Set(allTypes);
      const typeCounts = {};
      allTypes.forEach((type) => {
        typeCounts[type] = (typeCounts[type] || 0) + 1;
      });

      let duplicateTypePenalty = 0;
      Object.values(typeCounts).forEach((count) => {
        if (count > 2) duplicateTypePenalty += (count - 2) * 8;
      });

      const roles = team.map(getRole);
      const roleCounts = {};
      roles.forEach((role) => {
        roleCounts[role] = (roleCounts[role] || 0) + 1;
      });

      let rolePenalty = 0;
      Object.values(roleCounts).forEach((count) => {
        if (count > 3) rolePenalty += (count - 3) * 10;
      });

      const balanceBase = 35 + uniqueTypes.size * 8;
      const balance = clamp(balanceBase - duplicateTypePenalty - rolePenalty, 0, 100);
      const coverage = clamp(uniqueTypes.size * 9, 0, 100);

      let cursed = 0;
      if (avgBst < 420) cursed += 25;
      if (avgBst < 360) cursed += 15;
      cursed += duplicateTypePenalty * 1.3;
      cursed += rolePenalty * 1.2;

      const lowStatMons = team.filter((p) => p.bst < 430).length;
      cursed += lowStatMons * 6;

      // FIX 5 – Math.max(...[]) returns -Infinity on empty array → guard added
      const primaryCounts = {};
      team.forEach((p) => {
        const primary = p.types[0];
        primaryCounts[primary] = (primaryCounts[primary] || 0) + 1;
      });
      const primaryVals = Object.values(primaryCounts);
      const samePrimaryTypeCount = primaryVals.length ? Math.max(...primaryVals) : 0;

      if (samePrimaryTypeCount >= 4) cursed += 20;
      if (samePrimaryTypeCount >= 5) cursed += 12;

      const shinyCount = team.filter((p) => p.isShiny).length;
      cursed += shinyCount >= 3 ? 8 : 0;
      cursed = clamp(cursed, 0, 100);

      const overall = clamp(
        power * SCORE_WEIGHTS.power +
        balance * SCORE_WEIGHTS.balance +
        coverage * SCORE_WEIGHTS.coverage +
        (5 - Math.min(cursed, 80) / 20),
        0,
        100
      );

      return {
        overall: Math.round(overall),
        power: Math.round(power),
        balance: Math.round(balance),
        coverage: Math.round(coverage),
        cursed: Math.round(cursed),
        verdict: getTeamVerdict(Math.round(overall)),
        cursedVerdict: getCursedVerdict(Math.round(cursed)),
        avgBst: Math.round(avgBst),
        shinyCount,
        uniqueTypeCount: uniqueTypes.size
      };
    }

    function updateScoreUI(score) {
      overallScoreEl.textContent = score.overall;
      overallTextEl.textContent = score.verdict;
      powerScoreEl.textContent = score.power;
      balanceScoreEl.textContent = score.balance;
      coverageScoreEl.textContent = score.coverage;
      cursedScoreEl.textContent = score.cursed;
      cursedTextEl.textContent = score.cursedVerdict;
    }

    function generateChallenge(score) {
      const challenges = [
        {
          title: "Beat the Generator",
          text: `Build a team with an Overall Score of at least ${Math.min(95, score.overall + 10)}.`,
          meta: "Your team has to clearly outscore the generator."
        },
        {
          title: "Fix This Cursed Team",
          text: `Bring the Cursed Score down to ${Math.max(0, score.cursed - 20)} or less.`,
          meta: "Goal: less curse, more competence."
        },
        {
          title: "Monotype Master",
          text: "Build a multi-type team that still hits a Balance Score of at least 55.",
          meta: "Not just strong — actually put together properly."
        },
        {
          title: "Glass Cannon Challenge",
          text: "Build an offensive team with Power Score 75+, but Cursed Score under 40.",
          meta: "Max pressure, minimum disaster."
        },
        {
          title: "Oldschool Redemption Arc",
          text: "Build a Gen 1 or Gen 2 only team that beats the current Overall Score.",
          meta: "Boomer team, but make it work."
        }
      ];

      const picked = randomFrom(challenges);
      currentChallenge = picked;
      challengeTextEl.textContent = `${picked.title}: ${picked.text}`;
      challengeMetaEl.textContent = picked.meta;
    }

    function resetScoreUI() {
      overallScoreEl.textContent = "--";
      overallTextEl.textContent = "No team rated yet.";
      powerScoreEl.textContent = "--";
      balanceScoreEl.textContent = "--";
      coverageScoreEl.textContent = "--";
      cursedScoreEl.textContent = "--";
      cursedTextEl.textContent = "No chaos measured yet.";
      challengeTextEl.textContent = "Generate a team to get a challenge.";
      challengeMetaEl.textContent = "Goal: build something better than the generator.";
    }

    function setButtonsDisabled(disabled) {
      generateBtn.disabled = disabled;
      clearTypesBtn.disabled = disabled;
      newChallengeBtn.disabled = disabled;
      saveBtn.disabled = disabled;
      loadBtn.disabled = disabled;
      clearBtn.disabled = disabled;
      compareBtn.disabled = disabled;
      battleBtn.disabled = disabled;
      startDraftBtn.disabled = disabled;
      resetDraftBtn.disabled = disabled;
      useDraftBtn.disabled = disabled;
    }

    async function generateTeam() {
      // FIX 3 – Race Condition Guard
      if (isLoading) return;
      isLoading = true;
      setButtonsDisabled(true);

      currentTeam = [];
      currentScoreData = null;
      currentManualTeam = [];
      currentManualScore = null;

      renderTeam([]);
      resetScoreUI();
      manualResultEl.textContent = "No comparison yet.";
      battleBoxEl.textContent = "No battle yet.";
      setStatus("Generating team...", "Rolling the dice on your fate.");

      try {
        const usedIds = new Set();
        const usedEvoIds = new Set();
        const team = [];
        const poolOptions = getGeneratorPoolOptions();

        for (let i = 0; i < 6; i++) {
          setStatus(
            `Generating team... (${i + 1}/6)`,
            `Mode: ${capitalize(selectionModeSelect.value)} · Types: ${getTypeLabel()}`
          );

          const pokemon = await getSmartRandomPokemonMatchingFilter(usedIds, poolOptions, usedEvoIds);
          team.push(pokemon);

          // Track evolution chain to prevent duplicates within the same line
          const chainIds = await getEvolutionChainIds(pokemon.id);
          for (const id of chainIds) usedEvoIds.add(id);

          // During generation: no animation delay, feels smoother
          renderTeam(team, false);
        }

        // Final re-render with fly-in animation
        renderTeam(team, true);

        currentTeam = team;
        currentScoreData = evaluateTeam(team);
        updateScoreUI(currentScoreData);
        generateChallenge(currentScoreData);
        updateUrlHash(team);
        pushHistory(team, currentScoreData);

        const shinyCount = team.filter((p) => p.isShiny).length;
        setStatus(
          "Generator team is ready 🔥",
          `${shinyCount} Shiny · Avg BST ${currentScoreData.avgBst} · Types: ${getTypeLabel()}`
        );
        exportPngBtn.style.display = "";
      } catch (error) {
        console.error(error);
        setStatus("Something went wrong.", error.message || "Give it another shot.");
        currentTeam = [];
        currentScoreData = null;
        renderTeam([]);
        resetScoreUI();
        exportPngBtn.style.display = "none";
      } finally {
        isLoading = false;
        setButtonsDisabled(false);
      }
    }

    function saveTeam() {
      if (!currentTeam.length || !currentScoreData) {
        setStatus("Nothing to save.", "Generate a team first.");
        return;
      }

      const payload = {
        savedAt: new Date().toISOString(),
        filters: {
          generation: generationSelect.value,
          shinyChance: Number(shinyChanceInput.value) || 0,
          selectionMode: selectionModeSelect.value,
          selectedTypes: getSelectedTypes()
        },
        team: currentTeam,
        score: currentScoreData,
        challenge: currentChallenge,
        draftTeam
      };

      // FIX – localStorage try/catch (incognito mode etc.)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        setStatus("Team saved ✅", "Stored in your browser.");
      } catch (err) {
        console.error(err);
        setStatus("Save failed.", "Browser storage unavailable (e.g. private/incognito mode).");
      }
    }

    function loadSavedTeam() {
      let raw;
      // FIX – localStorage try/catch (incognito mode etc.)
      try {
        raw = localStorage.getItem(STORAGE_KEY);
      } catch (err) {
        console.error(err);
        setStatus("Load failed.", "Browser storage unavailable (e.g. private/incognito mode).");
        return;
      }

      if (!raw) {
        setStatus("No saved team found.", "Save one first.");
        return;
      }

      try {
        const parsed = JSON.parse(raw);

        currentTeam = parsed.team || [];

        // FIX 1 – image nach dem Laden neu ableiten, damit Shiny-URLs immer stimmen
        currentTeam = currentTeam.map((p) => ({
          ...p,
          image: p.isShiny ? p.shinyImage : p.defaultImage
        }));

        currentScoreData = parsed.score || evaluateTeam(currentTeam);
        currentChallenge = parsed.challenge || null;
        draftTeam = (parsed.draftTeam || []).map((p) => ({
          ...p,
          image: p.isShiny ? p.shinyImage : p.defaultImage
        }));

        renderTeam(currentTeam);
        updateScoreUI(currentScoreData);
        renderDraftPicks();
        updateDraftScoreBox();

        if (parsed.challenge) {
          challengeTextEl.textContent = `${parsed.challenge.title}: ${parsed.challenge.text}`;
          challengeMetaEl.textContent = parsed.challenge.meta;
        }

        if (parsed.filters) {
          generationSelect.value = parsed.filters.generation ?? "all";
          shinyChanceInput.value = parsed.filters.shinyChance ?? 8;
          selectionModeSelect.value = parsed.filters.selectionMode ?? "smart";

          const selectedTypes = parsed.filters.selectedTypes ?? [];
          typeCheckboxes.forEach((checkbox) => {
            checkbox.checked = selectedTypes.includes(checkbox.value);
          });
        }

        setStatus(
          "Saved team loaded 📦",
          `${currentTeam.length} Pokémon · Overall ${currentScoreData.overall} · Cursed ${currentScoreData.cursed}`
        );
        exportPngBtn.style.display = "";
      } catch (error) {
        console.error(error);
        setStatus("Couldn't load the saved team.", "Save data looks corrupted.");
      }
    }

    function clearSavedTeam() {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (err) {
        console.error(err);
      }
      setStatus("Saved team deleted 🗑️", "Just the save — your current team is untouched.");
    }

    async function buildManualTeamFromInputs() {
      const names = Array.from(manualInputs)
        .map((input) => input.value.trim().toLowerCase())
        .filter(Boolean);

      if (names.length !== 6) {
        throw new Error("Enter exactly 6 Pokémon.");
      }

      const manualTeam = [];
      for (const name of names) {
        const pokemon = await fetchPokemon(name, false);
        manualTeam.push(pokemon);
      }

      return manualTeam;
    }

    async function compareManualTeam() {
      if (isLoading) return;
      if (!currentTeam.length || !currentScoreData) {
        manualResultEl.textContent = "Generate an opponent team first.";
        return;
      }

      isLoading = true;
      compareBtn.disabled = true;
      manualResultEl.textContent = "Comparing teams...";

      try {
        const manualTeam = await buildManualTeamFromInputs();
        const manualScore = evaluateTeam(manualTeam);

        currentManualTeam = manualTeam;
        currentManualScore = manualScore;

        const diff = manualScore.overall - currentScoreData.overall;
        const cursedDiff = currentScoreData.cursed - manualScore.cursed;

        let verdict = "";
        if (diff >= 12) verdict = "Massacre. Your team absolutely dismantled the generator.";
        else if (diff >= 1) verdict = "Win. Your team takes it.";
        else if (diff === 0) verdict = "Draw. Equal power, equal cursedness, equally suspicious.";
        else verdict = "Loss. The generator cooked, unfortunately.";

        manualResultEl.innerHTML = `
          <strong>Your Team:</strong> Overall ${manualScore.overall} · Power ${manualScore.power} · Balance ${manualScore.balance} · Coverage ${manualScore.coverage} · Cursed ${manualScore.cursed}<br><br>
          <strong>Generator Team:</strong> Overall ${currentScoreData.overall} · Power ${currentScoreData.power} · Balance ${currentScoreData.balance} · Coverage ${currentScoreData.coverage} · Cursed ${currentScoreData.cursed}<br><br>
          <strong>Verdict:</strong> ${verdict}<br>
          <strong>Diff:</strong> ${diff >= 0 ? "+" : ""}${diff} Overall · ${cursedDiff >= 0 ? "+" : ""}${cursedDiff} less curse in your favor
        `;
      } catch (error) {
        console.error(error);
        currentManualTeam = [];
        currentManualScore = null;
        manualResultEl.textContent = error.message || "Couldn't load at least one Pokémon.";
      } finally {
        isLoading = false;
        compareBtn.disabled = false;
      }
    }

    function getAverageSpeed(team) {
      return average(team.map((p) => p.stats.speed ?? 0));
    }

    function getBestOffense(team) {
      return average(team.map((p) => Math.max(p.stats.attack ?? 0, p.stats["special-attack"] ?? 0)));
    }

    function getBulk(team) {
      return average(team.map((p) => ((p.stats.hp ?? 0) + (p.stats.defense ?? 0) + (p.stats["special-defense"] ?? 0)) / 3));
    }

    function getTypeMultiplier(attackingType, defendingTypes) {
      let multiplier = 1;
      for (const defendingType of defendingTypes) {
        const chart = typeEffectiveness[attackingType] || {};
        multiplier *= chart[defendingType] ?? 1;
      }
      return multiplier;
    }

    function getBestMatchupMultiplier(attacker, defender) {
      let best = 1;
      for (const atkType of attacker.types) {
        const multiplier = getTypeMultiplier(atkType, defender.types);
        if (multiplier > best) best = multiplier;
      }
      return best;
    }

    function calculateTeamTypeAdvantage(teamA, teamB) {
      let score = 0;

      for (const a of teamA) {
        let bestAgainstTeam = 1;
        for (const b of teamB) {
          const matchup = getBestMatchupMultiplier(a, b);
          if (matchup > bestAgainstTeam) bestAgainstTeam = matchup;
        }
        score += bestAgainstTeam;
      }

      return score / teamA.length;
    }

    function getBattleFlavor(team, score, label) {
      const fast = getAverageSpeed(team);
      const offense = getBestOffense(team);
      const bulk = getBulk(team);

      if (fast > 105) return `${label} plays extremely fast and applies early pressure.`;
      if (offense > 110) return `${label} has brutal offensive firepower.`;
      if (bulk > 95) return `${label} looks bulky and hard to break.`;
      if (score.cursed > 65) return `${label} is cursed enough to be completely unpredictable.`;
      return `${label} looks solid overall, but not without weaknesses.`;
    }

    function simulateBattle(teamA, scoreA, teamB, scoreB) {
      const logs = [];

      const overallDiff = scoreA.overall - scoreB.overall;
      const powerDiff = scoreA.power - scoreB.power;
      const balanceDiff = scoreA.balance - scoreB.balance;
      const coverageDiff = scoreA.coverage - scoreB.coverage;
      const curseDiff = scoreB.cursed - scoreA.cursed;

      const avgSpeedA = getAverageSpeed(teamA);
      const avgSpeedB = getAverageSpeed(teamB);
      const speedDiff = avgSpeedA - avgSpeedB;

      const offenseA = getBestOffense(teamA);
      const offenseB = getBestOffense(teamB);
      const offenseDiff = offenseA - offenseB;

      const bulkA = getBulk(teamA);
      const bulkB = getBulk(teamB);
      const bulkDiff = bulkA - bulkB;

      const typeAdvA = calculateTeamTypeAdvantage(teamA, teamB);
      const typeAdvB = calculateTeamTypeAdvantage(teamB, teamA);
      const typeAdvDiff = (typeAdvA - typeAdvB) * 18;

      const chaosSwing = (Math.random() * 24) - 12;

      let finalScoreA = 0;
      finalScoreA += overallDiff * 1.3;
      finalScoreA += powerDiff * 0.85;
      finalScoreA += balanceDiff * 0.7;
      finalScoreA += coverageDiff * 0.55;
      finalScoreA += curseDiff * 0.7;
      finalScoreA += speedDiff * 0.18;
      finalScoreA += offenseDiff * 0.12;
      finalScoreA += bulkDiff * 0.08;
      finalScoreA += typeAdvDiff;
      finalScoreA += chaosSwing;

      logs.push(`Generator-Team: ${getBattleFlavor(teamA, scoreA, "Generator Team")}`);
      logs.push(`Your Team: ${getBattleFlavor(teamB, scoreB, "Your Team")}`);

      if (Math.abs(typeAdvDiff) > 4) {
        if (typeAdvDiff > 0) logs.push("The generator team has noticeably better type angles.");
        else logs.push("Your team finds the better type matchups and punishes cleanly.");
      }

      if (Math.abs(speedDiff) > 12) {
        if (speedDiff > 0) logs.push("The generator controls the pace and usually outspeeds first.");
        else logs.push("Your team is faster and forces early momentum.");
      }

      if (Math.abs(powerDiff) > 8) {
        if (powerDiff > 0) logs.push("The generator team's raw power is hard to ignore.");
        else logs.push("Your team hits harder and has the better closers.");
      }

      if (Math.abs(curseDiff) > 10) {
        if (curseDiff > 0) logs.push("The generator suffers from more curse and feels inconsistent.");
        else logs.push("Your team is cursed enough to occasionally trip over itself.");
      }

      if (Math.abs(chaosSwing) > 7) {
        if (chaosSwing > 0) logs.push("RNG gods were on the generator's side today.");
        else logs.push("A lucky chaos swing tips the match your way.");
      }

      let winner = "draw";
      if (finalScoreA > 5) winner = "generator";
      else if (finalScoreA < -5) winner = "manual";

      let winnerText = "";
      if (winner === "generator") winnerText = "Generator Team wins 🏆";
      else if (winner === "manual") winnerText = "Your Team wins 🏆";
      else winnerText = "Draw 🤝";

      let summary = "";
      if (winner === "generator") {
        summary = finalScoreA > 18
          ? "Clear victory. The generator took your team apart."
          : "Close match, but the generator edges it out in the end.";
      } else if (winner === "manual") {
        summary = finalScoreA < -18
          ? "Statement win. Your team went off."
          : "Tight match, but your team pulls ahead at the end.";
      } else {
        summary = "Too close to call. Both teams feel equally dangerous.";
      }

      return {
        winner,
        winnerText,
        summary,
        logs,
        metrics: {
          typeAdvA: typeAdvA.toFixed(2),
          typeAdvB: typeAdvB.toFixed(2),
          avgSpeedA: Math.round(avgSpeedA),
          avgSpeedB: Math.round(avgSpeedB),
          chaosSwing: chaosSwing.toFixed(1)
        }
      };
    }

    function renderBattleResult(result, generatorScore, manualScore) {
      const logHtml = result.logs
        .map((entry) => `<div class="battle-log-entry">${entry}</div>`)
        .join("");

      battleBoxEl.innerHTML = `
        <div class="battle-scoreboard">
          <div class="battle-team">
            <strong>Generator-Team</strong>
            Overall ${generatorScore.overall} · Power ${generatorScore.power} · Balance ${generatorScore.balance} · Coverage ${generatorScore.coverage} · Cursed ${generatorScore.cursed}
          </div>
          <div class="battle-vs">VS</div>
          <div class="battle-team">
            <strong>Your Team</strong>
            Overall ${manualScore.overall} · Power ${manualScore.power} · Balance ${manualScore.balance} · Coverage ${manualScore.coverage} · Cursed ${manualScore.cursed}
          </div>
        </div>

        <div style="color: var(--muted); margin-bottom: 8px;">
          Type Advantage: ${result.metrics.typeAdvA} vs ${result.metrics.typeAdvB} · Speed: ${result.metrics.avgSpeedA} vs ${result.metrics.avgSpeedB} · Chaos Swing: ${result.metrics.chaosSwing}
        </div>

        <div class="battle-log">${logHtml}</div>

        <div class="winner-banner">
          ${result.winnerText}<br>
          <span style="color: var(--text); font-weight: 600;">${result.summary}</span>
        </div>
      `;
    }

    async function simulateManualBattle() {
      if (isLoading) return;
      if (!currentTeam.length || !currentScoreData) {
        battleBoxEl.textContent = "Generate an opponent team first.";
        return;
      }

      isLoading = true;
      battleBtn.disabled = true;
      battleBoxEl.textContent = "Simulating battle...";

      try {
        let manualTeam = currentManualTeam;
        let manualScore = currentManualScore;

        if (!manualTeam.length || !manualScore) {
          manualTeam = await buildManualTeamFromInputs();
          manualScore = evaluateTeam(manualTeam);
          currentManualTeam = manualTeam;
          currentManualScore = manualScore;
        }

        const result = simulateBattle(currentTeam, currentScoreData, manualTeam, manualScore);
        renderBattleResult(result, currentScoreData, manualScore);
      } catch (error) {
        console.error(error);
        battleBoxEl.textContent = error.message || "Couldn't simulate the battle.";
      } finally {
        isLoading = false;
        battleBtn.disabled = false;
      }
    }

    // ── FEATURE: Export as PNG ────────────────────────────────────────────────

    async function exportTeamAsImage() {
      if (!currentTeam.length) {
        setStatus("Nothing to export.", "Generate a team first.");
        return;
      }

      if (typeof html2canvas === "undefined") {
        setStatus("Export not available.", "html2canvas failed to load.");
        return;
      }

      exportPngBtn.disabled = true;
      exportPngBtn.textContent = "⏳ Rendering...";

      try {
        const section = document.querySelector(".team-section");
        const canvas = await html2canvas(section, {
          backgroundColor: "#080b14",
          scale: 2,
          useCORS: true,
          allowTaint: false,
          logging: false
        });

        const link = document.createElement("a");
        const today = new Date().toISOString().slice(0, 10);
        link.download = `mb-randomizer-team-${today}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        showToast("📸 PNG saved!");
      } catch (err) {
        console.error(err);
        setStatus("Export failed.", err.message || "Try again.");
      } finally {
        exportPngBtn.disabled = false;
        exportPngBtn.textContent = "📸 Export PNG";
      }
    }

    function createMiniPickCard(pokemon) {
      const card = document.createElement("div");
      card.className = "mini-pick-card";

      const imageWrap = document.createElement("div");
      imageWrap.className = "pokemon-image-wrap";

      const img = document.createElement("img");
      img.className = "pokemon-image";
      img.src = pokemon.image;
      img.alt = pokemon.name;
      imageWrap.appendChild(img);

      const nameEl = document.createElement("div");
      nameEl.className = "pokemon-name";
      nameEl.textContent = capitalize(pokemon.name);

      const typesEl = document.createElement("div");
      typesEl.className = "types";
      pokemon.types.forEach((type) => typesEl.appendChild(createTypeBadge(type)));

      const statsEl = document.createElement("div");
      statsEl.className = "stats";
      statsEl.innerHTML = `
        <div class="stat-line"><span>BST</span><strong>${pokemon.bst}</strong></div>
        <div class="stat-line"><span>Score</span><strong>${getSelectionScore(pokemon)}</strong></div>
      `;

      card.appendChild(imageWrap);
      card.appendChild(nameEl);
      card.appendChild(typesEl);
      card.appendChild(statsEl);

      return card;
    }

    function renderDraftPicks() {
      draftPicksGridEl.innerHTML = "";

      if (!draftTeam.length) {
        for (let i = 0; i < 6; i++) {
          const placeholder = document.createElement("div");
          placeholder.className = "mini-pick-card placeholder-pick";
          placeholder.textContent = `Slot ${i + 1}`;
          draftPicksGridEl.appendChild(placeholder);
        }
        return;
      }

      draftTeam.forEach((pokemon) => {
        draftPicksGridEl.appendChild(createMiniPickCard(pokemon));
      });

      for (let i = draftTeam.length; i < 6; i++) {
        const placeholder = document.createElement("div");
        placeholder.className = "mini-pick-card placeholder-pick";
        placeholder.textContent = `Slot ${i + 1}`;
        draftPicksGridEl.appendChild(placeholder);
      }
    }

    function createTierPill(label, tierClass) {
      const pill = document.createElement("span");
      pill.className = `tier-pill ${tierClass}`;
      pill.textContent = label;
      return pill;
    }

    function createDraftChoiceCard(choice, index) {
      const { pokemon, slotType } = choice;
      const card = document.createElement("div");
      card.className = "draft-choice-card";

      const imageWrap = document.createElement("div");
      imageWrap.className = "pokemon-image-wrap";

      const img = document.createElement("img");
      img.className = "pokemon-image";
      img.src = pokemon.image;
      img.alt = pokemon.name;
      imageWrap.appendChild(img);

      const nameEl = document.createElement("div");
      nameEl.className = "pokemon-name";
      nameEl.textContent = capitalize(pokemon.name);

      const pillRow = document.createElement("div");
      pillRow.className = "pill-row";

      if (slotType === "power") {
        pillRow.appendChild(createTierPill("Power Pick", "tier-power"));
      } else if (slotType === "balanced") {
        pillRow.appendChild(createTierPill("Balanced Pick", "tier-balanced"));
      } else {
        pillRow.appendChild(createTierPill("Chaos Pick", "tier-chaos"));
      }

      const typesEl = document.createElement("div");
      typesEl.className = "types";
      pokemon.types.forEach((type) => typesEl.appendChild(createTypeBadge(type)));

      const statsEl = document.createElement("div");
      statsEl.className = "stats";
      statsEl.innerHTML = `
        <div class="stat-line"><span>BST</span><strong>${pokemon.bst}</strong></div>
        <div class="stat-line"><span>Speed</span><strong>${pokemon.stats.speed ?? 0}</strong></div>
        <div class="stat-line"><span>Role</span><strong>${capitalize(getRole(pokemon))}</strong></div>
        <div class="stat-line"><span>Score</span><strong>${getSelectionScore(pokemon)}</strong></div>
      `;

      const footer = document.createElement("div");
      footer.className = "draft-choice-footer";

      const btn = document.createElement("button");
      btn.className = "success-btn";
      btn.textContent = "Dieses picken";
      btn.addEventListener("click", () => pickDraftChoice(index));

      footer.appendChild(btn);

      card.appendChild(imageWrap);
      card.appendChild(nameEl);
      card.appendChild(pillRow);
      card.appendChild(typesEl);
      card.appendChild(statsEl);
      card.appendChild(footer);

      return card;
    }

    function renderDraftChoices() {
      draftChoicesGridEl.innerHTML = "";

      if (!draftChoices.length) {
        const empty = document.createElement("div");
        empty.className = "small-score-box";
        empty.style.gridColumn = "1 / -1";
        empty.textContent = "No draft choices yet.";
        draftChoicesGridEl.appendChild(empty);
        return;
      }

      draftChoices.forEach((choice, index) => {
        draftChoicesGridEl.appendChild(createDraftChoiceCard(choice, index));
      });
    }

    function updateDraftScoreBox() {
      if (!draftTeam.length) {
        draftScoreBoxEl.innerHTML = "No draft team yet.";
        return;
      }

      const score = evaluateTeam(draftTeam);
      const powerCount = getDraftPowerCount(draftTeam);

      draftScoreBoxEl.innerHTML = `
        <strong>Draft Team Score:</strong><br>
        Overall ${score.overall} · Power ${score.power} · Balance ${score.balance} · Coverage ${score.coverage} · Cursed ${score.cursed}<br>
        Strong picks: ${powerCount}<br>
        <span style="color: var(--muted);">${score.verdict}</span>
      `;
    }

    function resetDraft() {
      draftTeam = [];
      draftChoices = [];
      draftRound = 0;
      draftUsedIds = new Set();
      draftUsedEvoIds = new Set();
      currentManualTeam = [];
      currentManualScore = null;
      renderDraftPicks();
      renderDraftChoices();
      updateDraftScoreBox();
      draftStatusEl.textContent = "Draft reset. Start a new one whenever.";
    }

    function getDraftSlotStrategy(slotType) {
      const strongCount = getDraftPowerCount(draftTeam);

      if (slotType === "power") {
        if (strongCount >= 2) {
          return { poolSize: 6, slotType: "power-soft" };
        }
        return { poolSize: 7, slotType: "power" };
      }

      if (slotType === "balanced") {
        return { poolSize: 6, slotType: "balanced" };
      }

      return { poolSize: 6, slotType: "chaos" };
    }

    // FIX 6 – draft pool uses shared seenInThisRound set → no more duplicates
    async function buildDraftCandidatePool(poolSize, seenInThisRound, evoIdsToSkip = null) {
      const candidates = [];
      let attempts = 0;
      const maxAttempts = 420;
      const skipEvo = evoIdsToSkip || draftUsedEvoIds;

      while (candidates.length < poolSize && attempts < maxAttempts) {
        const id = getRandomPokemonId();

        if (
          draftUsedIds.has(id) ||
          skipEvo.has(id) ||
          draftTeam.some((p) => p.id === id) ||
          candidates.some((p) => p.id === id) ||
          (seenInThisRound && seenInThisRound.has(id))
        ) {
          attempts++;
          continue;
        }

        const pokemon = await fetchPokemon(id, false);

        if (!matchesTypeFilter(pokemon)) {
          attempts++;
          continue;
        }

        candidates.push(pokemon);
        if (seenInThisRound) seenInThisRound.add(id);
        attempts++;
      }

      return candidates;
    }

    function pickFromSortedCandidates(candidates, strategyType) {
      if (!candidates.length) return null;

      const sorted = [...candidates].sort((a, b) => getSelectionScore(b) - getSelectionScore(a));

      if (strategyType === "power") {
        const top = sorted.slice(0, Math.min(3, sorted.length));
        return randomFrom(top);
      }

      if (strategyType === "power-soft") {
        const start = Math.min(2, Math.max(0, sorted.length - 1));
        const end = Math.min(start + 3, sorted.length);
        const softPool = sorted.slice(start, end);
        return randomFrom(softPool.length ? softPool : sorted);
      }

      if (strategyType === "balanced") {
        const start = Math.floor(sorted.length * 0.25);
        const end = Math.max(start + 1, Math.floor(sorted.length * 0.75));
        const midPool = sorted.slice(start, end);
        return randomFrom(midPool.length ? midPool : sorted);
      }

      if (strategyType === "chaos") {
        const start = Math.floor(sorted.length * 0.55);
        const lowerPool = sorted.slice(start);
        return randomFrom(lowerPool.length ? lowerPool : sorted);
      }

      return randomFrom(sorted);
    }

    async function generateDraftChoices() {
      draftChoices = [];

      const slotOrder = ["power", "balanced", "chaos"];
      // FIX 6 – geteiltes Set verhindert dasselbe Mon in mehreren Slots
      const seenInThisRound = new Set();

      for (const slot of slotOrder) {
        const strategy = getDraftSlotStrategy(slot);
        const candidates = await buildDraftCandidatePool(strategy.poolSize, seenInThisRound);

        if (!candidates.length) continue;

        const picked = pickFromSortedCandidates(candidates, strategy.slotType);
        if (!picked) continue;

        if (!draftChoices.some((choice) => choice.pokemon.id === picked.id)) {
          seenInThisRound.add(picked.id);
          draftChoices.push({
            pokemon: picked,
            slotType: slot
          });
        }
      }

      const fallbackPool = await buildDraftCandidatePool(5, seenInThisRound);
      for (const pokemon of fallbackPool) {
        if (draftChoices.length >= 3) break;
        if (!draftChoices.some((choice) => choice.pokemon.id === pokemon.id)) {
          draftChoices.push({ pokemon, slotType: "balanced" });
        }
      }

      renderDraftChoices();
    }

    async function startDraft() {
      if (isLoading) return;
      isLoading = true;

      try {
        if (draftRound === 0 && draftTeam.length === 0) {
          draftStatusEl.textContent = "Draft running... Round 1 of 6.";
        } else {
          draftStatusEl.textContent = `Draft running... Round ${draftRound + 1} of 6.`;
        }

        startDraftBtn.disabled = true;
        await generateDraftChoices();
      } catch (error) {
        console.error(error);
        draftStatusEl.textContent = "Couldn't start the draft.";
      } finally {
        isLoading = false;
        startDraftBtn.disabled = false;
      }
    }

    async function pickDraftChoice(index) {
      const choice = draftChoices[index];
      if (!choice) return;

      const picked = choice.pokemon;
      draftUsedIds.add(picked.id);
      draftTeam.push(picked);
      draftRound = draftTeam.length;
      draftChoices = [];

      // Track evolution chain to block relatives in future rounds
      getEvolutionChainIds(picked.id).then(ids => {
        for (const id of ids) draftUsedEvoIds.add(id);
      });

      renderDraftPicks();
      renderDraftChoices();
      updateDraftScoreBox();

      if (draftTeam.length >= 6) {
        draftStatusEl.textContent = "Draft complete 🔥 Your team is locked in.";
        return;
      }

      draftStatusEl.textContent = `${capitalize(picked.name)} picked. Round ${draftTeam.length + 1} of 6 coming up...`;

      try {
        await generateDraftChoices();
      } catch (error) {
        console.error(error);
        draftStatusEl.textContent = "Couldn't load the next draft round.";
      }
    }

    function useDraftAsManualTeam() {
      if (draftTeam.length !== 6) {
        manualResultEl.textContent = "Your draft team isn't complete yet.";
        return;
      }

      currentManualTeam = [...draftTeam];
      currentManualScore = evaluateTeam(currentManualTeam);

      manualInputs.forEach((input, index) => {
        input.value = currentManualTeam[index]?.name || "";
      });

      manualResultEl.innerHTML = `
        <strong>Draft team applied ✅</strong><br>
        Overall ${currentManualScore.overall} · Power ${currentManualScore.power} · Balance ${currentManualScore.balance} · Coverage ${currentManualScore.coverage} · Cursed ${currentManualScore.cursed}
      `;
    }

    // ── FEATURE: Versus Draft Mode ────────────────────────────────────────────

    function renderVersusTeamGrid(team, gridEl, player) {
      gridEl.innerHTML = "";
      for (let i = 0; i < 6; i++) {
        const pokemon = team[i];
        if (pokemon) {
          gridEl.appendChild(createMiniPickCard(pokemon));
        } else {
          const ph = document.createElement("div");
          ph.className = "mini-pick-card placeholder-pick";
          ph.textContent = `Slot ${i + 1}`;
          gridEl.appendChild(ph);
        }
      }
    }

    function updateVersusScoreBoxes() {
      function fmt(team, el) {
        if (!team.length) { el.textContent = "No picks yet."; return; }
        const s = evaluateTeam(team);
        el.innerHTML = `Overall <strong>${s.overall}</strong> · Power ${s.power} · Balance ${s.balance} · Cursed ${s.cursed}`;
      }
      fmt(versusPlayer1, versus1ScoreEl);
      fmt(versusPlayer2, versus2ScoreEl);
    }

    function updateVersusTurnBadge() {
      const isDone = versusPlayer1.length >= 6 && versusPlayer2.length >= 6;
      versusTurnBadgeEl.className = "turn-badge";
      if (isDone) {
        versusTurnBadgeEl.classList.add("done-turn");
        versusTurnBadgeEl.textContent = "Draft complete 🔥";
      } else if (versusCurrentPlayer === 1) {
        versusTurnBadgeEl.classList.add("p1-turn");
        versusTurnBadgeEl.textContent = `Player 1's pick — Round ${versusRound + 1}/12`;
      } else {
        versusTurnBadgeEl.classList.add("p2-turn");
        versusTurnBadgeEl.textContent = `Player 2's pick — Round ${versusRound + 1}/12`;
      }
    }

    function renderVersusChoices() {
      versusChoicesListEl.innerHTML = "";
      if (!versusChoices.length) {
        const empty = document.createElement("div");
        empty.className = "small-score-box";
        empty.style.textAlign = "center";
        empty.textContent = "No choices yet.";
        versusChoicesListEl.appendChild(empty);
        return;
      }

      const isP2 = versusCurrentPlayer === 2;

      versusChoices.forEach((choice, index) => {
        const { pokemon, slotType } = choice;
        const card = document.createElement("div");
        card.className = `versus-choice-card${isP2 ? " p2-hover" : ""}`;

        const imageWrap = document.createElement("div");
        imageWrap.className = "pokemon-image-wrap";
        const img = document.createElement("img");
        img.className = "pokemon-image";
        img.src = pokemon.image;
        img.alt = pokemon.name;
        imageWrap.appendChild(img);

        const nameEl = document.createElement("div");
        nameEl.className = "pokemon-name";
        nameEl.textContent = capitalize(pokemon.name);

        const pillRow = document.createElement("div");
        pillRow.className = "pill-row";
        let tierClass = "tier-balanced";
        let tierLabel = "Balanced";
        if (slotType === "power") { tierClass = "tier-power"; tierLabel = "Power"; }
        if (slotType === "chaos")  { tierClass = "tier-chaos";  tierLabel = "Chaos"; }
        const pill = document.createElement("span");
        pill.className = `tier-pill ${tierClass}`;
        pill.textContent = tierLabel;
        pillRow.appendChild(pill);

        const typesEl = document.createElement("div");
        typesEl.className = "types";
        pokemon.types.forEach(t => typesEl.appendChild(createTypeBadge(t)));

        const statsEl = document.createElement("div");
        statsEl.className = "stats";
        statsEl.innerHTML = `
          <div class="stat-line"><span>BST</span><strong>${pokemon.bst}</strong></div>
          <div class="stat-line"><span>Score</span><strong>${getSelectionScore(pokemon)}</strong></div>`;

        const btn = document.createElement("button");
        btn.className = `versus-pick-btn ${isP2 ? "p2-btn" : "p1-btn"}`;
        btn.textContent = isP2 ? "Player 2 picks" : "Player 1 picks";
        btn.addEventListener("click", () => pickVersusChoice(index));

        card.appendChild(imageWrap);
        card.appendChild(nameEl);
        card.appendChild(pillRow);
        card.appendChild(typesEl);
        card.appendChild(statsEl);
        card.appendChild(btn);
        versusChoicesListEl.appendChild(card);
      });
    }

    function getVersusSlotStrategy(slotType) {
      const currentTeamForPlayer = versusCurrentPlayer === 1 ? versusPlayer1 : versusPlayer2;
      const strongCount = getDraftPowerCount(currentTeamForPlayer);
      if (slotType === "power") {
        return { poolSize: strongCount >= 2 ? 6 : 7, slotType: strongCount >= 2 ? "power-soft" : "power" };
      }
      if (slotType === "balanced") return { poolSize: 6, slotType: "balanced" };
      return { poolSize: 6, slotType: "chaos" };
    }

    async function generateVersusChoices() {
      versusChoices = [];
      const slotOrder = ["power", "balanced", "chaos"];
      const seenInThisRound = new Set();

      for (const slot of slotOrder) {
        const strategy = getVersusSlotStrategy(slot);
        const candidates = await buildVersusCandidatePool(strategy.poolSize, seenInThisRound);
        if (!candidates.length) continue;
        const picked = pickFromSortedCandidates(candidates, strategy.slotType);
        if (!picked) continue;
        if (!versusChoices.some(c => c.pokemon.id === picked.id)) {
          seenInThisRound.add(picked.id);
          versusChoices.push({ pokemon: picked, slotType: slot });
        }
      }

      // Fallback
      const fallback = await buildVersusCandidatePool(5, seenInThisRound);
      for (const pokemon of fallback) {
        if (versusChoices.length >= 3) break;
        if (!versusChoices.some(c => c.pokemon.id === pokemon.id)) {
          versusChoices.push({ pokemon, slotType: "balanced" });
        }
      }

      renderVersusChoices();
    }

    async function buildVersusCandidatePool(poolSize, seenInThisRound) {
      const candidates = [];
      let attempts = 0;
      const maxAttempts = 420;

      while (candidates.length < poolSize && attempts < maxAttempts) {
        const id = getRandomPokemonId();

        if (
          versusUsedIds.has(id) ||
          versusUsedEvoIds.has(id) ||
          candidates.some(p => p.id === id) ||
          (seenInThisRound && seenInThisRound.has(id))
        ) {
          attempts++;
          continue;
        }

        const pokemon = await fetchPokemon(id, false);
        if (!matchesTypeFilter(pokemon)) { attempts++; continue; }

        candidates.push(pokemon);
        if (seenInThisRound) seenInThisRound.add(id);
        attempts++;
      }
      return candidates;
    }

    async function pickVersusChoice(index) {
      const choice = versusChoices[index];
      if (!choice) return;

      const picked = choice.pokemon;
      versusUsedIds.add(picked.id);

      if (versusCurrentPlayer === 1) {
        versusPlayer1.push(picked);
      } else {
        versusPlayer2.push(picked);
      }
      versusRound++;

      // Track evo chain asynchronously
      getEvolutionChainIds(picked.id).then(ids => {
        for (const id of ids) versusUsedEvoIds.add(id);
      });

      // Alternate players (classic snake draft: P1 P2 P2 P1 P1 P2 P2 P1 P1 P2 P2 P1)
      // Simpler alternation: strictly P1, P2, P1, P2 …
      versusCurrentPlayer = versusCurrentPlayer === 1 ? 2 : 1;

      versusChoices = [];
      renderVersusTeamGrid(versusPlayer1, versus1GridEl, 1);
      renderVersusTeamGrid(versusPlayer2, versus2GridEl, 2);
      updateVersusScoreBoxes();
      updateVersusTurnBadge();
      renderVersusChoices();

      const done = versusPlayer1.length >= 6 && versusPlayer2.length >= 6;
      if (done) {
        versusStatusEl.textContent = "Both teams are locked in 🔥 Hit 'Simulate Battle' to find out who wins.";
        battleVersusBtn.style.display = "";
        return;
      }

      versusStatusEl.textContent = `${capitalize(picked.name)} picked — generating next choices...`;

      try {
        await generateVersusChoices();
      } catch (err) {
        console.error(err);
        versusStatusEl.textContent = "Couldn't load next choices.";
      }
    }

    function resetVersusDraft() {
      versusPlayer1 = [];
      versusPlayer2 = [];
      versusCurrentPlayer = 1;
      versusRound = 0;
      versusChoices = [];
      versusUsedIds = new Set();
      versusUsedEvoIds = new Set();
      versusActive = false;
      renderVersusTeamGrid([], versus1GridEl, 1);
      renderVersusTeamGrid([], versus2GridEl, 2);
      updateVersusScoreBoxes();
      versusTurnBadgeEl.className = "turn-badge";
      versusTurnBadgeEl.style.cssText = "background:rgba(255,255,255,0.05);border:1px solid var(--border);color:var(--muted);";
      versusTurnBadgeEl.textContent = "---";
      versusChoicesListEl.innerHTML = "";
      battleVersusBtn.style.display = "none";
      versusBattleBoxEl.style.display = "none";
      versusStatusEl.textContent = "Two players draft alternately — wie echtes VGC. Jede Runde wählt der aktive Spieler aus 3 Optionen.";
    }

    async function startVersusDraft() {
      if (isLoading) return;
      isLoading = true;
      startVersusBtn.disabled = true;
      versusStatusEl.textContent = "Starting draft — Round 1/12 · Player 1 goes first.";
      versusActive = true;
      updateVersusTurnBadge();

      try {
        await generateVersusChoices();
      } catch (err) {
        console.error(err);
        versusStatusEl.textContent = "Couldn't start the versus draft.";
      } finally {
        isLoading = false;
        startVersusBtn.disabled = false;
      }
    }

    async function simulateVersusBattle() {
      if (versusPlayer1.length < 6 || versusPlayer2.length < 6) {
        versusBattleBoxEl.style.display = "block";
        versusBattleBoxEl.innerHTML = `<div class="result-box">Both teams need 6 Pokémon first.</div>`;
        return;
      }

      const scoreA = evaluateTeam(versusPlayer1);
      const scoreB = evaluateTeam(versusPlayer2);
      const result = simulateBattle(versusPlayer1, scoreA, versusPlayer2, scoreB);

      const winnerText = result.winner === "generator"
        ? "Player 1 wins 🏆"
        : result.winner === "manual"
        ? "Player 2 wins 🏆"
        : "Draw 🤝";

      const logHtml = result.logs.map(e => `<div class="battle-log-entry">${e}</div>`).join("");

      versusBattleBoxEl.style.display = "block";
      versusBattleBoxEl.innerHTML = `
        <div class="battle-scoreboard">
          <div class="battle-team" style="border-color:rgba(108,143,255,0.25);">
            <strong style="color:var(--accent);">Player 1</strong>
            Overall ${scoreA.overall} · Power ${scoreA.power} · Balance ${scoreA.balance} · Coverage ${scoreA.coverage} · Cursed ${scoreA.cursed}
          </div>
          <div class="battle-vs">VS</div>
          <div class="battle-team" style="border-color:rgba(248,113,113,0.25);">
            <strong style="color:var(--danger);">Player 2</strong>
            Overall ${scoreB.overall} · Power ${scoreB.power} · Balance ${scoreB.balance} · Coverage ${scoreB.coverage} · Cursed ${scoreB.cursed}
          </div>
        </div>
        <div style="color:var(--muted);margin-bottom:8px;font-size:0.78rem;">
          Type Advantage: ${result.metrics.typeAdvA} vs ${result.metrics.typeAdvB} · Speed: ${result.metrics.avgSpeedA} vs ${result.metrics.avgSpeedB} · Chaos Swing: ${result.metrics.chaosSwing}
        </div>
        <div class="battle-log">${logHtml}</div>
        <div class="winner-banner">${winnerText}<br><span style="color:var(--text);font-weight:600;">${result.summary}</span></div>
      `;
    }

    function clearTypeSelection() {
      typeCheckboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      setStatus("Type filter cleared.", "All types are back in the pool.");
    }

    generateBtn.addEventListener("click", generateTeam);

    // ── FEATURE: Moves Loading ────────────────────────────────────────────────

    async function fetchMovesForPokemon(pokemon) {
      if (movesCache.has(pokemon.id)) return movesCache.get(pokemon.id);

      try {
        const res = await fetchWithTimeout(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
        if (!res.ok) return [];
        const data = await res.json();

        // Score each move: prefer high power damaging moves learned by level-up
        const scored = data.moves
          .map(m => {
            const levelUp = m.version_group_details.find(d => d.move_learn_method.name === "level-up");
            return { name: m.move.name, levelUp: !!levelUp, level: levelUp?.level_learned_at ?? 999 };
          })
          .filter(m => m.levelUp)
          .sort((a, b) => b.level - a.level)
          .slice(0, 4)
          .map(m => m.name);

        movesCache.set(pokemon.id, scored);
        return scored;
      } catch (_) {
        return [];
      }
    }

    async function loadMovesForCard(pokemon, container) {
      const moves = await fetchMovesForPokemon(pokemon);
      if (!container.isConnected) return; // card may have been removed

      if (!moves.length) {
        container.innerHTML = `<div class="move-loading">No move data.</div>`;
        return;
      }

      container.innerHTML = moves.map(name => {
        // Try to guess type from name for the dot color — use pokemon's primary type as fallback
        const color = typeColors[pokemon.types[0]] || "#888";
        return `<div class="move-pill">
          <div class="move-type-dot" style="background:${color}"></div>
          <span style="flex:1;overflow:hidden;text-overflow:ellipsis">${name.replace(/-/g, " ")}</span>
        </div>`;
      }).join("");
    }

    // ── FEATURE: Weakness Analysis ────────────────────────────────────────────

    function computeTeamWeaknesses(team) {
      // Returns {type -> number_of_mons_weak_to_it} for 2x+ weaknesses
      const counts = {};
      const allTypes = Object.keys(typeEffectiveness);

      for (const pokemon of team) {
        for (const atkType of allTypes) {
          let mult = 1;
          for (const defType of pokemon.types) {
            mult *= typeEffectiveness[atkType]?.[defType] ?? 1;
          }
          if (mult >= 2) {
            counts[atkType] = (counts[atkType] || 0) + 1;
          }
        }
      }

      return counts;
    }

    function renderWeaknessAnalysis(team) {
      if (!team.length) return;
      const counts = computeTeamWeaknesses(team);

      // Sort by how many mons are weak — show worst first
      const sorted = Object.entries(counts)
        .sort((a, b) => b[1] - a[1]);

      if (!sorted.length) {
        weaknessGrid.innerHTML = `<span class="weakness-empty">No significant team weaknesses detected. Impressive.</span>`;
        return;
      }

      weaknessGrid.innerHTML = sorted.map(([type, count]) => {
        const color = typeColors[type] || "#888";
        const opacity = count >= 4 ? "1" : count >= 3 ? "0.9" : count >= 2 ? "0.75" : "0.55";
        return `<span class="weakness-pill" style="background:${color};opacity:${opacity}">
          ${type}
          <span class="weakness-count">${count}</span>
        </span>`;
      }).join("");
    }

    // ── FEATURE: History ──────────────────────────────────────────────────────

    function pushHistory(team, score) {
      // Don't add the same team twice in a row
      if (teamHistory.length > 0) {
        const last = teamHistory[0];
        if (last.team.map(p => p.id).join() === team.map(p => p.id).join()) return;
      }

      teamHistory.unshift({ team: [...team], score: { ...score } });
      if (teamHistory.length > MAX_HISTORY) teamHistory.pop();
      renderHistory();
    }

    function renderHistory() {
      if (!teamHistory.length) {
        if (historyEmpty) historyEmpty.style.display = "";
        return;
      }

      if (historyEmpty) historyEmpty.style.display = "none";

      historySlots.innerHTML = teamHistory.map((entry, idx) => {
        const sprites = entry.team.slice(0, 3).map(p =>
          p.image ? `<img class="history-sprite" src="${p.image}" alt="${p.name}" />` : ""
        ).join("");
        return `<div class="history-slot" data-idx="${idx}" title="Overall ${entry.score.overall} · Cursed ${entry.score.cursed}">
          <div style="display:flex;">${sprites}</div>
          <span class="history-slot-score">${entry.score.overall}</span>
        </div>`;
      }).join("");

      historySlots.querySelectorAll(".history-slot").forEach(slot => {
        slot.addEventListener("click", () => {
          const idx = parseInt(slot.dataset.idx, 10);
          const entry = teamHistory[idx];
          if (!entry) return;
          currentTeam = [...entry.team];
          currentScoreData = { ...entry.score };
          renderTeam(currentTeam, true);
          updateScoreUI(currentScoreData);
          updateUrlHash(currentTeam);
          if (currentChallenge) {
            challengeTextEl.textContent = `${currentChallenge.title}: ${currentChallenge.text}`;
          }
          setStatus(`History team restored — Overall ${currentScoreData.overall}`, `${currentTeam.filter(p => p.isShiny).length} Shiny · Avg BST ${currentScoreData.avgBst}`);
        });
      });
    }

    // ── FEATURE: Daily Seed ───────────────────────────────────────────────────

    function getDailySeed() {
      const now = new Date();
      // YYYYMMDD as integer — same for everyone in the same UTC day
      return now.getUTCFullYear() * 10000 + (now.getUTCMonth() + 1) * 100 + now.getUTCDate();
    }

    function seededRandom(seed) {
      // Simple mulberry32 PRNG
      let s = seed >>> 0;
      return function() {
        s += 0x6D2B79F5;
        let z = s;
        z = Math.imul(z ^ (z >>> 15), z | 1);
        z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
        return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
      };
    }

    function getDailyTeamIds() {
      const seed = getDailySeed();
      const rng = seededRandom(seed);
      const [min, max] = generationRanges["all"];
      const ids = new Set();
      let attempts = 0;
      while (ids.size < 6 && attempts < 500) {
        const id = Math.floor(rng() * (max - min + 1)) + min;
        ids.add(id);
        attempts++;
      }
      return [...ids];
    }

    function initDailyBanner() {
      const seed = getDailySeed();
      const date = new Date();
      const dateStr = date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
      dailyTitleEl.textContent = `Today's Team — ${dateStr}`;
      dailySubEl.textContent = `Seed #${seed} · Same worldwide. Compare with friends!`;
    }

    async function loadDailyTeam() {
      if (isLoading) return;
      isLoading = true;
      setButtonsDisabled(true);
      setStatus("Loading today's daily team...", "Same seed for everyone today.");

      try {
        const ids = getDailyTeamIds();
        const team = [];
        for (let i = 0; i < ids.length; i++) {
          setStatus(`Loading daily team... (${i + 1}/6)`, "Today's seed, worldwide.");
          const pokemon = await fetchPokemon(ids[i], false);
          team.push(pokemon);
          renderTeam(team, false);
        }

        renderTeam(team, true);
        currentTeam = team;
        currentScoreData = evaluateTeam(team);
        updateScoreUI(currentScoreData);
        generateChallenge(currentScoreData);
        updateUrlHash(team);
        pushHistory(team, currentScoreData);

        const seed = getDailySeed();
        setStatus("Daily team loaded 📅", `Seed #${seed} · ${team.filter(p => p.isShiny).length} Shiny · Avg BST ${currentScoreData.avgBst}`);
        exportPngBtn.style.display = "";
      } catch (err) {
        console.error(err);
        setStatus("Couldn't load daily team.", err.message || "Try again.");
      } finally {
        isLoading = false;
        setButtonsDisabled(false);
      }
    }

    generateBtn.addEventListener("click", generateTeam);
    clearTypesBtn.addEventListener("click", clearTypeSelection);

    newChallengeBtn.addEventListener("click", () => {
      if (!currentScoreData) {
        setStatus("No team yet.", "Generate one first.");
        return;
      }
      generateChallenge(currentScoreData);
      setStatus("New challenge unlocked 🧠", "Time to outplay the generator.");
    });

    saveBtn.addEventListener("click", saveTeam);
    loadBtn.addEventListener("click", loadSavedTeam);
    clearBtn.addEventListener("click", clearSavedTeam);
    compareBtn.addEventListener("click", compareManualTeam);
    battleBtn.addEventListener("click", simulateManualBattle);
    shareBtn.addEventListener("click", shareTeam);
    dailyBtn.addEventListener("click", loadDailyTeam);

    startDraftBtn.addEventListener("click", startDraft);
    resetDraftBtn.addEventListener("click", resetDraft);
    useDraftBtn.addEventListener("click", useDraftAsManualTeam);

    exportPngBtn.addEventListener("click", exportTeamAsImage);

    // ── Mode Tabs ─────────────────────────────────────────────────────────────

    function switchTab(name) {
      document.querySelectorAll(".tab-section").forEach(s => {
        s.style.display = s.id === "tab" + name.charAt(0).toUpperCase() + name.slice(1) ? "" : "none";
      });
      document.querySelectorAll(".mode-tab").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === name);
      });
    }

    document.querySelectorAll(".mode-tab").forEach(tab => {
      tab.addEventListener("click", () => switchTab(tab.dataset.tab));
    });

    startVersusBtn.addEventListener("click", startVersusDraft);
    resetVersusBtn.addEventListener("click", resetVersusDraft);
    battleVersusBtn.addEventListener("click", simulateVersusBattle);

    // ── FEATURE 1: URL-Share ─────────────────────────────────────────────────

    function updateUrlHash(team) {
      if (!team.length) return;
      // Format: #team=25s,6,149,143,131,94  (s = shiny)
      const hash = team.map(p => p.id + (p.isShiny ? "s" : "")).join(",");
      history.replaceState(null, "", "#team=" + hash);
    }

    function showToast(msg) {
      shareToastEl.textContent = msg;
      shareToastEl.classList.add("visible");
      setTimeout(() => shareToastEl.classList.remove("visible"), 2400);
    }

    function shareTeam() {
      if (!currentTeam.length) {
        setStatus("No team to share.", "Generate one first.");
        return;
      }
      updateUrlHash(currentTeam);
      const url = location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => showToast("🔗 Link copied!"));
      } else {
        // Fallback für Browser ohne Clipboard API
        const ta = document.createElement("textarea");
        ta.value = url;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try { document.execCommand("copy"); } catch(e) {}
        document.body.removeChild(ta);
        showToast("🔗 Link copied!");
      }
    }

    async function loadTeamFromHash() {
      const hash = location.hash;
      if (!hash.startsWith("#team=")) return false;

      const raw = hash.slice(6);
      const parts = raw.split(",").filter(Boolean);
      if (parts.length !== 6) return false;

      setStatus("Loading team from link...", "Hold on.");
      setButtonsDisabled(true);
      isLoading = true;

      try {
        const team = [];
        for (const part of parts) {
          const isShiny = part.endsWith("s");
          const id = parseInt(isShiny ? part.slice(0, -1) : part, 10);
          if (isNaN(id)) throw new Error("Invalid ID in link.");
          const pokemon = await fetchPokemon(id, isShiny);
          team.push(pokemon);
        }

        currentTeam = team;
        currentScoreData = evaluateTeam(team);
        renderTeam(team, true);
        updateScoreUI(currentScoreData);
        generateChallenge(currentScoreData);

        const shinyCount = team.filter(p => p.isShiny).length;
        setStatus(
          "Team loaded from link 🔗",
          `${shinyCount} Shiny · Avg BST ${currentScoreData.avgBst}`
        );
        exportPngBtn.style.display = "";
        return true;
      } catch (err) {
        console.error(err);
        setStatus("Couldn't load the team from the link.", err.message);
        return false;
      } finally {
        isLoading = false;
        setButtonsDisabled(false);
      }
    }

    // ── FEATURE 2: Autocomplete ───────────────────────────────────────────────

    // Grows with the cache — no separate loading needed
    function getCachedNames() {
      const names = [];
      for (const [key, val] of pokemonCache.entries()) {
        // Only take name keys (not numeric IDs)
        if (isNaN(key) && val.name === key) names.push(val.name);
      }
      return names;
    }

    function setupAutocomplete(input) {
      let activeIndex = -1;
      let list = null;

      function closeList() {
        if (list) { list.remove(); list = null; }
        activeIndex = -1;
      }

      function openList(matches) {
        closeList();
        if (!matches.length) return;

        list = document.createElement("div");
        list.className = "autocomplete-list";

        matches.forEach((name, i) => {
          const item = document.createElement("div");
          item.className = "autocomplete-item";
          item.textContent = name;
          item.addEventListener("mousedown", (e) => {
            e.preventDefault();
            input.value = name;
            closeList();
          });
          list.appendChild(item);
        });

        input.parentElement.appendChild(list);
      }

      input.addEventListener("input", () => {
        const val = input.value.trim().toLowerCase();
        if (val.length < 2) { closeList(); return; }

        const names = getCachedNames();
        const matches = names
          .filter(n => n.startsWith(val))
          .sort()
          .slice(0, 8);

        openList(matches);
        activeIndex = -1;
      });

      input.addEventListener("keydown", (e) => {
        if (!list) return;
        const items = list.querySelectorAll(".autocomplete-item");

        if (e.key === "ArrowDown") {
          e.preventDefault();
          activeIndex = Math.min(activeIndex + 1, items.length - 1);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          activeIndex = Math.max(activeIndex - 1, -1);
        } else if (e.key === "Enter" && activeIndex >= 0) {
          e.preventDefault();
          input.value = items[activeIndex].textContent;
          closeList();
          return;
        } else if (e.key === "Escape") {
          closeList();
          return;
        }

        items.forEach((item, i) => {
          item.classList.toggle("active", i === activeIndex);
        });
        if (activeIndex >= 0) items[activeIndex].scrollIntoView({ block: "nearest" });
      });

      input.addEventListener("blur", () => {
        // Small delay so mousedown on item can still fire
        setTimeout(closeList, 150);
      });
    }

    // Enable autocomplete for all manual inputs
    manualInputs.forEach(setupAutocomplete);

    // ── FEATURE 3: Hintergrund-Preload ───────────────────────────────────────

    const PRELOAD_COUNT = 30;
    let preloadDone = false;

    async function preloadBackground() {
      if (preloadDone) return;

      preloadIndicatorEl.classList.add("visible");

      const [min, max] = generationRanges[generationSelect.value];
      const ids = new Set();
      while (ids.size < PRELOAD_COUNT) {
        ids.add(getRandomInt(min, max));
      }

      let loaded = 0;
      const total = ids.size;

      await Promise.allSettled([...ids].map(async (id) => {
        try {
          await fetchPokemon(id, false);
          loaded++;
          preloadTextEl.textContent = `Warming cache: ${loaded}/${total}`;
        } catch (_) {}
      }));

      preloadDone = true;
      preloadIndicatorEl.classList.remove("visible");
    }

    // Refill cache on gen change
    generationSelect.addEventListener("change", () => {
      preloadDone = false;
      preloadBackground();
    });

    // ── Init ─────────────────────────────────────────────────────────────────

    renderDraftPicks();
    renderDraftChoices();
    updateDraftScoreBox();
    initDailyBanner();
    renderHistory();
    renderVersusTeamGrid([], versus1GridEl, 1);
    renderVersusTeamGrid([], versus2GridEl, 2);

    // Check URL hash — if no team in link, start normally + preload
    loadTeamFromHash().then(loaded => {
      if (!loaded) {
        preloadBackground();
      }
    });
