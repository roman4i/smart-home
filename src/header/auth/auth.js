import fakeAPI from "../../utils/fakeAPI";
import sessionStor from "../../utils/session/storage";

const API = new fakeAPI();
const usersData = API.getAuthData();
let toSession = {
    action: 'read',
    type: 'username',
    payload: '',
}

let user = sessionStor(toSession);

const checkLogin = (log) => {
    let avatarColor = 'gray';
    for (let key in usersData) {
        if (log == usersData[key].username) {
            avatarColor = usersData[key].avatar;
            break;
        }
    }

    return avatarColor;
}

export default function authPanel() {
    const authPan = document.createElement('div');
    authPan.className = 'authPanel';

    // avatar block, have background color, rounded
    let authAvatar = document.createElement('div');
    authAvatar.className = 'avatar';

    authAvatar.style.background =  checkLogin(user);

    const userWord = document.createElement('div');
    userWord.className = 'userWord';
    userWord.innerText = user[0];

    authAvatar.append(userWord);

    const username = document.createElement('div');
    username.className = 'userName';

    // Greeting phrase
    const greeting = document.createElement('div');
    greeting.innerText = 'Hello ';

    // Username
    const userLogin = document.createElement('a');
    userLogin.innerText = user;

    const newLogin = document.createElement('input');
    newLogin.type = 'text';
    newLogin.hidden = true;
    newLogin.onkeydown = () => {
        if (event.key == 'Enter') {
            user = newLogin.value;
            toSession.payload = user;
            toSession.action = 'write';
            sessionStor(toSession);
            userLogin.innerText = user;
            userWord.innerText = user[0];
            newLogin.hidden = true;
            userLogin.hidden = false;
            authAvatar.style.background =  checkLogin(user);
        }
    }

    userLogin.onclick = () => {
        userLogin.hidden = true;
        newLogin.hidden = false;
    }

    username.append(greeting);
    username.append(userLogin);
    username.append(newLogin);

    authPan.append(authAvatar);
    authPan.append(username);

    return authPan;
}