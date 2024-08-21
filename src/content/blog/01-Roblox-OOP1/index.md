---
title: "Roblox: OOP Introduction"
summary: "Here is an explanation of OOP principles on Roblox luau. "
date: "Aug 2 2024"
draft: false
tags:
- Tutorial
- Roblox
---

Object Oriented Programming is a unique style of programming that enables you to define discrete components by creating "objects."
An object is a peice of code that contains data (information) and methods (actions / functions).
<br>

Think of classes as blueprints for complex "objects", in example, we could create a car class, which contains speed, acceleration and weight data.
We can also add a method to make it drive

### How can we create a class object?

On Roblox, there isn't a specific keyword like in other languages. We have to use `metatables`, which are more powerful tables ( they just contain extra internal functions )
For more information about metatables, visit this site: [Roblox | Metatables](https://create.roblox.com/docs/luau/metatables).
<br>

In this article, I will give you a brief overview of how to create a simple class

## Creating the class

First of all, it is best to create classes inside modules, as you can require modules from different scripts, and it will declutter your main scripts.
<br>

### Simple definition
Here is a simple class, I will be using a "person" as an example:

```lua
-- Class.lua

-- Defining class
local person = {}
person.__index = person

-- Defining constructor
function person.new()
    local self = setmetatable({}, person)

    return self
end

-- Defining method
function person:Action()
    print("Action")
end

-- Return the class 
return person
```

Now in another script ( preferably a server script for now ), we can require and create the person class

```lua
-- Server.lua

local PersonClass = require(path to the module)

local person = PersonClass.new()

-- This is how you can create the 'person' object, 
--   you can now get its data simply by indexing the object,
--   and call methods by using a colon.

-- I will show you how we can add data and methods.

```

In this snippet, we can see that calling the `.new()` constructor creates a new metatable for `person`. <br>

### Adding data

We can add data to the person class as so:

```lua
-- Class.lua

-- Constructor
function person.new(weight: number, height: number)
    local self = setmetatable({}, person)

    --> Define data
    self.Weight = weight
    self.Height = height

    return self
end
```

This data is also visible to the script that has the object itself:

```lua
-- Server.lua

local PersonClass = require(...)

--> Create person with weight of 5, and height of 10
local person = PersonClass.new( 5, 10 )

-- You can also print out these values by indexing the person:
print(`weight: {person.Weight}, height: {person.Height} `)
```

### Adding class methods

We can also add methods to the class, which act like built-in functions. <br>
These are especially useful as we can use the data contained inside the class with the `self` keyword.

Here is a simple method that prints out the person's weight and height:

```lua
-- Class.lua

function person:Print()

    -- The self keyword is automatically defined by default ( if you put a colon )
    -- You can use it to get either the object's data or other methods
    -- Here, lets just print out the persons weight & height

    print(self.Weight, self.Height)
end
```

We can also add another method that can be called from a different method as so:

```lua
-- Class.lua

function person:Print()

    -- Using the self keyword, we can call another method
    self:PrintWeight()
    self:PrintHeight()
end

function person:PrintWeight()
    print(self.Weight)
end

function person:PrintHeight()
    print(self.Height)
end
```


This basically wraps up the first part of my Object Oriented Programming article. <br>