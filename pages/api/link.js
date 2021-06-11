import prisma from '../../lib/primsa'

export default async (req, res) => {
  if (req.method === 'POST') {
    const body = req.body;
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${body.url}`);
    const linkData = await response.json();
    if (linkData) {
      const link = await prisma.link.create({
        data: {
          title: linkData.title,
          description: linkData.description,
          image: linkData.image,
          url: body.url,
        }
      });
      res.status(200).json(link);
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  if (req.method === 'GET') {
    const links = await prisma.link.findMany();
    res.status(200).json(links);
  }
}
