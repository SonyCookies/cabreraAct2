const main = {
  home: (req, res) => {
    res.render("index", { currentRoute: "/" });
  },

  download: (req, res) => {
    res.render("download");
  },
  library: (req, res) => {
    res.render("library");
  },
  premium: (req, res) => {
    res.render("premium");
  },
  liked_song: (req, res) => {
    res.render("liked_song");
  },
};

module.exports = main;
