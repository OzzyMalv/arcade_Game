class DB {
    fetchItem(key) {
        let data = JSON.parse(localStorage.getItem(key));
        if (data) return Promise.resolve(data);
        return Promise.reject();
    }

    setItem(key, value) {
        return Promise.resolve(localStorage.setItem(key, JSON.stringify(value)));
    }
}

export default DB;