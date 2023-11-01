import { getAnimalsData } from "../adapters/supabaseAdapter.js";


// TODO make sure this function will get called when visiting the /appointments route
  export async function getAnimals(req, res) {
    try {
     // TODO here you can make a call to the getAppointmentsData function
     const data = await getAnimalsData();
     // TODO create a json response to
     res.status(200).json(data);
    } catch (err) {
      res.send(`error in viaSupabase: ${err}`);
    }
  }