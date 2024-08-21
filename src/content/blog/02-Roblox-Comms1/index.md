---
title: "Roblox Theory: Simple Communication Module"
summary: "Simplifying client-server communication with a module."
date: "Aug 16 2024"
draft: false
tags:
- Tutorial
- Roblox
---

In this tutorial, I will be doing through communication between the client and server.
For this, we will be using OOP principles, as well as remote events.
<br>

### Getting Started

In this tutorial, I have a Folder in `ReplicatedStorage` called "Events" for event storage.

Firstly, we will start off with the server-side communication module. 

### Server

```lua
-- ServerComms.lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Events = ReplicatedStorage.Events

local ServerComms = {}
ServerComms.__index = ServerComms

--> Create a remote event
local function createEvent(name: string): RemoteEvent
    local event = Instance.new("RemoteEvent", Events)
    event.Name = name
    return event
end

--> Constructor function
function ServerComms.new()
    return setmetatable({}, ServerComms)
end

--> Creates a remote event
function ServerComms:_create(name: string)
    local event = createEvent(name)
    return event
end

--> Finds or creates an event
function ServerComms:_getOrCreate(name: string)
    return Events[name] or self:_create(name)
end

--> Subscribe to the event
function ServerComms:subscribe(name: string, func: (plr: Player, ...: any) -> ())
    Events[name]:Connect(func)
end

--> Publish or fire the event
function ServerComms:publish(name: string, ...: any)
    Events[name]:Fire(...)
end

--> Declare an event for future use
function ServerComms:declare(name: string)
    self:_getOrCreate(name)
end

return ServerComms
```

