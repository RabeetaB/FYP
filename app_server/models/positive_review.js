var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var positiveReviewSchema = new Schema({
    reviews: [
        {
            review_id: {
                type: mongoose.Types.ObjectId,
                ref: 'Review'
            }
        }
    ],

});

module.exports = mongoose.model('PositiveReview', positiveReviewSchema)