// pages/api/visitor.js
import db from '../../src/app/api/db';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    // Increase visitor count
    db.query('UPDATE visitor_count SET visitors_today = visitors_today + 1, visitors_total = visitors_total + 1', (error) => {
      if (error) {
        return res.status(500).json({ error });
      }

      // Get updated visitor count
      db.query('SELECT visitors_today, visitors_total FROM visitor_count', (error, results) => {
        if (error) {
          return res.status(500).json({ error });
        }
        res.status(200).json(results[0]);
      });
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}