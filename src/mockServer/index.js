
export default {
    users:[
        {name: 'Alex', login: 'alex', password: '123'},
        {name: 'Vera', login: 'vera', password: '222'}
    ],
    authorization (authData) {
        const {login, password} = authData;
        const user = this.users.find(user => user.login === login);
        if (!user) throw new Error('Пользователь с таким логином не найден!');
        return user.password === password
            ? user
            : (() => {
                throw new Error('Неверный пароль!')
            })();
    }
};