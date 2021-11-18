export default function sessionStor(data) {
    let out;

    if (data.action == 'read') {
        if (data.type == 'username') {
            out = sessionStorage.getItem('username');
        }
    }
    if (data.action == 'write') {
        if (data.type == 'username') { 
            sessionStorage.setItem('username', data.payload);
            out = 'Username writed';
        }
    }

    return out;
}