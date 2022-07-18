// Define your own mock data here:
export const ARTICLE1 = {
  id: 1,
  title: 'First Post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
  createdAt: '2020-01-01T12:34:45Z',
}

export const ARTICLE2 = {
  id: 2,
  title: 'Second Post',
  body: `Ugh literally gastropub shaman DIY kinfolk taiyaki food truck four loko copper mug godard palo santo. Ugh trust fund vinyl edison bulb pop-up stumptown yuccie flexitarian helvetica small batch. Pinterest cray paleo, health goth skateboard flannel put a bird on it. Pinterest cronut blog swag, copper mug pork belly prism schlitz literally kombucha DIY enamel pin selfies PBR&B.`,
  createdAt: '2020-01-01T12:34:45Z',
}

export const standard = (/* vars, { ctx, req } */) => ({
  articles: [ARTICLE1, ARTICLE2],
})
