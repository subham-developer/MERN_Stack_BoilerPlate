// const CrudStatus = require('../models/crudStatus.model');
import CrudStatus from '../models/crudStatus.model';
// const Client =  require('../models/client.model');
import Client from '../models/client.model.js';


export const createStatus = async(req, res)=>{
    const saveStatus = await new CrudStatus({
        'name': 'Testing',
        'slug': 'testing',
        'available': 1
    });

    await saveStatus.save();
    console.log('saveStatus', saveStatus);
    return res.status(200).json({'status': 'userAdded'});

}

export const createClient = async(req, res)=>{
    const saveStatus = await new Client({
        'name': 'Testing Shubham',
        'email': 'testing'
    });

    await saveStatus.save();
    console.log('saveStatus', saveStatus);
    return res.status(200).json({'Client': 'ClientAdded'});
}

// module.exports = createStatus;