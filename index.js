import axios from 'axios'





function foxApi() {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://randomfox.ca/floof/")
        resolve(data)
    })

}

(async () => {
    try {

        const getFox = await foxApi()
            .then((data) => console.log(data));


    } catch (err) {
        console.log(err);
    }

})()