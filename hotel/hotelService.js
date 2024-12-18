var Hotel = require('./hotelModel');

// Récupérer tous les étudiants
async function list(req, res, next) {
    try {
        const data = await Hotel.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des Hotel', error: err });
    }
}

const create = async (req, res, next) => {
    try {
        const hotel = await Hotel.create(req.body);
        res.status(201).json({
            message: `Hotel ajouté ! nom: ${hotel.name}, date: ${hotel.fabricationDate}, nbr: ${hotel.nbrRooms}`
        });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'Hotel', error: err });
    }
};


const update = async (req, res, next) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
       
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel non trouvé' });
        }
        
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'Hotel', error: err });
    }
};


async function deleteH(req, res, next) {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);

        if (!deletedHotel) {
            return res.status(404).json({ message: 'Étudiant non trouvé pour suppression' });
        }

        res.status(200).json({ message: 'Hotel supprimé', data: deletedHotel });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'Hotel', error: err });
    }
}

module.exports = { create, list, update, deleteH };
