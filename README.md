Forest-TEK Dashboard Tool

Overview

Forest-TEK is a web application dashboard designed to facilitate collaboration among various stakeholders in the forestry industry. The app provides users with access to training opportunities, program offerings, and organizational resources to promote sustainable forest management practices across the East Coast of Canada.

Problem Space

Why is your app needed?

	•	Environmental data is not always shared between organizations, and for the good of the climate, it is best to share information to work together to find data-driven solutions to the complex problems that the forest industry is facing.

User Profile

Who will use your app?

	•	Woodlot Owners: They will use the app to find educational resources and programs that can help them manage their forests sustainably.
	•	Industry Professionals: Users in this category will seek training opportunities and tools that can improve their practices and knowledge in forestry.
	•	Students and Educators: They will utilize the platform to explore academic programs and gather information on current forestry practices and innovations.
	•	Indigenous Groups: Users will look for programs and partnerships that support traditional ecological knowledge and collaborative initiatives.

How will they use it?

	•	Users will browse through program offerings based on their geographic location, search for training opportunities, and access contact information for various organizations in the forestry sector.

What special considerations must your app address for different user groups?

	•	Accessibility: The app should be user-friendly and accessible for individuals with varying levels of technological proficiency.
	•	Localization: Ensure that program offerings are relevant to the East Coast of Canada, considering language preferences and cultural contexts.

Features

	•	Web App Dashboard: A central hub for users to navigate various resources and features.
	•	Training and Education Opportunities: Users can find relevant training programs related to the forest industry.
	•	Geographic Program Exploration: Users can explore program offerings based on their location within the East Coast of Canada.
	•	Highlighted Programs: A section to showcase random programs that may be of interest to users.
	•	Organizations Table: Users can view a table that includes organizations in the forestry sector along with their contact information.
	•	Programs Table: Access to programs for studying forestry across New Brunswick, Nova Scotia, Prince Edward Island, and Newfoundland and Labrador.
	•	Digital Tools Table: A quick reference to digital tools used in forestry, aiding users in finding appropriate resources.

Implementation

Tech Stack

	•	Frontend: React, Sass, Vite
	•	Backend: Node.js, Express
	•	Database: MySQL with Knex for database queries
	•	APIs: Axios for handling HTTP requests

APIs

	•	Forest Sector Council Website Data: Data from this external source will be used to populate training and program offerings in the app.

Sitemap

	1.	Home Page: Introduction to Forest-TEK and its mission.
	2.	Training Opportunities: A list of available training programs and resources.
	3.	Program Directory: A searchable directory of programs available by region.
	4.	Highlighted Programs: Featured programs that are randomly selected.
	5.	Organizations Table: A comprehensive list of forestry organizations with contact details.
	6.	Digital Tools: A reference table for tools utilized in forestry management.

Mockups

	•	Create visuals using Figma or hand-drawn sketches to illustrate the layout and design of key pages, including:
	•	Home Page
	•	Training Opportunities
	•	Program Directory
	•	Organizations Table
	•	Digital Tools Reference

Data

	•	User Data: Information about user accounts, including roles and preferences.
	•	Training Programs Data: Details about various training programs, including descriptions and eligibility criteria.
	•	Organizations Data: Information on organizations, including names, contact information, and descriptions of their services.
	•	Programs Data: Information about forestry-related programs available in NB, NL, NS, and PEI.
	•	Digital Tools Data: Information on digital tools used in the forestry sector.

Endpoints

Endpoint	HTTP Method	Parameters	Example Response
/api/users	GET	N/A	{ "users": [{...}, {...}] }
/api/training	GET	N/A	{ "training": [{...}, {...}] }
/api/programs	GET	?province=NB	{ "programs": [{...}, {...}] }
/api/organizations	GET	N/A	{ "organizations": [{...}, {...}] }
/api/digital-tools	GET	N/A	{ "tools": [{...}, {...}] }

Future Implementations

	•	Mobile Responsiveness: Improve the app for optimal performance on mobile devices.
	•	User Analytics Dashboard: Introduce features that allow users to track their engagement and contributions to the platform.
	•	Enhanced Search Functionality: Develop more sophisticated filtering options for users to easily find resources and programs.
	•	Integration with Additional APIs: Connect with other relevant data sources to enrich content and resource availability.







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

