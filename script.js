var adj;
var city;
var desc;

function adjgen() {
	var adjArray = ["Amazing", "Fabulous", "Fantastic", "Classy", "Super-classy", "Tremendous", "Great", "Glorious", "Beautiful", "Big, beautiful", "Valuable", "Awesome", "Charming", "Terrific", "Super-luxury", "Crazy-awesome", "Unbelievable", "Very, very strong", "Clean", "Hunky-dory", "Groovy", "Exquisite", "Extraordinary", "Wealthy", "Brilliant"];
	var x = Math.floor(Math.random() * adjArray.length);
  adj = adjArray[x];
}

function citygen() {
  var cityArray = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
  var x = Math.floor(Math.random() * cityArray.length);
  city = cityArray[x];
}

function descgen() {
	var descArray = ["where I own property", "where I have investments", "where I own businesses", "where I have a few hotels", "where I have golf courses", "where I keep a few hundred horses", "where I have a secret family or two", "the top-secret location of my Scrooge McDuck-like underground vault/swimming pool", "where I have a bathtub full of money", "where I've never seen a Mexican in the flesh", "where I keep a copy of Obama's birth certificate", "where I have a Playmobil prototype of the big, beautiful wall we're going to build", 'where you can buy a "MAKE AMERICA GREAT AGAIN" baseball cap for just $25.00 plus tax', "where I winter", "where I summer", "where I stack my collection of private jets like a giant house of cards", "the site of the hotel where I employ my token non-Mexican maid", "where I found my winning temperament", "where I corral all my pregnant employees. Former employees", "where I've stashed away my federal income tax records", "where I've stockpiled seasons 1-20 of Law and Order on DVD", "where I learned all those rough things I was going to say to Hillary, to her family", "where you can, in fact, walk down the street without getting shot", "where my girlfriend lives", "where I'd perhaps take Ivanka on a date if she weren't my daughter", "where I have loads of money just lying around in wheelbarrows", "where I own six of the city's seven Maui Wowi franchises", "where I own about nine Sbarro franchises", "where my people just broke ground on a new Souper!Salad! franchise", "where I keep all my tiny gloves", "where I keep all my breastfeeding employees", "where I met all my fabulous friends who happen to be gay", "where I proved that my IQ is one of the highest — and you all know it! Please don’t feel so stupid or insecure; it’s not your fault", "where I keep my respect for women", "where I have many, many African American friends", "where I live in my own reality", "where I broke the glass ceiling on behalf of women", "where they're now saying that I not only won the NBC Presidential Forum, but last night the big debate", "where the #1 trend on Twitter right now is #TrumpWon", "which is not China", "which is not Mexico", "which is neither China nor Mexico", "which I have purged of haters and losers", "where I keep all former Miss Universe Pageant contestants", "where former attendees of Trump University end up living", "where I'm going to cut taxes bigly", "where I keep the plans that will make your life better", "where I will stop our jobs from being stolen from us", "where I will keep the jobs from leaving", "where I keep all my thoughts about NATO", "the source of my endless stamina", "where the wealthy are going to create tremendous jobs", "where Obama goes off, and he leaves, and goes out to the golf course for the rest of his life to play golf, when they raise interest rates, you’re going to see some very bad things happen, because the Fed is not doing their job", "where being audited is a way of life", "where stop and frisk is constitutional", "where I keep my list of banks. These are very fine institutions, very fine banks", "where, you know, you've seen me, I've been all over the place", "where over 200 admirals and generals endorsed me to lead this country, and more are coming next week, and I'm very proud of it", "where we cyber better than anyone else", "where I made America great again", "where we came in with the Internet, we came up with the Internet", "where we have to get very, very tough on cyber - and cyber warfare", "where I did one of my many interviews with Howard Stern", "where my two minutes never expire", "where you can go to Hillary's website and read all about how to defeat ISIS"];
  var x = Math.floor(Math.random() * descArray.length);
  desc = descArray[x];
}

function genTrump(){
  adjgen();
	citygen();
  descgen();	
  document.getElementById("output").innerHTML =
	'"' + adj + " " + city + ", " + desc + "." + '"';
};
