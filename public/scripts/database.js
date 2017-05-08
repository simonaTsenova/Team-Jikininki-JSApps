import $ from 'jquery';

const database = {
    createUser: function (email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },

    pushUser: function (fullname, username, email, password) {
        return firebase.database().ref('users').push({
            // .... push info here
        });
    },

    // Getting information about the lists
    getLists: function () {
        return firebase.database().ref('lists/' + localStorage.uid).once('value');
    },
    getSingleList: function (key) {
        return firebase.database().ref('lists/' + localStorage.uid + '/' + key).once('value');
    },
    pushList: function (list) {
        return firebase.database()
            .ref('lists/' + localStorage.uid)
            .push(list)
    },
    removeList: function (listKey) {
        return firebase.database()
            .ref('lists/' + localStorage.uid + '/' + listKey)
            .remove();
    },
    // Getting information about items
    getItem: function (listKey, itemKey) {
        return firebase.database()
            .ref('lists/' + localStorage.uid + '/' + listKey + '/_items/' + itemKey)
            .once('value');
    },
    pushItem: function (listKey, item) {
        return firebase.database()
            .ref('lists/' + localStorage.uid + '/' + listKey + '/_items')
            .push(item);
    },
    removeItem: function (listKey, itemKey) {
        return firebase.database()
            .ref('lists/' + localStorage.uid + '/' + listKey + '/_items/' + itemKey)
            .remove();
    },
    updateItemCheckState: function (listKey, itemKey, state) {
        return firebase.database()
            .ref('lists/' + localStorage.uid + '/' + listKey + '/_items/' + itemKey)
            .once('value', function (item) {
                item.ref.update({
                    "_checked": state
                });
            });
    },
    updateItem: function (listKey, itemKey, title) {
        return firebase.database()
            .ref('lists/' + localStorage.uid + '/' + listKey + '/_items/' + itemKey)
            .once('value', function (item) {
                item.ref.update({
                    "_title": title,
                });
            });
    }
};

export default database;