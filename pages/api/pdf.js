import prisma from '../../lib/primsa'

export default async (req, res) => {
  if (req.method === 'POST') {
    const body = req.body;
    if (body) {
      const pdf = await prisma.pdf.create({
        data: {
          link: body.url,
        }
      });
      res.status(200).json(pdf);
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  if (req.method === 'GET') {
    const pdfs = await prisma.pdf.findMany();
    res.status(200).json(pdfs);
  }
}
