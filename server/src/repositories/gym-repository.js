const CrudRepository = require('./crud-repository');
const Gym = require('../models/gym');


class GymRepository extends CrudRepository {

    constructor() {
        super(Gym);
    }

    async findGym(id) {
        const gym = await Gym.findOne({
            gymId : id
        });
        return gym;
    }

    async getGymInfo(id) {
        const gym = await Gym.findOne({
            gymId : id
        }).populate('plans').populate('members');
        return gym;
    }

    async getGymGraph(id) {
        const gym = await Gym.findOne({
            gymId : id
        });
        return gym.liveGraph;
    }

    async updateByGymId(id, data) {
        /* console.log('id : ', id);
        console.log('data : ', data); */
        try {
            const result = await Gym.updateOne({
                gymId : id
            }, data,
            {new: true});
            return result;
        } catch(error) {
            // console.log('error in updation of graph : ', error);
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

}

module.exports = GymRepository;