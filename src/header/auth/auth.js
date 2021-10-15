export default function authPanel() {
    const authPan = document.createElement('div');
    authPan.className = 'authPanel';

    const authAvatar = document.createElement('div');
    authAvatar.className = 'avatar';

    const username = document.createElement('div');
    username.className = 'userName';
    username.innerText = 'Some User'

    authPan.append(authAvatar);
    authPan.append(username);

    return authPan;
}