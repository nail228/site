import session from './session';

export default {
   async login(username, password) {
        return await session.post('/api/login/', { username, password });
    },
    logout() {
        return session.post('/api/logout', {});
    },
    getAccountDetails() {
        return session.get('/api/user');
    },
    updateAccountDetails(data) {
        return session.patch('/api/user', data);
    },
    loginAdmin(){
        return session.post('api/isadmin')
    }
};