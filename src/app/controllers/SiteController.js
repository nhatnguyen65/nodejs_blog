class SiteController {
    
    // GET /
    index(request, response) {
        response.render('home')
    }
    // get /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;