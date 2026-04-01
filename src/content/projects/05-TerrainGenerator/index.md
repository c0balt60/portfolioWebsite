---
title: "Roblox: Terrain Generator"
summary: "Personal place for testing a Terrain based map generator"
date: "Mar 2 2026"
draft: false
tags:
- Roblox
- Luau
demoUrl: https://www.roblox.com/games/131644472127990/Terrain-Generator
---

A terrain generator that I want to use for future projects

## Features

### Full-release 1.x.y version

Full release will present a fully envisioned, standalone multipurpose terrain generator, with all features from previous version, but without bugs.

### Pre-release 0.x.y version (current state)

Base features that I want to implement and polish out before full release
- Quick, infinite world generation
- Configuration for generation (i.e. load finite map for x,z size)
- Biomes
- Biome blending when transitioning biomes
- Biome terrain smoothing (heightmap related)
- Chunk render distance
- <s>Chunk load/unloading</s>
~ Will be included in full release as server will need to take into account simulated objects such as npc's, bullets, etc...
- Object spawning based on seed + biome (trees spawn in forest biome, rocks / ores in mountains)
- Accesible API to implement per-biome actions outside of generator script
(i.e. spawning npc's such as enemies or animals)
