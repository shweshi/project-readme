import prisma from '../../lib/primsa'

export default async (req, res) => {
  if (req.method === 'POST') {
    const body = req.body;
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${body.url}`);
    const feedData = await response.json();
    if (feedData) {
      const feed = await prisma.feed.create({
        data: {
          title: feedData.feed.title,
          description: feedData.feed.description,
          image: feedData.feed.image,
          url: feedData.feed.link,
          rss: body.url,
        }
      });
      res.status(200).json(feed);
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  if (req.method === 'GET') {
    const feeds = await prisma.feed.findMany();
    res.status(200).json(feeds);
  }
}
