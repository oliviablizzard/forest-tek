# Project Title

Forest-TEK

## Overview

What is your app? Give a brief description in a couple of sentences.

A resource portal designed to foster collaboration between woodlot owners, industry professionals, indigenous groups, non-profits, students and educators. It serves as a central hub for sharing knowledge, tools, and resources related to forest management and sustainability.


### Problem Space

Why is your app needed? Give any background information around any pain points or other reasons.

Forest management in Canada is highly complex, with insufficient collaboration across different stakeholders. To create a clean, healthy forest for future generations, collaboration is key. Traditional Ecological Knowledge (TEK) is crucial for long-term sustainability, but resistance to technology and generational gaps in knowledge sharing can hinder progress. Forest-TEK aims to bridge these gaps by offering a platform where everyone can contribute, share resources, and collaborate on forest-related projects, tools, and technology.

<!-- Forest management is extremely complex and collaboration within the industry has been lacking in Canada for a long time. With everyone's goal being a clean, stable, healthy forest for the future- we can work together to realize these goals for generations to come. Traditional Ecological Knowledge (TEK) is a key factor in the complexities of forestry. Bridging acquired experience from land managers, retirees, private woodlot owners, indigenous elders is crucial for the long-term sustainability of Canadian forests- especially with climate change and our urgent need for climate solutions. Traditional knowledge holders often are resistant to change, and this is highly prevalent with forest tools and technology. Forest TEK is a space to allow collaboration between generations and support helping out our community, whether its sharing your knowledge, helping someone use a tool, doing land-surveys, assessing current forest health- everyone in our community has something to give and I hope to create a resource-focused tool that acts as a portal to enable these collaborations and learning opportunities and resources. This will include product reviews of paid services, interdependencies/data management strategy, public data sharing, research pooling, global forest trends and news, certification standards, political climates with forestry, conservation areas, indigenous lands, private lands open for public use, restoration projects, watershed/NGO operations and calls for volunteers, etc. If you have something to contribute: we want to provide an opportunity for you to contribute meaningfully (i.e student interviews with retired foresters, student development opportunities, family-run business support, contacting your local representatives, etc.) -->

### User Profile

Who will use your app? How will they use it? Add any special considerations that your app must take into account.

-Aging populations
-Students
-Mobile Equipment Operators
-Indigenous groups
-non profits
-government agency/lobbying groups
-registered professional foresters
-researchers
-business owners
-land managers
-woodlot owners

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

-Knowledge sharing platform
-Project collaboration/volunteer events
-Project bids/interested in becoming a contractor?
-Tool portal and use cases
-Public data sharing and research updates
-Resource map
-News feed
-Certification standards and certified auditors
-User profile for messaging, contribution tracking, mentorship/networking

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

-Front-end: React, Axios, Mapping API
-Back-end: node.js, express, knex.js, SQL db

### APIs

List any external sources of data that will be used in your app.

-Mapping API
-Forest Data
-Environment Canada
-Certification standards?
-News feed
-LinkedIn sign-in/user profile

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

-Events
-About
-Toolbox
-Contact Tree
-Data
-Profile
-Geographic contact/projects/stakeholders

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

in assets folder

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out. 

-Users
-Contacts
-Resources
-Data sources
-Map data

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

POST /api/users: register a new user
GET /api/projects: get a list of projects
POST /api/projects: share a project/project planning
GET /api/toolbox: find tools for your task
POST api/toolbox: share a tool and user guidelines

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

---

## Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

