module.exports = (req,res) => {
    res.render('paidBribe', {
        errors: req.flash('storingErrors'),
        data: req.flash('data')[0]
    })
};
