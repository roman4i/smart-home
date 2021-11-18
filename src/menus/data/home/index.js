import fakeAPI from "../../../utils/fakeAPI";
import sessionStor from "../../../utils/session/storage";

const dataAPI = new fakeAPI();
const sensorsData = dataAPI.getSensorsData();
let toSession = {
    action: 'read',
    type: 'username',
    payload: '',
}

export default function homePage() {
    let devCount = 0;
    let user = sessionStor(toSession);

    for (let key in sensorsData) {
        devCount += 1;
    }

    const home = document.createElement('div');
    home.innerText = 'Hello ' + user + '. This is smart home system. You`re welcome!' + '\n You have ' + devCount + ' devices';

    return home;
}