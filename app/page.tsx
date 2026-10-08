export default function Home() {
  const stalls = [
    { no: "01–06", title: "Special Chicken Biryani Counter", desc: "The much-awaited Chicken Biryani experience.", tone: "gold" },
    { no: "07–14", title: "Women’s Fellowship Stalls", desc: "Food, treats and fellowship from the Women’s Fellowship.", tone: "rose" },
    { no: "15–26", title: "Sunday School Stalls", desc: "Creative stalls, food and family fun.", tone: "green" },
    { no: "27–30", title: "Youth Fellowship Stalls", desc: "Games, activities and youthful energy.", tone: "blue" },
    { no: "31–36", title: "Other Participant Stalls", desc: "A variety of community stalls.", tone: "violet" },
  ];

  const experiences = [
    { icon: "🎟️", title: "Tambola / Bingo", text: "Pick your tickets, follow the numbers and enjoy the excitement together." },
    { icon: "📸", title: "Photo Booth", text: "Capture a Harvest Festival memory with family and friends." },
    { icon: "🍲", title: "Food Stalls", text: "Discover homemade favourites and festive food from our church community." },
    { icon: "🎨", title: "Arts & Crafts", text: "Explore creative work and handmade treasures from our members." },
  ];

  const contacts = [
    { group: "Stalls", name: "Mrs. Salome Bhasker", role: "Pastorate Treasurer", phone: "9848593253", tone: "gold" },
    { group: "Stalls", name: "Mr. Prashant Kumar Thodety", role: "IT & Media Secretary", phone: "9440530780", tone: "green" },
    { group: "Women’s Stalls", name: "Mrs. Mary Noel", role: "Women’s Secretary", phone: "8179353921", tone: "rose" },
    { group: "Sunday School Stalls", name: "Mrs. Feeba Christina", role: "Sunday School Superintendent", phone: "9949586819", tone: "blue" },
    { group: "Youth Fellowship Stalls", name: "Mr. R. Pradeep", role: "Youth Secretary", phone: "9703455140", tone: "violet" },
    { group: "Auction of Fruits & Vegetables", name: "Mr. Sunil Kumar Lingala", role: "Pastorate Secretary", phone: "7337448486", tone: "orange" },
  ];

  const committee = [
    ["Rev. Dr. John Sunder M", "Presbyter In Charge"],
    ["Rev. Dr. Jyothi Sunder", "Associate Presbyter"],
    ["Rev. Kiran", "Presbyter"],
    ["Mr. Sunil Lingala", "Pastorate Secretary"],
    ["Dr. Chandrashekar LEJ", "Property Secretary"],
    ["Mrs. Salome Bhasker", "Pastorate Treasurer"],
    ["Prof. GS. Gabriel", "Pastorate Steward"],
    ["Mr. Sam Kubendar", "Church Steward"],
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
          <a href="#contact">Contacts</a>
        </nav>
        <a className="navCta" href="#biryani">Get Biryani Coupons</a>
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
            A joyful celebration of thanksgiving, fellowship, food, games, creativity
            and community at Holy Trinity Church, Bolarum.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="#stalls">Explore the stalls <span>↓</span></a>
            <a className="ghostBtn" href="#fun">See what’s happening</a>
          </div>
          <div className="heroFacts">
            <div><strong>36</strong><span>Stalls</span></div>
            <div><strong>₹200</strong><span>Biryani Coupon</span></div>
            <div><strong>₹20</strong><span>Tambola Ticket</span></div>
          </div>
        </div>
        <div className="scrollHint">Scroll to explore <span>↓</span></div>
      </section>

      <section className="harvestDates section">
        <div className="sectionKicker">Mark your calendar</div>
        <h2>Harvest Celebration <span>2026.</span></h2>
        <div className="dateGrid">
          <article className="dateCard">
            <div className="dateBadge"><strong>10</strong><span>OCT</span></div>
            <div>
              <small>Saturday · From 4:00 PM onwards</small>
              <h3>Church Decoration</h3>
              <p>Come together to decorate the church and prepare our Harvest celebration space with joy and fellowship.</p>
              <div className="dateLeaders">
                <strong>Mr. R. Pradeep</strong>
                <span>Youth Secretary</span>
                <strong>Ms. Sharon Grace GS</strong>
                <span>Social Media Secretary</span>
              </div>
            </div>
          </article>
          <article className="dateCard choirCard">
            <div className="dateBadge"><strong>10</strong><span>OCT</span></div>
            <div>
              <small>Saturday · From 6:00 PM onwards</small>
              <h3>Choir Practice</h3>
              <p>Combined choir practice for both English and Telugu Harvest songs.</p>
              <div className="choirLanguages"><span>English Songs</span><span>Telugu Songs</span></div>
            </div>
          </article>
          <article className="dateCard highlight">
            <div className="dateBadge"><strong>11</strong><span>OCT</span></div>
            <div>
              <small>Sunday · 9:30 AM</small>
              <h3>Combined Worship Service &amp; Harvest Festival</h3>
              <p>Join us for the Combined Worship Service at 9:30 AM as we celebrate our Harvest Festival together in thanksgiving, worship and fellowship.</p>
            </div>
          </article>
        </div>
        <div className="decorationInvite">
          <span>✦</span>
          <p><strong>Everyone is welcome.</strong> Any member is warmly invited to come and participate in the church decoration for Harvest.</p>
        </div>
      </section>

      <section className="titheSection section">
        <div className="titheInner">
          <div className="sectionKicker light">A message from the Presbyter In Charge</div>
          <h2>Let us give with <em>thanksgiving.</em></h2>
          <p>
            As we prepare to celebrate the Harvest, let us remember that every blessing we
            receive comes from the Lord. Our Harvest offering and tithe are an expression
            of gratitude, worship and trust in God. Let us give willingly, prayerfully and
            cheerfully, according to the blessings God has entrusted to each of us.
          </p>
          <blockquote>
            “Bring the whole tithe into the storehouse… Test me in this,” says the Lord Almighty.
            <cite>— Malachi 3:10</cite>
          </blockquote>
          <blockquote>
            “God loves a cheerful giver.”
            <cite>— 2 Corinthians 9:7</cite>
          </blockquote>
          <p className="titheClosing">
            May our giving become an offering of love to the Lord and a blessing to His
            Church and to those whom we serve. Let us come together in faith and thanksgiving,
            giving not out of compulsion, but with joyful hearts.
          </p>
          <div className="presbyterSign">Rev. Dr. John Sunder M <span>· Presbyter In Charge</span></div>
        </div>
      </section>

      <section id="stalls" className="section stallsSection">
        <div className="sectionHead">
          <div>
            <div className="sectionKicker">Explore the marketplace</div>
            <h2>36 stalls. <span>Something for everyone.</span></h2>
          </div>
          <p>Explore the Harvest Celebration stalls and meet the teams serving our church community.</p>
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
          <img
            className="biryaniPhoto"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Chicken_Biryani_from_the_streets_of_Hyderabad.JPG"
            alt=""
          />
          <div className="biryaniPhotoShade" />
          <div className="biryaniPhotoLabel">Chicken Biryani · Representative Image</div>
        </div>
        <div className="biryaniCopy">
          <div className="sectionKicker light">The special one</div>
          <h2>The <em>Special Chicken Biryani</em> Counter</h2>
          <p>
            Make sure you don't miss our special Chicken Biryani. Only 180 coupons
            are being sold, on a first-come, first-served basis.
          </p>
          <div className="couponPrice"><span>₹200</span> per coupon</div>
          <div className="couponAlert"><strong>ONLY 50 COUPONS LEFT</strong><span>First come • First serve</span></div>
          <div className="couponContacts">
            <div><strong>Coupons can be collected from</strong></div>
            <a href="tel:8801450005">Mr. Ravi Chaitanya <span>· Social Media Secretary</span><b>8801450005</b></a>
            <a href="tel:9440530780">Mr. Prashant Kumar Thodety <span>· IT & Media Secretary</span><b>9440530780</b></a>
          </div>
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

        <div className="tambolaCard">
          <div>
            <div className="sectionKicker">An enjoyable event</div>
            <h3>Tambola / Bingo</h3>
            <p>Enjoy the numbers game and make your Harvest Celebration even more memorable.</p>
          </div>
          <div className="ticketPrices">
            <div><strong>₹20</strong><span>Each Ticket</span></div>
            <div><strong>₹100</strong><span>Full Sheet · 6 Tickets</span></div>
          </div>
          <div className="organisedBy">
            <small>Organised by</small>
            <strong>Mr. Ravi Kumar Thodety</strong>
            <span>9849001813</span>
          </div>
        </div>
      </section>

      <section id="auction" className="auction">
        <div className="auctionPattern" aria-hidden="true" />
        <div className="auctionContent">
          <div className="sectionKicker light">A Harvest tradition with a twist</div>
          <h2>The Harvest <em>Auction</em></h2>
          <p>
            The fruits and vegetables used to decorate the church become part of a
            fun-filled auction. Admire the beautiful Harvest display inside the church,
            then bid and take home a piece of the celebration.
          </p>
          <div className="auctionTag">BID • LAUGH • TAKE HOME A HARVEST</div>
          <div className="auctionIncharge">
            <small>Auction In Charge</small>
            <strong>Mr. Sunil Kumar Lingala</strong>
            <span>Pastorate Secretary · 7337448486</span>
          </div>
        </div>
        <div className="produceCounter" aria-hidden="true">
          <div className="produceImageWrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/Fruit_and_vegetables_basket.jpg"
              alt=""
            />
          </div>
          <div className="produceCounterLabel">
            <strong>Fresh Harvest Produce</strong>
            <span>Fruits &amp; Vegetables · For Sale &amp; Auction</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <div className="sectionKicker">Who to contact</div>
        <h2>Festival <span>incharges.</span></h2>
        <div className="contactGrid">
          {contacts.map((person) => (
            <article className={`contactCard ${person.tone}`} key={person.group}>
              <small>{person.group}</small>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <a href={`tel:${person.phone}`}>Call <b>{person.phone}</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section committeeSection">
        <div className="sectionKicker">With gratitude and leadership</div>
        <h2>Organizing <span>Committee.</span></h2>
        <div className="committeeGrid">
          {committee.map(([name, role]) => (
            <div className="committeePerson" key={name}>
              <span className="personDot">✦</span>
              <div><strong>{name}</strong><small>{role}</small></div>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="visit section">
        <div className="visitCard">
          <div>
            <div className="sectionKicker">Join us</div>
            <h2>Come for worship.<br /><span>Stay for the celebration.</span></h2>
            <p>Holy Trinity Church, Bolarum · Hyderabad, Telangana</p>
          </div>
          <div className="visitNote">
            <strong>Harvest Celebration</strong>
            <span>Watch this page for programme details, timings and announcements.</span>
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
