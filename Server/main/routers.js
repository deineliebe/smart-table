
router.get('/api/get/tests', (req, res, next) => {
    search_query = String(req.query.search_query)
    pool.query(`SELECT * FROM `,
      [ search_query ], (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows);
    });
  });
  