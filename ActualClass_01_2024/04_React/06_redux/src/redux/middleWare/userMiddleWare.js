useEffect(function () {
    (async function () {
        try {
            setLoading(true);
            const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const useresp = await resp.json();

            setUser(useresp);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    })();
}, []);