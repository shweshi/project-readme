import prisma from '../../lib/primsa'

export default async (req, res) => {
  if (req.method === 'POST') {
    const body = req.body;
    if (body) {
      const youtube = await prisma.youtube.create({
        data: {
          link: body.url,
        }
      });
      res.status(200).json(youtube);
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  if (req.method === 'GET') {
    const youtubes = await prisma.youtube.findMany();
    res.status(200).json(youtubes);
  }
}
