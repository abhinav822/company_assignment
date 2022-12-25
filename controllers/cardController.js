const cardModel = require('../models/cardModel');

// 1. Get all cards List 

exports.getAllCards = async (req, res) => {

    try {
        const cards = await cardModel.find(); 
        res.status(200).json({
            status: 'success',
            data: {
                cards
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}


exports.createCard = async (req, res) => {
    try {
        const newCard = await cardModel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                card: newCard
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}


