export default function Home() {
  const stalls = [
    { no: "01–06", title: "Special Biryani Counter", desc: "The much-awaited Harvest Biryani experience.", tone: "gold" },
    { no: "07–14", title: "Women’s Fellowship", desc: "Food, treats and fellowship.", tone: "rose" },
    { no: "15–26", title: "Sunday School", desc: "Creative stalls, food and family fun.", tone: "green" },
    { no: "27–30", title: "Youth Fellowship", desc: "Games, activities and youthful energy.", tone: "blue" },
    { no: "31–36", title: "Other Participants", desc: "A variety of community stalls.", tone: "violet" },
  ];

  const experiences = [
    { icon: "🎟️", title: "Tambola / Bingo", text: "Bring your luck, join the numbers and enjoy the excitement together." },
    { icon: "📸", title: "Photo Booth", text: "Capture a Harvest Festival memory with family and friends." },
    { icon: "🍲", title: "Food Stalls", text: "Discover homemade favourites and festive food from our church community." },
    { icon: "🎨", title: "Arts & Crafts", text: "Explore creative work and handmade treasures from our members." },
  ];

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Holy Trinity Church Bolarum">
          <img src="/assets/htc.jpg" alt="Holy Trinity Church Bolarum" />
          <span><strong>Holy Trinity Church</strong><small>Bolarum</small></span>
        </a>
        <nav>
          <a href="#stalls">Stalls</a>
          <a href="#fun">Games & Fun</a>
          <a href="#auction">Auction</a>
          <a href="#biryani">Biryani</a>
        </nav>
        <a className="navCta" href="#visit">Plan your visit</a>
      </header>

      <section id="top" className="hero">
        <div className="heroShade" />
        <div className="heroContent">
          <div className="eyebrow"><span /> Harvest Celebration <span /></div>
          <div className="heroLogos">
            <img src="/assets/csi.png" alt="Church of South India" />
            <span>CSI Holy Trinity Church · Bolarum</span>
          </div>
          <h1>Celebrate the harvest.<br /><em>Share the joy.</em></h1>
          <p className="heroText">
            A joyful day of thanksgiving, fellowship, food, games, creativity and community
            at Holy Trinity Church, Bolarum.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="#stalls">Explore the stalls <span>↓</span></a>
            <a className="ghostBtn" href="#fun">See what’s happening</a>
          </div>
          <div className="heroFacts">
            <div><strong>36</strong><span>Stalls</span></div>
            <div><strong>7</strong><span>Tents</span></div>
            <div><strong>1</strong><span>Church family</span></div>
          </div>
        </div>
        <div className="scrollHint">Scroll to explore <span>↓</span></div>
      </section>

      <section className="intro section">
        <div className="sectionKicker">A harvest of blessings</div>
        <h2>More than a festival.<br /><span>A celebration of togetherness.</span></h2>
        <p>
          Come together after worship for an afternoon of food, fellowship and fun.
          Walk through our covered stall area, meet the teams behind each stall,
          join the games, take a family photograph and enjoy the special moments of Harvest.
        </p>
      </section>

      <section id="stalls" className="section stallsSection">
        <div className="sectionHead">
          <div>
            <div className="sectionKicker">Explore the marketplace</div>
            <h2>36 stalls. <span>Something for everyone.</span></h2>
          </div>
          <p>Seven covered tents bring the Harvest Celebration together in one easy-to-explore festival space.</p>
        </div>
        <div className="stallGrid">
          {stalls.map((stall) => (
            <article className={`stallCard ${stall.tone}`} key={stall.no}>
              <div className="stallNo">STALL {stall.no}</div>
              <h3>{stall.title}</h3>
              <p>{stall.desc}</p>
              <span className="arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="biryani" className="biryani section">
        <div className="biryaniArt" aria-hidden="true">
          <div className="sun" />
          <div className="leaf leafOne">✦</div>
          <div className="leaf leafTwo">✦</div>
          <div className="bowl">🍚</div>
        </div>
        <div className="biryaniCopy">
          <div className="sectionKicker light">The one everyone will ask about</div>
          <h2>The <em>Special Biryani</em> Counter</h2>
          <p>
            A dedicated Harvest favourite, served at the special Biryani Counter.
            Come hungry, bring your family and make it part of your celebration.
          </p>
          <div className="counterBadge">STALLS 01–06</div>
        </div>
      </section>

      <section id="fun" className="section funSection">
        <div className="sectionKicker">Play • Capture • Create • Enjoy</div>
        <h2>Games, memories & <span>creative corners.</span></h2>
        <div className="experienceGrid">
          {experiences.map((item) => (
            <article className="experience" key={item.title}>
              <div className="experienceIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="auction" className="auction">
        <div className="auctionPattern" aria-hidden="true" />
        <div className="auctionContent">
          <div className="sectionKicker light">A Harvest tradition with a twist</div>
          <h2>The Harvest <em>Auction</em></h2>
          <p>
            The vegetables and produce used to decorate the church become part of a
            fun-filled auction. Admire the Harvest display inside the church, then
            take home a piece of the celebration through the auction.
          </p>
          <div className="auctionTag">BID • LAUGH • TAKE HOME A HARVEST</div>
        </div>
        <div className="produce" aria-hidden="true">
          <span>🥕</span><span>🌽</span><span>🍅</span><span>🥬</span><span>🎃</span>
        </div>
      </section>

      <section id="visit" className="visit section">
        <div className="visitCard">
          <div>
            <div className="sectionKicker">Join us</div>
            <h2>Come for worship.<br /><span>Stay for the celebration.</span></h2>
            <p>
              Holy Trinity Church, Bolarum · Hyderabad, Telangana
            </p>
          </div>
          <div className="visitNote">
            <strong>Harvest Celebration</strong>
            <span>Details and programme updates will be announced here.</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="footerBrand">
          <img src="/assets/htc.jpg" alt="Holy Trinity Church Bolarum" />
          <div><strong>Holy Trinity Church, Bolarum</strong><span>CSI · Hyderabad</span></div>
        </div>
        <p>© {new Date().getFullYear()} Holy Trinity Church, Bolarum</p>
      </footer>
    </main>
  );
}
