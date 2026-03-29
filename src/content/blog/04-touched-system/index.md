---
title: "Using Touched properly"
summary: "This tutorial will clear up how to setup a part.Touched system for new developers"
date: "Mar 27 2026"
draft: false
tags:
- Tutorial
- Roblox
---

For beginners, you might want to do something that requires a player touching a part, but you have no idea how to actually setup this system.
Most beginners won't take in account things like cross-player state (multiple players stepping on your part), debouncing and other things.

Therefore in this tutorial, we will go over a couple ways to setup a touched system.

## 1. Basic touched / left system

In this example, we will cover code that implements debouncing and touched tracking.
Mainly useful for pads that will open GUI's.

```lua
-- ServerScriptService/touched.server.luau
-- This script should be either in Workspace or ServerScriptService

local Players = game:GetService("Players")

-- Path to the part that will be touched
local part = ...

-- Debounce table
local touching = {} -- This will contain all the players that are touching the part

-- Connect the event
part.Touched:Connect(function(hit)
    -- hit is the part that touched your 'part'
    -- We must check if 'hit' is a body part of a player
    local player = Players:GetPlayerFromCharacter(hit.Parent)
    if not player then return end -- Stop if player doesn't exist

    -- Check if player is already touching
    if table.find(player, touching) then return end

    -- Add player to debounce table
    table.insert(player, touching)

    -- Now we can run code that will run only once (when the player first touches this part)
    -- This can be firing a remote event to open up a GUI
end)

-- Connect left event
part.TouchEnded:Connect(function(hit)
    -- We must check if 'hit' is a body part of a player
    local player = Players:GetPlayerFromCharacter(hit.Parent)
    if not player then return end -- Stop if player doesn't exist

    -- Check if player is already touching
    if table.find(player, touching) then
        -- Remove player from table
        table.remove(player, touching)
    end
end)
```

## 2. Do something multiple times while you are touching the pad

This example a quite more advanced, as we want to do an action while the player is touching the part.
For this example, we will assume the part will damage the player as long as they are on it.

```lua
-- ServerScriptService/touched.server.luau
-- This script should be either in Workspace or ServerScriptService

local Players = game:GetService("Players")

-- Path to the part that will be touched
local part = ...

-- Debounce table
local touching = {} -- This will contain all the players that are touching the part

-- This function will run while there are players in the 'touching' array
local function startAction()
    while #touching > 0 do
        -- Iterate through all players who are touching
        for _, player in touching do
            local humanoid = player.Character:FindFirstChild("Humanoid")
            if not humanoid then continue end -- if no humanoid then skip action
            humanoid:TakeDamage(5)
        end

        -- Delay between action
        task.wait(1)
    end
end

-- Connect the event
part.Touched:Connect(function(hit)
    -- hit is the part that touched your 'part'
    -- We must check if 'hit' is a body part of a player
    local player = Players:GetPlayerFromCharacter(hit.Parent)
    if not player then return end -- Stop if player doesn't exist

    -- Check if player is already touching
    if table.find(player, touching) then return end

    -- Add player to debounce table
    table.insert(player, touching)

    -- Start the action only if there are no touching players
    if #touching < 2 then
        task.spawn(startAction) -- Creates a new thread to run the action, so it doesn't interrupt anything here
    end
end)

-- Connect left event
part.TouchEnded:Connect(function(hit)
    -- We must check if 'hit' is a body part of a player
    local player = Players:GetPlayerFromCharacter(hit.Parent)
    if not player then return end -- Stop if player doesn't exist

    -- Check if player is already touching
    if table.find(player, touching) then
        -- Remove player from table
        table.remove(player, touching)
    end
end)
```
