// The Branch — Adirondack Lodge :: Local Guide content
// Shared across all three design options.
window.GUIDE = {
  brand: { name: "The Branch", sub: "Adirondack Lodge" },

  intro: {
    lede: "A secluded retreat on 87 acres in Elizabethtown, NY.",
    body: "Surrounded by nature. Stunning mountain views and stargazing. Featuring a soaring living room with a cozy fireplace, a game room with arcade, sauna, hot tub, a sprawling back deck and fire pit. The Branch is a few miles from the conveniences of Elizabethtown and a short drive to Lake Placid — your family-friendly base camp for an ADK mountain adventure.",
    note: "Use this guide to plan your outings… then write about them in our journal!",
    branchCopy: "Your private retreat on 87 acres in the Adirondacks, where wilderness meets comfort. Ideal for families, groups & anyone seeking a true escape. The Branch features a soaring living room with fireplace, game room with arcade, sauna, hot tub, swing set & fire pit. Stunning mountain views & stargazing. Minutes from hiking, mountain biking & skiing. At the doorstep of the Adirondack High Peaks. Close to Elizabethtown. A short drive to Lake Placid. A destination in its own right.",
    credit: 'Photo: J.V. DiPietro, <a href="https://www.instagram.com/PhotosHyperuranios" target="_blank" rel="noopener">@PhotosHyperuranios</a>',
    amenities: ["87 acres", "Mountain views", "Stargazing", "Fireplace", "Game room + arcade", "Sauna", "Hot tub", "Back deck", "Fire pit"],
  },

  adirondacks: {
    p1: "The Adirondack Region is one of the most diverse destinations on the East Coast, offering unparalleled outdoor recreation throughout its dazzling lakes, wild mountains, and charming towns and villages.",
    p2: "Established in 1892 by the State of New York amid concerns for the water and timber resources of the region, the Adirondack Park today covers an area larger than Yosemite, Yellowstone, Glacier, Grand Canyon and the Great Smokies National Parks combined — the largest park in the lower 48 states.",
    p3: "Encompassing millions of acres of public, constitutionally protected forest preserve as well as privately owned land, the Adirondack Park is New York's largest playground. Striking a balance between public and private ownership makes it a unique place to visit, where residents share the serene Adirondack experience alongside travelers.",
    stat: { value: "1892", label: "Established by the State of New York" },
    credit: 'Source: <a href="https://visitadirondacks.com/about" target="_blank" rel="noopener">visitadirondacks.com</a>',
  },

  activities: [
    { group: "Hiking, Snowshoeing & Cross-Country Skiing", items: [
      { name: "Owl Head Lookout", addr: "9329 NY-9N, Elizabethtown, NY 12932", link: "alltrails.com/trail/us/new-york/owl-head-lookout" },
      { name: "Hurricane Mountain", addr: "10008 NY-9N, Keene, NY 12942", link: "alltrails.com/trail/us/new-york/hurricane-mountain-trail-southern-approach" },
      { name: "Big Crow Mtn + Nun-Da-Ga-O Ridge Loop", addr: "End of O'Toole Rd, Keene, NY 12942", map: "https://maps.app.goo.gl/1dZ9e3CwAvtaPD9a6", link: "alltrails.com/trail/us/new-york/big-crow-and-nun-da-ga-o-ridge-loop-trail" },
      { name: "Jay Mountain", addr: "134 Jay Mountain Rd, Jay, NY 12941", map: "https://maps.app.goo.gl/b8YwEyzQYwmiPZMw9", link: "alltrails.com/trail/us/new-york/jay-mountain-trail" },
      { name: "Mt Van Hoevenberg", note: "also for mountain biking", addr: "31 Van Hoevenberg Way, Lake Placid, NY 12946", link: "mtvanhoevenberg.com/todo/cross-country-skiing" },
    ]},
    { group: "Swimming Holes", items: [
      { name: "\u201cUs\u201d", addr: "2.6 miles from The Branch toward Elizabethtown", map: "https://maps.app.goo.gl/Z1GcQKj8FX7vKsfS6" },
      { name: "Split Rock Falls", addr: "5883 State Rte 9, New Russia, NY 12964" },
      { name: "Five Mountain Loop Trailhead", addr: "NY-73 Scenic, Keene Valley, NY 12943", map: "https://maps.app.goo.gl/LdUovnmkMShevVnr7" },
    ]},
    { group: "Mountain Biking", items: [
      { name: "Blueberry Hill", note: "also for hiking & snowshoeing", addr: "Lord Rd, Elizabethtown, NY 12932", map: "https://maps.app.goo.gl/3t8trvvgw9R6YnPQ7", link: "betatrails.org/blueberry-hill" },
      { name: "Otis Mountain", addr: "End of Lodell Lane, Elizabethtown, NY 12932", map: "https://maps.app.goo.gl/qGQHXXqvypRnct8JA", link: "betatrails.org/otis-mountain" },
      { name: "East Branch", addr: "11688 State Hwy 9N, Keene, NY 12942", map: "https://maps.app.goo.gl/dZBi8j5qP4KWSUwZ8", link: "betatrails.org/keene" },
      { name: "The Adirondack Rail Trail", link: "adirondackrailtrail.org" },
    ]},
    { group: "Other Activities", items: [
      { name: "Whiteface Mountain Ski Resort", addr: "5021 NY-86, Wilmington, NY 12997", link: "whiteface.com" },
      { name: "Westport Marina", note: "boat rentals and docking", addr: "20 Washington St, Westport, NY 12993", link: "westportmarina.com" },
    ]},
  ],

  restaurants: [
    { name: "The Deer's Head", addr: "7552 Court St, Elizabethtown, NY 12932", link: "thedeershead.com" },
    { name: "Pleasant Valley Cafe", addr: "7581 Court St, Elizabethtown, NY 12932", link: "pleasantvalleycafe.com" },
    { name: "FIG's Riverside Pizza Cafe", addr: "215 Water St, Elizabethtown, NY 12932", link: "facebook.com/people/FIGs-Riverside-Pizza-Cafe/61583805324433" },
    { name: "Counter Space", addr: "7567 Court St, Elizabethtown, NY 12932", map: "https://maps.app.goo.gl/YjPw3dvzKgzFqmSc8", link: "counter-space.co" },
    { name: "Forty Six", addr: "2837 NY-73, Keene, NY 12942", link: "fortysixer.com" },
    { name: "Noon Mark Diner", addr: "1770 NY-73 Scenic, Keene Valley, NY 12943", link: "noonmarkdiner.com" },
    { name: "K&D Deli", addr: "6519 Main St, Westport, NY 12993", link: "deliwestport.com" },
  ],

  attractions: [
    { group: "Local", meta: "within 5 minutes", items: [
      { name: "Otis Mountain Get Down Music Fest", link: "otismountain.com" },
      { name: "Adirondack History Museum", note: "seasonal", addr: "7590 Court St, Elizabethtown, NY 12932", link: "adkhistorymuseum.org" },
      { name: "Craigardan", note: "residency program & community farm", addr: "9216 State Hwy 9N, Elizabethtown, NY 12932", link: "craigardan.org" },
      { name: "Elizabethtown Circulating Library", addr: "8256 River St, Elizabethtown, NY 12932", link: "facebook.com/elizabethtownlibrary" },
      { name: "Elizabethtown Farmers’ Market", note: "seasonal · Fridays 9am–1pm", addr: "Hand Ave, Elizabethtown, NY 12932", map: "https://maps.app.goo.gl/26jR83rsjTT4kgXz8", link: "adirondackharvest.com/user/elizabethtown" },
      { name: "Keene Valley Farmers’ Market", note: "seasonal · Sundays 9am–2pm", addr: "12942 NY-73 Scenic, Keene, NY 12942", map: "https://maps.app.goo.gl/PjjDEt5YgrJKpcfV9", link: "adirondackharvest.com/user/keenevalley" },
    ]},
    { group: "Area", meta: "within 1 hour", items: [
      { name: "Lake Placid Olympic Sites", link: "lakeplacidlegacysites.com" },
      { name: "The Mill", note: "music venue & exhibition space", addr: "6679 Main St, Westport, NY 12993", link: "themilladk.com" },
      { name: "The Depot Theatre", note: "professional theatre, seasonal", addr: "6705 Main St, Westport, NY", link: "depottheatre.org" },
      { name: "Seagle Festival", note: "opera and musical theater, seasonal", link: "seaglefestival.org" },
      { name: "Fort Ticonderoga", note: "seasonal", addr: "102 Fort Ti Rd, Ticonderoga, NY 12883", link: "fortticonderoga.org" },
      { name: "Star Trek Original Series Set Tour", note: "no, really!", addr: "112 Montcalm St, Ticonderoga, NY 12883", link: "startrektour.com" },
      { name: "The Wild Center", addr: "45 Museum Dr, Tupper Lake, NY 12986", link: "wildcenter.org" },
      { name: "Ausable Chasm", addr: "2144 US-9, Keeseville, NY 12911", link: "ausablechasm.com" },
      { name: "High Falls Gorge", addr: "4761 NY-86, Wilmington, NY 12997", link: "highfallsgorge.com" },
    ]},
    { group: "Regional", meta: "over 1 hour", items: [
      { name: "Shelburne Museum", note: "seasonal", link: "shelburnemuseum.org" },
      { name: "Burlington, Vermont", link: "churchstmarketplace.com" },
      { name: "Six Flags Great Escape", note: "seasonal", link: "sixflags.com/greatescape" },
    ]},
  ],

  shopping: [
    { name: "Tops Grocery Store", addr: "335 Court St, Elizabethtown, NY 12932" },
    { name: "Boquet Liquor Shop", addr: "7613 US-9, Elizabethtown, NY 12932" },
    { name: "Kinney Drugs Pharmacy", addr: "7550 Court St, Elizabethtown, NY 12932" },
    { name: "Stewart's Convenience Store", note: "great ice cream!", addr: "94 Park St, Elizabethtown, NY 12932" },
    { name: "Craigardan Farm Store", note: "local, organic & gourmet", addr: "9216 NY-9N, Elizabethtown, NY 12932" },
    { name: "The Mountaineer", note: "outdoor gear", addr: "1866 NY-73, Keene Valley, NY 12943" },
    { name: "Solace Cycle", addr: "7567 Court St, Elizabethtown, NY 12932" },
  ],

  services: [
    { name: "Elizabethtown Community Hospital", note: "24/7 Emergency Dept.", addr: "75 Park St, Elizabethtown, NY 12932", phone: "(518) 873-6377" },
    { name: "Essex County Emergency Services", note: "fire & safety", addr: "702 Stowersville Rd, Lewis, NY 12950", map: "https://maps.app.goo.gl/Et5hxTCbYCDCK6dB7", phone: "(518) 873-3900" },
    { name: "TrailNorth Federal Credit Union", addr: "7519 Court St, Elizabethtown, NY 12932", phone: "(518) 585-6725" },
    { name: "McGee's Towing & Recovery", phone: "(518) 962-4783" },
  ],

  emergency: "In an emergency, dial 911.",
};
