<template>
  <div class="home">
    <TitleSection
      highlight="Powered by TadHealth AI"
      title="Smart Resources"
      subtitle="Our contextual AI provides resources when they are needed and assists professionals in navigating through controversial, challenging and emerging issues in mental health care."
    />

    <div class="filters">
      <label for="limit">Limit</label>
      <input class="input" type="number" id="limit" v-model="limit" min="1" />
      <label for="classification">Event Classification</label>
      <select class="input" id="classification" v-model="event_classification">
        <option value="">All</option>
        <option v-for="classification in classifications" :key="classification">
          {{ classification }}
        </option>
      </select>
    </div>
    <div class="articles">
      <div v-for="article in articles" :key="article.title" class="article">
        <router-link
          :to="{ name: 'article', params: { article: article } }"
          tag="div"
        >
          <span
            class="badge mass-casualty"
            v-if="article.event_classification === 'mass casualty'"
            >Event Classification : Mass Casualty</span
          >
          <span
            class="badge homicide"
            v-if="article.event_classification === 'homicide'"
            >Event Classification : Homicide</span
          >
          <span
            class="badge natural-disaster"
            v-if="article.event_classification === 'natural disaster'"
            >Event Classification : Natural Disaster</span
          >
          <span
            class="badge assault"
            v-if="article.event_classification === 'assault'"
            >Event Classification : Assault</span
          >
          <span
            class="badge other"
            v-if="article.event_classification === 'other'"
            >Event Classification : Other</span
          >

          <span class="badge positive" v-if="article.sentiment === 'positive'"
            >Sentiment : Positive</span
          >
          <span
            class="badge neutral"
            v-else-if="article.sentiment === 'neutral'"
            >Sentiment : Neutral</span
          >
          <span
            class="badge negative"
            v-else-if="article.sentiment === 'negative'"
            >Sentiment : Negative</span
          >

          <span class="article__source">Source: {{ article.platform }}</span>

          <h2 class="article__title">{{ article.title }}</h2>

          <p class="article__body">{{ article.body }}</p>
          <!-- You can add more fields here as needed -->
        </router-link>
      </div>
      <p v-if="!articles.length" class="no-articles">No articles found</p>
    </div>
  </div>
</template>

<script>
  import TitleSection from '@/components/TitleSection.vue'
  // import axios from 'axios'

  export default {
    name: 'Home',
    data() {
      return {
        limit: 5,
        event_classification: '',
        classifications: [
          'mass casualty',
          'homicide',
          'natural disaster',
          'assault',
          'other',
        ],
        articles: [],
        dummyArticles: [
          {
            title:
              'Travel: Ever wanted to sail to a private island? Here’s how you can',
            body: 'As cruise lines vie for industry supremacy in myriad categories onboard, they’re also playing a game of one-upmanship onshore. Private islands, those secluded oases of fun and sun that await cruisers on many warm-weathered itineraries, are as much a keeping-up-with-the-Joneses thing as who has the best waterslides, thrill rides, culinary program, entertainment and, yes, even bedding.\nCruise lines have owned or operated private isles for nearly half a century, but perhaps at no other time has the development of these secluded sanctuaries been so feverish. From Central America and the South Pacific to the Caribbean and coast of southern Africa, more than a dozen are in the construction, expansion, renovation or planning phase.\nThis collective order of full speed ahead by the industry is steel drum music to the ears of cruise vacationers looking for a happy medium between all the seeing and doing options while in port and a relaxing sea day. Because most private islands operate as extensions of the ship, they offer an experience at higher levels of containment, control and cleanliness than a typical beach break shore excursion. It’s not unusual for the food, drink and the people making and serving it to come straight from the ship. Talk about working remotely.\nEven if owned by the same cruise line, no two private islands are alike. They all share basic amenities, however: an inviting beach with loungers, umbrellas and lifeguards, casual outdoor eateries, bars aplenty, shopping of various degrees, walking trails, rentable cabanas and a starting point for shore excursions. Some offer elaborate waterparks and ziplines while others feature animal encounters and dedicated kids zones. Because upcharges are part of cruising’s DNA — even “all-inclusive” sails aren’t 100% inclusive — no one should be surprised that a few cruise lines charge extra for the choice spots to catch some rays.\nEvery major mainstream cruise line — Carnival Cruise Line, Royal Caribbean International, Norwegian Cruise Line, MSC Cruises — owns or leases at least one private island. Most are shared with sister brands of the same corporate portfolio, though visits by ships of higher categories are less frequent; an exception is premium-class Princess Cruises, which has Princess Cays on the larger Bahamian island of Eleuthera.\nPerfect Day at CocoCay is a private paradise for RCI passengers. (Photo by David Dickstein)\nNo man, princess or cruise line is an island as the Bahamas has the highest concentration of these private parcels of paradise. One of the busiest is Perfect Day at CocoCay, which welcomes more than 3 million Royal Caribbean passengers in non-pandemic years, and more are expected once an adults-only section called Hideaway Beach is open later this year. The resort, on Little Stirrup Cay north of Nassau, features North America’s tallest waterslide. From the top, one can see NCL’s Great Stirrup Cay one island over. Opened in 1977, it’s the industry’s first private island getaway. Near the southern end of the archipelagic state, Half Moon Cay and Princess Cays are used by brands of Carnival Corporation including the referenced namesakes and Holland America Line.\n \nCastaway Cay is a frequent stop for Disney ships in the Caribbean. (Photo by David Dickstein)\nBringing some Anaheim and Orlando influence to the Bahamas is Disney Cruise Line with Castaway Cay, the perfect place to take snaps with Mickey and friends while holding a glass of non-alcoholic Olaf’s Flurry Freeze. A tropical breeze from the opposite direction is MSC’s lower-key Ocean Cay Marine Reserve. Emphasizing conservation over stimulation, MSC’s take is if you want a theme park experience, go back to the ship where there awaits immersive high-tech entertainment with innovative technology and water play. Meanwhile, it’s adults only at Virgin Voyages’ Beach Club at Bimini, where pool parties and beach bonfires heat up just 55 miles east of Miami.\nWonder of the Seas docked at Labadee in Haiti. (Photo by David Dickstein)\nElsewhere in the world, Royal Caribbean’s Labadee in northern Haiti is home to the world’s longest over-water zipline. In Central America, Harvest Caye, owned in partnership by Norwegian and the Belizean government, is unique and not necessarily in a good way. Because the restaurants are owned by locals, there’s no such thing as a free lunch there for NCL and Oceania Cruises passengers.\n \nNorwegian and Oceania passengers get a day of fun and sun at Harvest Caye on select itineraries. (Photo by David Dickstein)\nOn select itineraries in the United Arab Emirates and Qatar, MSC makes stops at its Sir Bani Yas resort southwest of Abu Dhabi. Originally built in 2016 by Costa Cruises, the private island destination’s showpiece is Arabian Wildlife Park, home to over 13,000 endangered and indigenous animals.\nOn the horizon is Carnival’s yet-to-be-named private port on the southern side of Grand Bahama. Expected to open in late 2024, the destination will have a nature reserve, pool and Bahamian-run shops and restaurants easily accessible by a pier that can accommodate two of the fleet’s largest ships simultaneously.\nRoyal Caribbean passengers have plenty of recreational options at Perfect Day at CocoCay. (Photo by David Dickstein)\nCarnival hasn’t made a peep since COVID about its plans to build a private destination in Baja California, but according to Seatrade Cruise News, the world’s largest cruise line and Mexican cruise port developer ITM Group are teaming up to build one in Ensenada. A future stop on cruises to the Mexican Riviera or itineraries to the California coast or Hawaii that, by law, require an international call, the proposed “La Española Village” would feature the usual — local grub and grog, music and other live entertainment — along with an expansive family-friendly adventure park, tentatively dubbed “The Isle at Ensenada.”\nMeanwhile, Royal Caribbean is making progress on the pandemic-delayed Perfect Day at Lelepa, the Southern Hemisphere’s first private island destination cruising experience. RCI hasn’t announced an opening date, but based on remarks made by a senior vice president for the company, within the next few months itineraries out of Australia will include a visit to the small island in Vanuatu.\nNorth America’s tallest waterslide is found at Perfect Day at CocoCay. (Photo by David Dickstein)\nWhile many elements of its other private destinations will be repeated in the South Pacific, Royal Caribbean is promising that the Vanuatu resort will not be a cookie-cutter of its existing escapes that cater to a U.S. demographic.\n“What’s a perfect day for an Australian is not a perfect day for an American,” said Mark Tamis, Royal Caribbean’s senior vice president of hotel operations. “Thrilling for an Australian might be snorkeling while a thrill for an American might be going down a water slide … not that Australians don’t also like water slides, of course.”\nOne thing Americans and Australians can agree on, and this goes for everyone else in the world, is having a safe cruise vacation. There could be trouble in paradise if one heeds the warnings of the U.S. Department of State. Travel advisories have been issued for some of the most popular cruise destinations.\nWonder of the Seas docked at Labadee in Haiti. (Photo by David Dickstein)\nHaiti was at Level 4 at press time, a classification that means “do not travel” to that nation due to “kidnapping, crime, civil unrest, and poor health care infrastructure.” According to the executive agency’s advisory, “Violent crime, such as armed robbery, carjackings, and kidnappings for ransom that include American citizens are common.”\nThe Bahamas was at Level 2 at last check, but despite the less severe designation, the federal department says increased caution should still be exercised due to “violent crime, such as burglaries, armed robberies and sexual assaults,” particularly in Nassau and Grand Bahama.\nBecause cruise lines’ private island destinations are under heavy control and security, they can be regarded as sanctuaries, protected from unsavory activities that may occur outside their enclosed perimeters.\n“One of the significant benefits of private destinations is they provide a safe environment for passengers,” said maritime lawyer Spencer Aronfeld ( www.aronfeld.com ). “This is my 33rd year repping passengers. I’ve handled a lot of accidents at these cruise line resorts, but never by third-party crime.”\nHarvest Caye is a joint venture of NCL and the Brazilian government. (Photo by David Dickstein)\nIf there is a downside to these private islands, according to Aronfeld, it’s that they deprive guests of an authentic port experience.\n“Take Virgin’s Bimini Beach Club,” he said. “I feel really bad for passengers because they don’t see anything about Bimini. There’s no difference between the club and, say, Fort Lauderdale. But where there’s high crime, these resorts at least give people a chance to say they’ve been on the island. It’s sad to some degree, but it’s better than nothing.”\n\nIf you go …\nCarnival Cruise Line — carnival.com\nDisney Cruise Line — disneycruiseline.com\nHolland America Line — hollandamerica.com\nMSC Cruises — msccruisesusa.com\nNorwegian Cruise Line — ncl.com\nOceania Cruises — oceaniacruises.com\nPrincess Cruises — princess.com\nRoyal Caribbean International — royalcaribbean.com\nVirgin Voyages — virginvoyages.com\n  Newsroom Guidelines  News Tips  Contact Us  Report an Error     ',
            platform: 'ocnews',
            location: 'Redondo Beach, California',
            event_classification: 'mass casualty',
            sentiment: 'negative',
            resources: {
              for_parents: [
                'https://www.apa.org/topics/gun-violence-crime/shooting-aftermath',
                'https://www.nytimes.com/article/talk-about-school-shootings-kids.html',
                'https://www.nctsn.org/sites/default/files/resources//parents_guidelines_for_helping_youth_after_the_recent_shooting.pdf',
                'https://youtu.be/KANprqSTX2k',
              ],
              for_teachers_staff: [
                'https://www.nytimes.com/2022/05/25/learning/lesson-plans/resources-for-talking-and-teaching-about-the-school-shooting-in-uvalde-texas.html',
                'https://www.nctsn.org/sites/default/files/resources//pfa_schools.pdf',
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/pfa_for_schools_for_principals_and_administrators.pdf',
              ],
              for_counselors: [
                'https://www.schoolcounselor.org/Publications-Research/Publications/Free-ASCA-Resources/After-a-School-Shooting',
              ],
              for_students: [
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/for_teens_coping_after_mass_violence.pdf',
                'https://www.everydayhealth.com/emotional-health/under-pressure/the-top-mental-health-tiktok-influencers-and-why-theyre-important/',
              ],
            },
          },
          {
            title:
              'And they’re off — LA Fleet Week opens with ship tours, displays, entertainment',
            body: 'Lt. Ada Willis chats with guests aboard the USS CINCINNATI (LCS-20) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) A tour guests looks through a porthole aboard the USS CINCINNATI (LCS-20) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) Bob Hope USO volunteer George Tapia cooks up hot dogs for the military personell at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) The USS PRINCETON (CG-59) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) The USS ASHLAND (LSD-48) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) The USS PRINCETON (CG-59) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) Guests tour the USS CINCINNATI (LCS-20) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) Guests tour the USS CINCINNATI (LCS-20) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) The USS PRINCETON (CG-59) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) The USS PRINCETON (CG-59) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) John Castillo and his son, Myles, 2, take a selfie with the crew aboard the USS CINCINNATI (LCS-20) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) The USS CINCINNATI (LCS-20) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) Robert Hogan MN1 leads a tour aboard the USS CINCINNATI (LCS-20) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) The S.S. Lane Victory as seen from inside the USS CINCINNATI (LCS-20) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) A sailor stands aboard the USS PRINCETON (CG-59) one of three active U.S. Navy ships available to tour at LA Fleet Week in San Pedro on Friday, May 26, 2023. (Photo by Brittany Murray, Press-Telegram/SCNG) Show Caption of Expand\nLA Fleet Week officially launched Friday morning, May 25, under cloudy skies in San Pedro, drawing early groups of people eager to tour the three visiting Navy ships — and one Coast Guard cutter — and take in all the displays arrayed at the main expo near the Battleship Iowa.\n“There’s so much to see,” said Susie King of Glendale.\nShe and her partner, Ed Savage, attended last year’s LA Fleet Week and made sure to mark it on their 2023 calendar.\n“I love the military,” Savage said, “and we had a great time last year.”\nArrayed in the Outer Harbor of the Port of Los Angeles were the USS Cincinnati, the USS Princeton and the USS Ashland, all open for pubic tours from 10 a.m. to 3 p.m. Friday, as well as throughout the Memorial Day weekend.\nCmdr. Robert Burke, commanding officer of the USS Cincinnati, said all three ships are examples of the advanced technology used by today’s Navy.\n \nA strong Navy, he said, is as “important as ever.” All three ships have the ability to handle aircraft as well.\nVisitors to the Navy ships also get a look at what the life of a sailor onboard the vessels is like, he said.\n \nScott Stewart of Seal Beach said the tours of the Cincinnati and Princeton that he and his wife took offered some “amazing” history. The technology and armament was impressive too.\nAt the main expo venue, open daily from 10 a.m. to 6 p.m., morning crowds began flowing in early, taking in the many displays of equipment — including a “Top Gun”-worthy attack helicopter (the AH-1Z Viper) — operated by the Navy, Marines and Army. The personal interactions between military personnel and the public are among the highlights emphasized during Fleet Week events.\nThere were bomb detection robots, specialty vehicles and a mobile outdoor gym on display. At the gym, U.S. Marine Staff Sgt. Dayhon Wheeler and fellow Marines from Camp Pendleton “spotted” and assisted youngsters eager to test their own strength.\nMarine helicopter mechanic Sgt. Brian Heidel said he was enjoying talking to former service members who stopped to marvel at the advanced technology of the Viper attack helicopter, an updated and aggressive machine that drew several onlookers.\nA different vibe was available at the Stewards of the Sea booth, which highlighted the Navy’s worldwide civilian crew that cares for the environment.\nThe southwest division present at Fleet Week cares for endangered island foxes, along with a host of other creatures.\n“Almost no one knows the Navy has an environmental program,” said Mirna Gonzalez, the scientist who was staffing the group’s children’s booth on Friday.\nDuring Fleet Week, kids can make cardboard sailor hats at that booth and learn about the various animals the group helps to protect through other crafts and visual aids.\nOn the stage, meanwhile, karaoke and other contests were ongoing. A 4-year-old named Everett, with some help from his dad, successfully identified the song “Surfin’ Bird” — or “Bird is the Word” — featured in a now-vintage film, “Full Metal Jacket.”\nThere were military recruitment booths, and others run by the Los Angeles Fire and Police departments, the Port Police, and even LA city’s Department of Water and Power.\nDave & Buster’s offered a basketball toss and arcade games.\nAnd the fun is only just beginning. Fleet Week will run through Monday, May 29.\nThere are plenty of activities on tap for Saturday, including:\n Public ship tours (10 a.m. to 3 p.m.).  Aircraft demonstrations over the Main Channel (10 a.m. to 4 p.m.).  Expo booths and activities in front of the Battleship Iowa (10 a.m. to 6 p.m.).  Military talent show, main stage qualifying round (10:30 a.m. to 12:30 p.m.).  Dodgeball tournament (10:30 a.m. to 1 p.m.).  Navy Band Southwest, main stage (1-2 p.m.).  U.S. Navy enlistment and officer commissioning, main stage (2-2:15 p.m.).  4NR Foreigner Tribute Band, main stage (2:30 to 4 p.m.).  L.A.vation U2 Tribute Band, main stage (4:45 to 6 p.m.). \n  Newsroom Guidelines  News Tips  Contact Us  Report an Error     ',
            platform: 'ocnews',
            location: 'Carson, California',
            event_classification: 'mass casualty',
            sentiment: 'negative',
            resources: {
              for_parents: [
                'https://www.apa.org/topics/gun-violence-crime/shooting-aftermath',
                'https://www.nytimes.com/article/talk-about-school-shootings-kids.html',
                'https://www.nctsn.org/sites/default/files/resources//parents_guidelines_for_helping_youth_after_the_recent_shooting.pdf',
                'https://youtu.be/KANprqSTX2k',
              ],
              for_teachers_staff: [
                'https://www.nytimes.com/2022/05/25/learning/lesson-plans/resources-for-talking-and-teaching-about-the-school-shooting-in-uvalde-texas.html',
                'https://www.nctsn.org/sites/default/files/resources//pfa_schools.pdf',
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/pfa_for_schools_for_principals_and_administrators.pdf',
              ],
              for_counselors: [
                'https://www.schoolcounselor.org/Publications-Research/Publications/Free-ASCA-Resources/After-a-School-Shooting',
              ],
              for_students: [
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/for_teens_coping_after_mass_violence.pdf',
                'https://www.everydayhealth.com/emotional-health/under-pressure/the-top-mental-health-tiktok-influencers-and-why-theyre-important/',
              ],
            },
          },
          {
            title: 'Wagner group reportedly pulling forces from Bahkmut',
            body: 'By Susie Blann and Elise Morton | Associated Press\nKYIV, Ukraine — The head of the Russian private military contractor Wagner claimed Thursday that his forces have started pulling out of Bakhmut in eastern Ukraine and handing over control to the Russian military, days after he said Wagner troops had captured the ruined city.\nYevgeny Prigozhin, a convicted criminal and Wagner’s millionaire owner with longtime links to Russian President Vladimir Putin, said in a video published on Telegram that the handover would be completed by June 1. Russia’s Defense Ministry didn’t confirm this and it wasn’t possible independently to verify whether Wagner’s pullout from the bombed-out city has begun after a nine-month battle that killed tens of thousands of people. Prigozhin said his troops would now rest in camps, repair equipment and await further orders.\nUkraine’s deputy defense minister, Hanna Maliar, said Thursday that regular Russian troops had replaced Wagner units in the suburbs but that Wagner fighters remained inside the city. Ukrainian forces maintain a foothold in the southwestern outskirts, she said.\nPrigozhin’s Bakhmut triumph delivered a badly needed victory for Putin, whose invasion of Ukraine in February 2022 has lost momentum and now faces a Ukrainian counteroffensive using advanced weapons that Kyiv’s Western allies have provided.\nAccording to top Ukrainian presidential advisor Mykhailo Podolyak, that counteroffensive is already underway. He said Thursday that it should not be anticipated as a “single event” starting “at a specific hour of a specific day.” Writing on Twitter, Podolyak said that “dozens of different actions to destroy Russian occupation forces” had “already been taking place yesterday, are taking place today and will continue tomorrow.”\n \nPrigozhin has long feuded with the Russian military leadership, dating back to Wagner’s creation in 2014. He has also built a reputation for inflammatory — and often unverifiable — headline-grabbing statements from which he later backtracks. During the 15-month war in Ukraine, he has repeatedly and publicly accused the Russian military leadership of incompetence, failure to properly provision his troops as they spearheaded the battle for Bakhmut, and failure to credit his troops for their successes and sacrifices.\nWagner’s involvement in the capture of Bakhmut has added to Prigozhin’s standing, which he has used to set forth his personal views about the war’s conduct.\n \n“Prigozhin is … using the perception that Wagner is responsible for the capture of Bakhmut to advocate for a preposterous level of influence over the Russian war effort in Ukraine,” the Institute for the Study of War, a Washington think tank, said.\nHis frequent critical commentary about Russia’s military performance is uncommon in Russia’s tightly controlled political system, in which only Putin can usually air such criticism.\nSeth Jones, director of international security at the Center for Strategic and International Studies, said Prigozhin appears to be pressuring the Russian Defense Ministry to take a more active role and responsibility in Bakhmut but he questioned whether regular troops are capable of taking over from Wagner.\n“If you pull those forces out of Bakhmut, you lose your entire sort of first line of offensive and then defensive operations, because the Russians aren’t going to use — haven’t used — their seasoned military forces” for major advances, he said. “You don’t want to waste well trained capable forces in areas where they’re likely to get killed. So removing them would almost certainly allow the Ukrainians to retake territory.”\nWith Russian forces suffering high casualties and their inability to integrate their, forces, he added, they “just they look miserable.”\nNikolai Petrov, senior Russia and Eurasia research fellow at Chatham House, was skeptical about Prigozhin’s claim the Russian military will take over.\n“Nobody knows if that will happen,” Petrov said, adding that Prigozhin is a “populist and he’s playing the cards of hatred” against ineffective Russian military commanders.\nEarlier this week, Prigozhin again broke with the Kremlin line on Ukraine, saying its goal of demilitarizing the country had backfired, acknowledging Russian troops had killed civilians and agreeing with Western estimates that he lost more than 20,000 men in the battle for Bakhmut.\nMeanwhile, Russia unleashed a barrage of Iranian-made Shahed 36 drones against Kyiv in its 12th nighttime air assault on the Ukrainian capital this month but the city’s air defenses shot them all down, Ukrainian authorities said Thursday.\nThe Kremlin’s forces also launched 30 airstrikes and 39 attacks from multiple rocket launchers, as well as artillery and mortar attacks across Ukraine, the Ukrainian military said.\nAt least one civilian was killed and 13 others were wounded in Ukraine on Wednesday and overnight, the Ukrainian presidential office said Thursday.\nIn other developments Thursday:\n—Russia attacked a dam on the Vovcha River in Karlivka, 40 kilometres (24 miles) west of Donetsk, destroying it and raising a flooding risk for three villages, Gov. Pavlo Kyrylenko said. The villages might be evacuated, he said on Telegram.\n— Russia and Belarus signed a deal formalizing deployment of Russian nuclear weapons on Belarusian territory. Control of the weapons will remain with Moscow. Putin had announced in March that his country planned to deploy tactical, comparatively short-range and small-yield nuclear weapons in Belarus.\n— A U.K.-based technology firm says pro-Russia hackers faked the location data to form a giant letter “Z” — a symbol of Russia’s war in Ukraine — in the Black Sea. Geollect says location data for commercial ships has been remotely spoofed so vessels near Crimea appear to form a 65-mile (105-kilometer) long “Z” on open-source maritime tracking sites. Russia seized the Crimean Peninsula from Ukraine in 2014. The false location data increased the risk of collisions, the firm warned.\n—A total of 106 Ukrainian prisoners of war have been released in another major exchange with Russia, chief Ukrainian presidential aide Andriy Yermak said. The eight officers and 98 soldiers released fought in the battle for Bakhmut. The bodies of two foreigners and a Ukrainian were also returned to Ukraine. Prigozhin posted a video of himself standing next to two wooden coffins, one draped with an American flag and another with a Turkish flag. Prigozhin said the bodies were being handed over to Ukrainian forces and provided the American’s name but the State Department couldn’t confirm it, pending an investigation and due to privacy concerns. Russian officials confirmed the swap, without providing any details on how many Russians were returned.\n— The Russian Foreign Ministry announced that five Swedish diplomats are to be expelled from the country. A statement said the decision is a response to Stockholm’s “openly hostile step” to declare five employees of Russian foreign missions in Sweden “personae non grata” in April. Moscow additionally announced its decision to close its consulate in Goteborg in September, as well as its “withdrawal of consent” to the activities of the Swedish consulate in St. Petersburg. Russia and Western countries have often expelled each other’s diplomats since the war began.\nMorton reported from London.\n  Newsroom Guidelines  News Tips  Contact Us  Report an Error     ',
            platform: 'ocnews',
            location: 'Orange, California',
            event_classification: 'mass casualty',
            sentiment: 'negative',
            resources: {
              for_parents: [
                'https://www.apa.org/topics/gun-violence-crime/shooting-aftermath',
                'https://www.nytimes.com/article/talk-about-school-shootings-kids.html',
                'https://www.nctsn.org/sites/default/files/resources//parents_guidelines_for_helping_youth_after_the_recent_shooting.pdf',
                'https://youtu.be/KANprqSTX2k',
              ],
              for_teachers_staff: [
                'https://www.nytimes.com/2022/05/25/learning/lesson-plans/resources-for-talking-and-teaching-about-the-school-shooting-in-uvalde-texas.html',
                'https://www.nctsn.org/sites/default/files/resources//pfa_schools.pdf',
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/pfa_for_schools_for_principals_and_administrators.pdf',
              ],
              for_counselors: [
                'https://www.schoolcounselor.org/Publications-Research/Publications/Free-ASCA-Resources/After-a-School-Shooting',
              ],
              for_students: [
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/for_teens_coping_after_mass_violence.pdf',
                'https://www.everydayhealth.com/emotional-health/under-pressure/the-top-mental-health-tiktok-influencers-and-why-theyre-important/',
              ],
            },
          },
          {
            title: 'Brothers behind dramatic rescues in Kenya',
            body: 'Roan Carr-Hartley held out his arms, stretching them like wings.\n"The search area was almost the size of Georgia that you\'re looking in," he said, as he recounted the difficulty of rescuing a 4-year-old boy, Ayub, who had gone missing in November in the wilderness during a storm.\n"We got a call from the community chief about a boy who has gone missing," Roan said on a video call. "A ground team from his village was already trying to track his footprints, so I flew to the area as soon I could to support their search from the air."\nCarr-Hartley and his brother, Taru, are members of the third generation running Sheldrick Wildlife Trust, a Kenyan conservation organization founded by their grandmother, Daphne Sheldrick. The organization runs an elephant rehabilitation center and works with communities on the eastern side of Tsavo East National Park, including the Asa community. The pair also happen to have a helicopter ready to help with such searches.\nAfter days of searching, land and air, there was still no trace of little Ayub.\n"When I was flying around, I saw lots of hyenas, jackals, and it was pouring with rain," Roan said. "It\'s such a harsh and unforgiving environment for a tiny boy, there\'s nothing or no one there. And so you start worrying and fearing the worst, you feel so hopeless."\nBut, on the sixth day, a miracle happened, he said.\n"I got a call from the chief who said ground teams had discovered fresh footprints of the boy, who was now roughly 15 km northeast of his village," Roan said. "I was just flying, about to begin my search ... as I turned left, I saw him under the left wing of my plane - a tiny, tiny little guy in the middle of nowhere. I was in disbelief. As soon as he saw the plane he started cowering and trying to hide under the bushes, he looked very weak and stumbling."\nEventually they reached him, and his uncle was reunited with him.\n"I was tearing up watching it from the air," Roan said.\nAs in traditional custom, the search team walked back to the village with Ayub, chanting songs of gratitude and praise.\n"When his mother saw him, she just burst into tears. She couldn\'t believe it. She was totally in hysterics," Roan said. "He also reunited with his dad and the rest of his family. It was an amazing moment. Doctors arrived, we administered first aid, replenished his electrolytes, and tested him for malaria."\nFive months on, Roan, who was conducting general patrols, doing a daily surveillance near the Asa community, when he landed up the road to see Ayub. "He\'s all recovered and doing great," he said with a smile.\nIn 2022, Taru, Roan and their team flew a total of 2,534 hours and 347,024 kms -- the equivalent of circumnavigating the planet over eight times -- working alongside the Kenya Wildlife Service and other conservation organizations to protect Kenya\'s wildlife.\n"You\'re looking for poachers and poaching activity, injured animals, illegal cattle grazing, illegal logging," Roan said.\n"We often support anti-poaching teams with the aircrafts on routine patrols, community outreach, and quite often these days is a lot of human-wildlife conflict response, using helicopters to drive wildlife out of farms," Taru added.\nIn the same time, Sheldrick\'s anti-poaching teams, in partnership with the Kenya Wildlife Services patrolled a total of 65,174 kms on foot -- making 989 arrests, recovering 12,583 elephant snares and seizing 3,172 weapons, according to\nthe trust\n.\nIn another dramatic rescue on May 3, the two brothers took their helicopter, this time piloted by Taru, and rescued James, a truck driver who was trapped inside his tanker, surrounded by swirling waters following a flash flood on the Galana-Kulalu causeway.\n"When we got the call, we raced down as quick as possible, calling our Galana manager for an update on the situation. James was now on top of the truck, clearly in big distress," Taru told ABC in a video call. "There was quite a strong crosswind from the left, so it was twitchy and gusty. I was concentrating on the only stationary thing there, which was the truck, holding the chopper at the exact same height so by brother could go down and rescue him. Once he was in, he gave a thumbs up and we flew out, it was such a big relief."\nThat rescue went viral. Dwayne "The Rock" Johnson, posted a video response to the brothers, saying, "I have had the great fortune and privilege to play a helicopter pilot in situations like that, but you guys are the real deal."\nWhat inspired the brothers to get into conservation?\n"We had a unique childhood and upbringing, growing up in the Nairobi National Park," Roan said. "We\'d come home from school and play with the elephants from a young age. When you grow up around all these animals you build a huge amount of respect and love for them."\nHe said his conservation efforts were motivated by critical damage to the environment and by the threats he\'d seen to animals.\n"When you treat an elephant with a snare wound, then it stands up and you know it\'s going to be fine is an amazing feeling," he said. "Or when you find a baby orphan elephant alone in the wild and rescue it, knowing it will have a second chance -- it is a wonderful thing to be a part of."\nThanks to increased conservation efforts, KWS announced in 2021 that the East-African nation had recorded an over 96% decline in elephant poaching with just 11 elephants poached in 2020 compared to 386 in 2013, during a period where Kenya experienced its worst poaching surge in two decades. As of 2021, Kenya\'s elephant population had increased by 5%, standing at an estimated 36,280 elephants, according to the African Wildlife Foundation.\n"Whilst Kenya acknowledges that poaching was the major cause of decline in the past, increasing human population and the subsequent change in land tenure and land use systems have led to the constriction of elephant range ... resulting in heightened interaction between elephants and people, mostly resulting to conflict," KWS said in a statement.\nAs East Africa endures one of its worst droughts in decades, the KWS announced in a November report that it has counted the deaths of at least 205 elephants, 52 wildebeests, 281 zebras, 51 buffaloes, 49 zebras and 12 giraffes.\n"Climate change is unfolding on our very front door, with longer and more frequent droughts and extreme weather patterns becoming the norm," the trust said.\nBut, despite hardships, the Carr-Hartley brothers said they remain more committed than ever.\n"We just want to make impactful and tangible difference every day, no matter how small and hopefully encourage people to do the same," Taru said.\nAnd an elephant never forgets, Roan said, describing elephants that have visited them after their rehabilitations.\n"They know who\'s friend and who\'s foe, and they\'ll always see you if you show them love and compassion."',
            platform: 'abc7',
            location: 'Valley Center, California',
            event_classification: 'mass casualty',
            sentiment: 'negative',
            resources: {
              for_parents: [
                'https://www.apa.org/topics/gun-violence-crime/shooting-aftermath',
                'https://www.nytimes.com/article/talk-about-school-shootings-kids.html',
                'https://www.nctsn.org/sites/default/files/resources//parents_guidelines_for_helping_youth_after_the_recent_shooting.pdf',
                'https://youtu.be/KANprqSTX2k',
              ],
              for_teachers_staff: [
                'https://www.nytimes.com/2022/05/25/learning/lesson-plans/resources-for-talking-and-teaching-about-the-school-shooting-in-uvalde-texas.html',
                'https://www.nctsn.org/sites/default/files/resources//pfa_schools.pdf',
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/pfa_for_schools_for_principals_and_administrators.pdf',
              ],
              for_counselors: [
                'https://www.schoolcounselor.org/Publications-Research/Publications/Free-ASCA-Resources/After-a-School-Shooting',
              ],
              for_students: [
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/for_teens_coping_after_mass_violence.pdf',
                'https://www.everydayhealth.com/emotional-health/under-pressure/the-top-mental-health-tiktok-influencers-and-why-theyre-important/',
              ],
            },
          },
          {
            title:
              'LGBTQ flag burned at North Hollywood elementary school ahead of controversial Pride assembly',
            body: 'A North Hollywood elementary school was the site of a possible hate crime earlier this month.\nSaticoy Elementary School, which is planning on holding an LGBTQ Pride event on June 2 , has been the site of controversy for more than a week, with parents planning a boycott of the Gay Pride and Rainbow Day assembly .\nWhile the parent group says the topics around sexuality and gender are unfit for children, the Los Angeles Unified School District told KTLA earlier this month that the event is intended to highlight diversity.\nTeachers will read students Mary Hoffman’s book “ The Great Big Book of Families ,” which Goodreads called “a celebration of the diverse fabric of kith and kin the world over.”\nOn May 22, however, the debate may have escalated, as school officials discovered that an LGBTQ flag had been burned in what the Los Angeles Police Department said is being investigated as a “vandalism hate crime,” according to the Los Angeles Daily News .\nThe planter in which the flag was placed was also damaged, the Daily News said.\nA group called Saticoy Elementary Parents, which encourages parents to “keep your kids home and innocent” on June 2, has been vocally against the assembly, though one parent told the Daily News that the group is not responsible.\n“None of us parents are aware of who the person might have been who set the flag on fire,” said the parent, identified only as Ana. “None of us would jump the fence or set the flag on fire because we don’t want to bring that negativity to the school where our children are.”\nThere are no suspects in the flag burning, the Daily News reported.',
            platform: 'ktla-news',
            location: 'Prunedale, California',
            event_classification: 'mass casualty',
            sentiment: 'negative',
            resources: {
              for_parents: [
                'https://www.apa.org/topics/gun-violence-crime/shooting-aftermath',
                'https://www.nytimes.com/article/talk-about-school-shootings-kids.html',
                'https://www.nctsn.org/sites/default/files/resources//parents_guidelines_for_helping_youth_after_the_recent_shooting.pdf',
                'https://youtu.be/KANprqSTX2k',
              ],
              for_teachers_staff: [
                'https://www.nytimes.com/2022/05/25/learning/lesson-plans/resources-for-talking-and-teaching-about-the-school-shooting-in-uvalde-texas.html',
                'https://www.nctsn.org/sites/default/files/resources//pfa_schools.pdf',
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/pfa_for_schools_for_principals_and_administrators.pdf',
              ],
              for_counselors: [
                'https://www.schoolcounselor.org/Publications-Research/Publications/Free-ASCA-Resources/After-a-School-Shooting',
              ],
              for_students: [
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/for_teens_coping_after_mass_violence.pdf',
                'https://www.everydayhealth.com/emotional-health/under-pressure/the-top-mental-health-tiktok-influencers-and-why-theyre-important/',
              ],
            },
          },
          {
            title: 'Explainer: Why do Serbia-Kosovo tensions persist?',
            body: 'By Dusan Stojanovic | Associated Press\nBELGRADE, Serbia — Tensions between Serbia and Kosovo flared anew this week after Kosovo’s police raided Serb-dominated areas in the region’s north and seized local municipality buildings.\nThere have been violent clashes between Kosovo’s police and NATO-led peacekeepers on one side and local Serbs on the other, leaving dozens of people injured on both sides.\nSerbia raised the combat readiness of its troops stationed near the border and warned it wouldn’t stand by if Serbs in Kosovo were attacked again. The situation has again fueled fears of a renewal of the 1998-99 conflict in Kosovo that claimed more than 10,000 lives and left more than 1 million homeless.\nWHY ARE SERBIA AND KOSOVO AT ODDS?\nKosovo is a mainly ethnic Albanian populated territory that was formerly a province of Serbia. It declared independence in 2008.\n \nSerbia has refused to recognize Kosovo’s statehood and still considers it part of Serbia, even though it has no formal control there.\nKosovo’s independence has been recognized by about 100 countries, including the United States. Russia, China and five EU countries, most of them with separatist regions of their own, have sided with Serbia. The deadlock has kept tensions simmering and prevented full stabilization of the Balkan region after the bloody wars in the 1990s.\n \nHOW DID SERBIA’S ALLIES REACT?\nRussian Foreign Minister Sergei Lavrov said the situation in Kosovo was alarming and that it could provoke another conflict in the heart of Europe.\n“A huge explosion is being prepared in the center of Europe, in the place where, in 1999, NATO attacked Yugoslavia, violating every imaginable (international) principle,” he said, according to Russian state news agency RIA Novosti.\nChina said that it was closely following the developments.\nChinese Foreign Ministry spokesperson Mao Nin urged NATO to respect the sovereignty and territorial integrity “of the relevant countries and truly do what is conducive to regional peace.”\nWHAT’S THE LATEST FLARE-UP ABOUT?\nSerbs boycotted last month’s local elections held in northern Kosovo, where they represent a majority. Last Friday, newly elected ethnic Albanian mayors moved into their offices with the help of Kosovo’s riot police.\nSerbs tried to prevent them from taking over the premises, but the police fired tear gas to disperse them.\nOn Monday, Serbs engaged in fierce clashes with NATO peacekeepers, leaving more than 50 rioters and 30 international troops injured.\nThe election boycott followed a collective resignation by Serb officials from the area, including administrative staff, judges, and police officers, in November 2022.\nWHAT IS NATO DOING IN KOSOVO?\nTill now, there have been some 3,800 NATO troops stationed in Kosovo, primarily on peacekeeping duties, but also to watch over the borders, especially the one with Serbia where Belgrade has currently been beefing up its troop presence.\nNATO Secretary-General Jens Stoltenberg said Tuesday the alliance had sent 700 more troops to Kosovo to help quell violent protests and had put another battalion on standby in case the riots spread.\nHOW DEEP IS THE ETHNIC CONFLICT IN KOSOVO?\nThe dispute over Kosovo is centuries-old. Serbia cherishes the region as the heart of its statehood and religion.\nNumerous medieval Serb Orthodox Christian monasteries are in Kosovo. Serb nationalists view a 1389 battle against Ottoman Turks there as a symbol of its national struggle.\nKosovo’s majority ethnic Albanians view Kosovo as their country and accuse Serbia of occupation and repression. Ethnic Albanian rebels launched a rebellion in 1998 to rid the country of Serbian rule.\nBelgrade’s brutal response prompted a NATO intervention in 1999, which forced Serbia to pull out and cede control to international peacekeepers.\nHAVE THERE BEEN ATTEMPTS TO RESOLVE THE DISPUTE?\nThere have been constant international efforts to find common ground between the two former wartime foes, but there has been no final comprehensive agreement so far.\nEU officials have mediated negotiations designed to normalize relations between Serbia and Kosovo. Numerous agreements have been reached, but were rarely implemented on the ground. Some areas have seen results, like introducing freedom of movement within the country.\nWHO ARE THE MAIN PLAYERS?\nBoth Kosovo and Serbia are led by nationalist leaders who have shown no readiness to compromise.\nIn Kosovo, Albin Kurti, a former student protest leader and political prisoner in Serbia, leads the government and is the main negotiator in EU-mediated talks. He was also known as a fierce supporter of Kosovo’s unification with Albania and is against any compromise with Serbia.\nSerbia is led by populist President Aleksandar Vucic, who was information minister during the war in Kosovo. The former ultranationalist insists that any solution must be a compromise in order to last and says the country won’t settle unless it gains something.\nWHAT HAPPENS NEXT?\nInternational officials are hoping to speed up negotiations and reach a solution in the coming months.\nBoth nations must normalize ties if they want to advance toward EU membership. No major breakthrough would mean prolonged instability, economic decline and constant potential for clashes. Any Serbian military intervention in Kosovo would mean a clash with NATO peacekeepers stationed there.\n  Report an error  Policies and Standards  Contact Us     ',
            platform: 'the-mercury-news',
            location: 'Home Gardens, California',
            event_classification: 'mass casualty',
            sentiment: 'negative',
            resources: {
              for_parents: [
                'https://www.apa.org/topics/gun-violence-crime/shooting-aftermath',
                'https://www.nytimes.com/article/talk-about-school-shootings-kids.html',
                'https://www.nctsn.org/sites/default/files/resources//parents_guidelines_for_helping_youth_after_the_recent_shooting.pdf',
                'https://youtu.be/KANprqSTX2k',
              ],
              for_teachers_staff: [
                'https://www.nytimes.com/2022/05/25/learning/lesson-plans/resources-for-talking-and-teaching-about-the-school-shooting-in-uvalde-texas.html',
                'https://www.nctsn.org/sites/default/files/resources//pfa_schools.pdf',
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/pfa_for_schools_for_principals_and_administrators.pdf',
              ],
              for_counselors: [
                'https://www.schoolcounselor.org/Publications-Research/Publications/Free-ASCA-Resources/After-a-School-Shooting',
              ],
              for_students: [
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/for_teens_coping_after_mass_violence.pdf',
                'https://www.everydayhealth.com/emotional-health/under-pressure/the-top-mental-health-tiktok-influencers-and-why-theyre-important/',
              ],
            },
          },
          {
            title: 'Dare to bare: 20 of the world’s best nude beaches',
            body: 'By Joe Yogerst | CNN\nIt’s been a banner year for nudity around the globe.\nBerlin recently announced that women can now go topless at the German capital’s public swimming pools while Nantucket Island went topless last December after locals voted in favor of “gender equality on beaches.”\nAfter a multi-year Covid hiatus, the Free the Nipple campaign was back with topless parades in New York City, Vancouver, Paris and elsewhere. And the barely veiled female figure was the fashion statement du jour at the Met Gala, Milan Fashion Week, the BRIT Awards in London and other top-shelf events.\nMeanwhile, there are more places than ever to sun, swim or build sandcastles au naturel at clothing-optional beaches on every continent.\nFrom rocky coastlines to talcum-powder fine sands, and big city bays to secluded shores, there are now hundreds of beaches where it’s perfectly legal (or at least de facto legal) to frolic beside the sea in nothing more than your birthday suit.\n“Soft, smooth sand, warm ocean breeze, gentle ocean waves and lots of other naturists makes for a great clothing-optional beach,” says Nicky Hoffman of The Naturist Society, who’s also the managing editor of Nude & Natural magazine and co-author of “The World’s Best Nude Beaches & Resorts.”\n \nWhile clothing-optional beach destinations may seem like a modern invention, it’s actually quite an old idea, a product of the otherwise prudish Victorian era.\nDuring the 1880s, American poet Walt Whitman extolled the virtues of the “Adamic air bath” – his nude walkabouts and swims along Timber Creek in New Jersey, writing of “The free exhilarating ecstasy of nakedness in Nature.”\n \nChanneling that same vibe, the naturist movement took off in Europe and North America during the first half of the 20th century, with city parks, camp grounds and eventually beaches established for those who wanted to experience nature nude in their most natural state.\nOne of the spin-offs of the socially and sexually liberal 1960s was a “free beach” movement that saw a proliferation of nude beaches around the world.\nAnd their popularity continues today, with more and more popping up each year. Here are 20 of the best nude beaches around the world:\nPlaya Naturista Chihuahua, Uruguay\nLocated about a 30-minute drive from Punta del Este, Uruguay’s best-known nude beach overlooks Portezuelo Bay on the Atlantic coast.\nPhotogenic dunes and water temperatures that reach 25 Celsius (77 F) and higher even in the southern hemisphere winter add to the strand’s allure.\nAfter decades as an unofficial naked getaway, Chihuahua finally achieved legal status in 2000.\nSince then, amenities have expanded to include the Hotel El Refugio Nudista Naturista clothing-optional resort.\nPlaya Naturista Chihuahua, Avenida Las Amarras, 20003 Chihuahua, Uruguay\nNida Nude Beach, Lithuania\nThe chilly Baltic Sea may not seem like the most obvious place to skinny dip. But this gorgeous strand on the long, sandy Curonian Spit offers one of Europe’s most picturesque spots to take it all off.\nWith its wildflower-covered dunes (among the highest in Europe) and shoreline forest, the beach was the focus of a 19th-century artists’ colony that attracted many of the leading painters, poets and writers of the time.\nWalk far enough south along the strand and you eventually come to a fence that marks the Lithuania-Russia border.\nNida Nude Beach , Nidos-Smiltynės pl., Nida, Lithuania\nLittle Palm Beach, Waiheke, New Zealand\nAlthough it’s technically legal to go naked on any beach in personal-liberty-loving New Zealand, the nation’s naturists tend to congregate at well-known clothing-optional spots like Little Palm Beach on Waiheke Island.\nReaching the secluded strand entails a 40–60-minute ferry ride from Auckland, a taxi or rideshare to the island’s north shore, and then a short downhill hike.\nYou can top or tail your beach adventure at Waiheke’s many wineries, restaurants, and art galleries.\nLittle Palm Beach, Miro Road, Waiheke Island 1081, New Zealand\nNugal Beach, Croatia\nFlanked by sheer cliffs and shades by pine trees, this remote beach on the mainland opposite Brač island is reached via a narrow path that seems ready made for goats rather than people seeking an apparel-free escape on the Adriatic.\nBe sure to bring a thick towel or even a beach chair — like many Croatian beaches the surface is pebbles rather than sand.\nNugal is about a half-an-hour walk from the nearest town, although it can also be reached by boat or sea kayak from Makarska or Tučepi.\nNugal Beach, 21300 Makarska, Croatia\nMoshup Beach, Martha’s Vineyard, Massachusetts\nPerched at the island’s western extreme, Moshup is a long curving strand that wraps around a headline crowned by the historic Gay Head Lighthouse (built in 1799).\nLocated right below the ancient light, the clothing optional portion lies beneath rust-colored sandstone cliffs that were declared a National Natural Monument in 1966.\nMoshup is open free of charge to anyone who wants to take their clothes off, as opposed to Lucy Vincent, the island’s private nude beach.\nMoshup Beach, 71 Moshup Trail, Aquinnah, MA 02535\nBlack’s Beach, La Jolla, California\nSet beneath the 100-meter-high cliffs of Torrey Pines, Blacks has been the Golden State’s favorite place for all-over tans for more than 50 years and was once the only legal nude beach in the entire United States.\nLong, wide and blessed with great surf, the beach is reached via the zig-zag Ho Chi Minh Trail from the cliff-top Torrey Pines Gliderport near the University of California , San Diego.\nBlack’s Beach, Torrey Pines Scenic Drive, San Diego, CA 92037\nLady Bay Beach, Sydney, Australia\nAlthough it sometimes seems like just about any beach in Australia is clothing optional, there are a number of official nude beaches here such as Lady Bay. (also known as Lady Jane Beach.)\nPerched just inside the South Head of Sydney Harbour, it’s small and narrow, but incredibly secluded for such a big city location.\nThe rocky ledges around South Head are also used for nude sunbathing.\nLady Bay Beach, Watson’s Bay, Sydney, Australia\nBuhne 16, Sylt, Germany\n“Grin and bare it” might well be the motto for nudists on this North Sea island, where the average water temperature in summer is a chilly 17 C (63 F).\nTechnically all of the beaches on Sylt are clothing optional, but Buhne 16 was the first and is still the foremost location for nude sunbathing along the German shore.\nIt’s a place where beachgoers can chill in the famous blue and white striped wicker beach chairs or let it all hang out at summer beach parties.\nBuhne 16 , Listlandstr 133b, 25980 Kampen (Sylt), Germany; +49 4651 4996\nWreck Beach, Vancouver, Canada\nBilled as one of the world’s longest nude beaches at 7.8 kilometers (4.9 miles) long, Wreck Beach is actually a series of sandy strands, pebble flats and rocky outcrops wrapped around the end of Point Grey.\nWith the University of British Columbia just across the street, a steady stream of students and teachers have shed their clothes on this beach since the early 1970s, when it first became popular.\nEvergreen trees along the shore and snowcapped peaks across the water complement the Canadian ambiance.\nWreck Beach , Vancouver, British Columbia; Canada + 604 224 5739\nRed Beach, Crete, Greece\nThis secluded shore on the south side of Crete is a hotspot for nude sunbathing in Greece .\nNamed after its ocher-colored sand and cliffs, Red Beach (or Kokkini Ammos) is reached via a 20-minute hike from Matala or a very short boat ride from the village waterfront.\nPioneered by Euro hippies during the 1960s, the beach offers chair and umbrella rentals and is home to a funky little bar called Yiannis that’s renowned for its mojitos.\nNote: the mysterious rock carvings at the end of the beach are a modern creation and definitely not ancient Minoan relics.\nRed Beach, Matala, Crete 702 00, Greece\nAnse de Grande Saline, St. Barts\nWhile the Caribbean may be full of wonderful, chilled out beaches, this wild, white sand strand on the rear side of St. Barts is one of the few places on the islands where public nudity is tolerated (although sunbathing naked is technically prohibited in St. Barts.)\nAnse de Grande Saline (or Saline Beach) is another self-catering beach. Visitors will need to bring along everything they need for a day at the shore, especially sunscreen, as there is no shade to speak of.\nL’Esprit, an excellent French restaurant, is within walking distance of Grand Saline and well worth a visit. Just make sure to put your clothes back on before heading over.\nAnse de Grande Saline, St. Barthélemy\nPlatja des Cavallet, Ibiza, Spain\nSet between the deep blue Mediterranean and multi-colored salt pans near Ibiza’s southernmost point, official nudist beach Es Cavallet is separated into various different sections, including a beach club party section, a gay scene and a more secluded, middle section where the clothing-free crowd hang out.\nHowever nude sunbathers aren’t the only beings who frequent this area. Those bright pink things you’ll see pacing in the background aren’t sunburned tourists, but rather flamingos that like to gather in the shallow salines.\nPlatja des Cavallet, 07818, Balearic Islands, Spain\nLittle Beach, Maui, Hawaii\nFlanked by ancient lava flows and backed by a volcanic cinder cone, Little Beach would be super-cool even if you couldn’t take your clothes off.\nPart of Makena State Park on the island’s southeast coast, it overlooks a national marine sanctuary renowned for its sea turtles, dolphins, whales and tropical fish.\nGnarled trees behind the sand provide a modicum of shade and the cove is well protected for swimming.\nAdditionally, a drum circle and fire dancers entertain the crowd during Sunday sunsets.\nLittle Beach, Makena State Park, Makena Rd, Kihei, HI 96753, USA\nCap d’Agde beach, France\nSometimes called the “Naked City,” Cap d’Agde Naturist Village is the world’s largest clothing-optional beach resort, attracting as many as 40,000 guests on any given day during high season.\nVisitors are free to be naked wherever they want – restaurants and stores, post offices or banks, sailing their boat or lounging on the long public beach (where nudity is obligatory, even for those not staying at the resort).\nNon residents can stay overnight at the naturist hotel, camp ground or rental units.\nCap d’Agde Naturist Village , Rond-Point du Bagnas, 34300 Agde, France; +33 4 67 26 00 26\nMpenjati Beach, KwaZulu-Natal, South Africa\nSouth Africa ’s only official nude beach – and perhaps the only legal clothing-not-obligatory strand on the entire African continent – is located in the Mpenjati Nature Reserve south of Durban.\nIts legal status was achieved in 2014, but this came with a list of prohibitions including no staring, no photography, no suggestive behavior, etc.\nLocal clergy and others continue to mount protests (legal and otherwise) against the naked designation.\nMpenjati Nature Reserve, Palm Beach, Port Edward, South Africa\nPlaya Zipolite, Oaxaca, Mexico\nLive your “Y Tu Mamá También” fantasies at the beach where so many of the scenes from the sensuous 2001 Mexican movie starring Gael García Bernal were shot on location.\nPioneered by Mexican and American hippies during the 1960s, the strand stretches about two kilometers with rocky bluffs at either end, and is famed as a clothing-optional beach (although it isn’t legal here.)\nWhile the main beach here is backed by budget hotels and cafes, a tiny sliver of sand at the eastern end called Playa del Amor offers far more privacy.\nPlaya Zipolite, San Pedro Pochutla, Oaxaca, Mexico\nMetsoke Dragot, Israel\nFloat nude in the warm, ultra-buoyant salty water and smear your entire naked body with soothing, mineral-infused black mud at this rocky beach on the western shore of the Dead Sea.\nPerhaps the only place in the Middle East where any kind of public nudity is tolerated, Metsoke Dragot is located about an hour’s drive from Jerusalem and requires a short but rough drive along an unpaved road to reach the shoreline.\nPrimitive camping is aloud along the shore. The only nearby hotel and bar is the cliff top Metzoke Dragot Travelers Village.\nMetsoke Dragot, Highway 90, Dead Sea, Israel\nPraia Massarandupió, Bahia, Brazil\nThe string bikinis on Copacabana may expose an awful lot of Brazilian flesh, but not nearly as much as this naturist beach along the Bahia coast.\nA two-hour drive north of Salvador, the nude beach is about a one-kilometer walk from the parking lot along the shoreline flanked by coconut palms, rolling dunes and very surfable waves.\nPraia Massarandupió, Bahia, Brazil\nSpiaggia di Guvano, Vernazza, Italy\nLocated on the gorgeous Cinque Terre, this primo Italian nude beach looks like something out of a movie (think “Swept Away ” – the 1974 version directed by Lina Wertmüller.)\nAdding to the beach’s mystique is the fact that it can only be reached via an old, abandoned railway tunnel (bring a flashlight) on a path from Corniglia village.\nGuvano is totally primitive, with no facilities of any kind, so bear this in mind when planning your visit.\nThe beach is also pebble rather than sand, but the water is clear, clean and gorgeous.\nSpiaggia di Guvano, 19018 Vernazza, SP, Italy\nHaulover Beach Park, Miami, Florida\nThe most popular public nude beach in the United States, Haulover attracts more than 1.3 million bare bottomed people to its white sands and warm water each year.\nThe clothing-optional portion, marked at either end by picket fences, offers rental beach chairs and umbrellas, as well as lifeguards.\nGiven the stellar weather in south Florida, there’s usually someone in the buff on any given day.\nBut the biggest crowds gather during National Nude Recreation Week in July and whenever Haulover is trying to set a new Guinness World Record for skinny dipping.\nHaulover Beach Park , 10800 Collins Ave, Miami Beach, FL 33154; + (305) 944-3040\nThe-CNN-Wire ™ & © 2023 Cable News Network, Inc., a Warner Bros. Discovery Company. All rights reserved.\n  Report an error  Policies and Standards  Contact Us     ',
            platform: 'the-mercury-news',
            location: 'Malibu, California',
            event_classification: 'mass casualty',
            sentiment: 'negative',
            resources: {
              for_parents: [
                'https://www.apa.org/topics/gun-violence-crime/shooting-aftermath',
                'https://www.nytimes.com/article/talk-about-school-shootings-kids.html',
                'https://www.nctsn.org/sites/default/files/resources//parents_guidelines_for_helping_youth_after_the_recent_shooting.pdf',
                'https://youtu.be/KANprqSTX2k',
              ],
              for_teachers_staff: [
                'https://www.nytimes.com/2022/05/25/learning/lesson-plans/resources-for-talking-and-teaching-about-the-school-shooting-in-uvalde-texas.html',
                'https://www.nctsn.org/sites/default/files/resources//pfa_schools.pdf',
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/pfa_for_schools_for_principals_and_administrators.pdf',
              ],
              for_counselors: [
                'https://www.schoolcounselor.org/Publications-Research/Publications/Free-ASCA-Resources/After-a-School-Shooting',
              ],
              for_students: [
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/for_teens_coping_after_mass_violence.pdf',
                'https://www.everydayhealth.com/emotional-health/under-pressure/the-top-mental-health-tiktok-influencers-and-why-theyre-important/',
              ],
            },
          },
          {
            title: 'Getting to know the world of backyard chickens',
            body: '“Like most people, I initially got chickens because I wanted a source of eggs from hens who I knew had lived good lives,” freelance journalist Tove Danovich says. “It kind of spiraled from there.”\nDanovich’s “spiral” took her into a fascinating investigative journey to get a wider view of chickens, their evolution, their lives and the ways in which they are used.\nThe result is her engaging new book, “Under the Henfluence: Inside the World of Backyard Chickens and the People Who Love Them” (Agate, $27) that seamlessly blends memoir with animal welfare journalism.\nDanovich’s book outlines “the pros and cons of the (backyard chicken) movement with stories from my flock as well as looking out a bit more at who chickens are as a species and why I think they’re so lovely.”\nShe lives with her flock of eight hens and documents their activities on Instagram at @bestlittlehenhouse.\n“Each of my girls very much has her own personality,” she says. “My tiny bantam Emmylou won’t come back into the coop until I’ve hand-fed her treats.”\n \nHer head hen, Peggy, is the flock peacemaker. “She calmly runs up to insert herself between anyone who is fighting and gives them a warning stare,” Danovich says. “If anyone tries to start something after that, she’ll give them a good peck or two.”\n“I hope that wherever people start off, that they care about chickens a little bit more after they finish the book,” says “Under the Henfluence” author Tove Danovich.\nWhen she got her first hens, she read everything that she could find about chickens at her local library.\n \n“There were a lot of books about raising them, or how we farm them, but nothing that really captured the essence of chickendom, the delight of living alongside these quirky, fascinating birds,” she says.\nSo, she wrote one.\n“Some readers will have not thought about chickens much before reading it and others will probably already be very interested in animal welfare,” she says. “I hope that wherever people start off, that they care about chickens a little bit more after they finish the book.\n“I’d love to see our standards for chicken farming, slaughter, and really everything about the commercial egg and poultry industry improve. As it stands, they are easily the most numerous and worst treated farm animal out there.”\nChickens, she says, are smarter than people give them credit for. “They make over 24 different sounds which all refer to specific things and you can even train them,” she says. “The flock always has funny dramas and friendships going on that are as interesting to guess at as a soap opera. It’s been such a joy to try and understand how they see the world.”\nAre backyard chickens for everyone?\n“Whenever the economy goes down, people get chickens,” she says. She appreciates that it gives people a chance to get to know and fall in love with chickens, but warns against “panic-buying” animals.\n“It is not great for the animals and can lead to a lot of ill-prepared people,” she says.\nEven with high prices, factory-farmed eggs “are still incredibly cheap because commercial farms use economies of scale and optimize everything about these birds’ genetics, feed, and conditions to have the most output at the lowest prices,” she says.\n“You’re just not going to get that in your backyard. Getting chickens can be wonderful but it’s rarely a cost-saving measure.”\nRaising backyard chickens can be the answer, however, for those who want to eat eggs but are concerned about the planet and the humane treatment of animals in factory farms.\nEmmylou, a Belgian Barbu d’Uccle bantam, sits on her nest in Tove Danovich’s Portland coop.\n“There’s been a lot of talk about how red meat is bad for the planet and has a huge carbon footprint but chicken isn’t without problems and we raise these birds and eat them in much higher quantities,” she says.\nChicken manure on a large scale, she points out, can be bad for the planet.\n“When you raise hundreds of thousands of birds in a small area, you simply don’t have enough places to put it where the plants can process it,” she says, adding that it’s just one of many ecological issues related to chicken farming.\n“Areas in the ‘broiler belt’ where meat chickens are raised, have huge issues with algal blooms in the waterways and other pollution from nitrogen runoff, a lot of which is caused by chicken production.”\nIf you want to raise your own backyard flock, here are Danovich’s top tips:\n• Choose a solid coop that protects against raccoons, raptors and other predators.  “A lot of premade coops sold online or in farm stores are not big enough or safe for chickens. Getting chickens just to have them all eaten by predators is terrible for everyone”.\n• Deter rats. “Protect the coop from digging or climbing pests before you move the chickens in because retrofitting it is going to be a pain.”\n• Do your research. “There are so many groups on social media and Youtube devoted to raising chickens as well as how-to books, and now ‘Under the Henfluence’ that can make sure you’re providing the best care for your flock.”\n• Protect flocks, especially free-ranging ones near any body of water, from the contagious and deadly avian flu. “If any one of your flock gets avian flu, they all have to be euthanized. I change my shoes if I’ve been walking outside of my yard before I get close to the flock and have recently moved them into a larger coop-and-run so I can keep them inside during migration season.”\n• Be responsible.  “Dumping animals is always bad and also illegal in many areas. Hens can always be re-homed no matter how old they are. Someone will want them. And the older girls can be wonderful members of the flock even if their egg production has slowed a bit.” Roosters “are a little harder to place but backyard chicken groups on Facebook, if not the local humane society, are all good options to post about a rooster needing a new home.”\n• Eat for the planet. “Not everyone can or wants to become vegan or vegetarian but eating fewer animal products is always going to be one of the most impactful things you can do for animals like chickens and the planet,” she says.\n• Help change laws. “The percent of people who can afford to switch to pasture-raised eggs is small,” she says. “Changing laws to provide chickens with more space, access to dust bathing so they can stay clean, and the ability to nest and do other behaviors would be so impactful.”\n• Adopt, don’t shop. “I’d love to see more people rescue chickens from egg farms. Most egg laying hens are killed before they’re 2 years old ,but some organizations, such as Hen Harbor in Santa Cruz, are working to save and re-home these hens. They’re so sweet and have never gotten to really be a chicken. Watching them transform thanks to your care is absolutely wonderful.”\n  Report an error  Policies and Standards  Contact Us     ',
            platform: 'the-mercury-news',
            location: 'Corcoran, California',
            event_classification: 'mass casualty',
            sentiment: 'negative',
            resources: {
              for_parents: [
                'https://www.apa.org/topics/gun-violence-crime/shooting-aftermath',
                'https://www.nytimes.com/article/talk-about-school-shootings-kids.html',
                'https://www.nctsn.org/sites/default/files/resources//parents_guidelines_for_helping_youth_after_the_recent_shooting.pdf',
                'https://youtu.be/KANprqSTX2k',
              ],
              for_teachers_staff: [
                'https://www.nytimes.com/2022/05/25/learning/lesson-plans/resources-for-talking-and-teaching-about-the-school-shooting-in-uvalde-texas.html',
                'https://www.nctsn.org/sites/default/files/resources//pfa_schools.pdf',
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/pfa_for_schools_for_principals_and_administrators.pdf',
              ],
              for_counselors: [
                'https://www.schoolcounselor.org/Publications-Research/Publications/Free-ASCA-Resources/After-a-School-Shooting',
              ],
              for_students: [
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/for_teens_coping_after_mass_violence.pdf',
                'https://www.everydayhealth.com/emotional-health/under-pressure/the-top-mental-health-tiktok-influencers-and-why-theyre-important/',
              ],
            },
          },
          {
            title:
              'For California native species, floods help revive ecosystems',
            body: 'Editor’s Note: This article was written for Mosaic Vision, an independent journalism training program for high school students who report and photograph stories under the guidance of professional journalists.\nAn unprecedented series of fierce atmospheric river storms has drenched California this year, flooding neighborhoods and burying mountain towns under record snowfalls. But for many native wildlife and plant species, the wet weather is a welcome relief after years of drought.\nWhile the storms have exacted a toll on some species and vegetation, biologists and botanists point out the overall effect of the record rains as a positive phenomenon that will revive parched ecosystems.\n“The native species in the Bay Area are kind of like, ‘It’s great to see some water again,’ ” said Sarah Jacobs, assistant curator of botany at the California Academy of Sciences.\nNative plant species can adapt to natural challenges, Jacobs said. But she expressed concerns that non-native plants and trees may not fare as well. Invasive species, such as eucalyptus trees, are not well adapted to strong wind gusts and many have toppled in the Bay Area.\nThe Midpeninsula Regional Open Space District, which oversees 70,000 acres of public lands in Santa Clara, Santa Cruz and San Mateo counties, has been the scene of multiple landslides and uprooted trees due to storm damage, resulting in trail closures. In March, a mother hiking with her son at Rancho San Antonio Park was killed by a toppled tree that fell due to rain-saturated soils and wind.\n \nPeople, however, have not been the only casualties of the increased rain.\nThe Midpen biology team has noticed that the rains have sped up the migration of newts, small semi-aquatic salamanders. “The newts have been a lot more active at coming down the hillside, and unfortunately, they have to cross a road,’’ said Ryan McCauley, Midpen public affairs specialist. “A lot of times they are run over by people going to the reservoir, so we have seen an uptick in roadkill.’’\n \nThe biology team is working on making crossing safer for the newts.\nIn the Sierra Nevada mountains, migratory animals such as deer will benefit from this year’s deep snowfall, said Kelley Stewart, a professor of natural resources and environmental science at the University of Nevada-Reno.\nDeer especially have suffered from the drought which has forced them to change their migration patterns, she said. “With the deer, I’m hoping there is great soil moisture to hopefully recharge the soil and help the trees,” Stewart said.\nBlack bears may well benefit from a bumper crop of food due to the rains.\n“We’re hoping that this year, there is a good berry crop up high so the bears won’t come into town (and create bear conflicts),” she said, alluding to the conflicts between homeowners in the mountains and foraging bears rummaging through garbage.\nBut the atmospheric storms are not enough to erase the damage done by years of drought. Pre-existing drought conditions have been so severe that the Pacific Fishery Management Council, which develops management practices for U.S. West Coast marine fisheries, has canceled this year’s commercial salmon fishing season. This fishing suspension last happened in the 2008-2009 season.\nThere is hope that the abundance of fresh water eventually will spur an increase in chinook and coho salmon and steelhead trout spawning runs, said Joshua Fuller, a biologist for the Fisheries West Coast Region of the National Oceanic and Atmospheric Administration.\nThough this is generally a positive change, the swift flood currents can push river material, such as gravel beds, and scour out nests for some species.\n“But overall, we are very pleased to see this much water this year,’’ Fuller said, “and to see reservoirs throughout California –particularly Northern California — be full for a change. I think it will definitely help the situation.’’\nSaira Ahmed is a junior at Homestead High School in Cupertino.\n  Report an error  Policies and Standards  Contact Us     ',
            platform: 'the-mercury-news',
            location: 'Paradise, California',
            event_classification: 'mass casualty',
            sentiment: 'negative',
            resources: {
              for_parents: [
                'https://www.apa.org/topics/gun-violence-crime/shooting-aftermath',
                'https://www.nytimes.com/article/talk-about-school-shootings-kids.html',
                'https://www.nctsn.org/sites/default/files/resources//parents_guidelines_for_helping_youth_after_the_recent_shooting.pdf',
                'https://youtu.be/KANprqSTX2k',
              ],
              for_teachers_staff: [
                'https://www.nytimes.com/2022/05/25/learning/lesson-plans/resources-for-talking-and-teaching-about-the-school-shooting-in-uvalde-texas.html',
                'https://www.nctsn.org/sites/default/files/resources//pfa_schools.pdf',
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/pfa_for_schools_for_principals_and_administrators.pdf',
              ],
              for_counselors: [
                'https://www.schoolcounselor.org/Publications-Research/Publications/Free-ASCA-Resources/After-a-School-Shooting',
              ],
              for_students: [
                'https://www.nctsn.org/sites/default/files/resources/fact-sheet/for_teens_coping_after_mass_violence.pdf',
                'https://www.everydayhealth.com/emotional-health/under-pressure/the-top-mental-health-tiktok-influencers-and-why-theyre-important/',
              ],
            },
          },
        ],
      }
    },
    components: {
      TitleSection,
    },
    methods: {
      /* Commented out for now
      async getArticles() {
        const params = { n: this.limit }
        if (this.event_classification) {
          params.event_classification = this.event_classification
        }
        const response = await axios.get('/articles/', { params })
        this.articles = response.data
      },
      */
      getDummyArticles() {
        this.articles = this.dummyArticles
      },
    },
    watch: {
      limit: 'getDummyArticles',
      event_classification: 'getDummyArticles',
    },
    mounted() {
      this.getDummyArticles()
    },
  }
</script>

<style scoped>
  .article__source {
    font-size: 0.75rem;
    color: var(--light-text-color);
    margin-bottom: 0.5rem;
  }
  .badge {
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    display: inline-block;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  .positive {
    background-color: #ff9494; /* Green */
  }

  .neutral {
    background-color: #fab584; /* Gray */
  }

  .negative {
    background-color: #2c8c9c; /* Red */
  }

  .mass-casualty {
    background-color: #ff6b6b; /* Red */
  }

  .homicide {
    background-color: #f89e5d; /* Dark Orange */
  }

  .natural-disaster {
    background-color: #4acdc4; /* Green */
  }

  .assault {
    background-color: #1a535c; /* Blue */
  }

  .other {
    background-color: #9fa6c5; /* Purple */
  }

  .articles {
    padding: 1rem 2rem;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    border-bottom: 1px solid #eaeaea;
    cursor: pointer;
  }
  .input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid gray;
    margin-right: 1rem;
  }
  label {
    margin-right: 1rem;
    color: var(--dark-text-color);
  }
  .home {
    padding: 5rem;
  }

  .filters {
    margin: 2rem 0rem;
  }

  .article__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: var(--dark-text-color);
  }
  .article__body {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 1rem 0rem;
    font-size: 1rem;
    font-weight: 300;
    color: var(--dark-text-color);
  }

  .article {
    /* Add styling for individual articles here */
    padding: 1rem 0rem;
    border-bottom: 1px solid #eaeaea;
  }

  .no-articles {
    font-style: italic;
    color: gray;
  }

  @media screen and (max-width: 600px) {
    .home {
      padding: 2rem;
    }
  }
</style>
