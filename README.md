# GBF-Gacha-Simulator

## Description
A fanmade simulator performing summons in the popular browser/mobile game Granblue Fantasy. Rarities include R (rare), SR (super rare), SSR (super super rare), and the lsit of characters, as well as the chance the rates of different rarities, differ based on the events or galas. 

### Summon process:
1) Decide on the list of characters and rates using the dropboxes at the top
2) Click on the top summon for a 10 summon or the bottom for a single summon
3) Click the crystal to see their summon(s)
  - If the ten roll was selected clicking the page will display the next summon 
  - If the single role was selected the user will be brought back to the home page
4) If using the ten roll the user can click skip to jump to the end page, which displays a list of images and names of aquired summons
5) All notable summons (SSR) are displayed on a list on the right.

Uses react for the frontend, redux for page transitions, and connects to a backend api (either https://github.com/NickyLiu91/GBF_Gacha_API or https://github.com/NickyLiu91/GBF_API_2). The first api is created using Ruby on Rails/PostgreSQL, while the second uses Node.js/MongoDB.

## Demo Video
https://www.youtube.com/watch?v=SNKGeqO6UHw
