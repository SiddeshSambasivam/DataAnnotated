const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    error: null,
    data: {
      title: "My dashboard",
      content: "dashboard content",
      user: req.user, // token payload information
    },
  });
});

module.exports = router;