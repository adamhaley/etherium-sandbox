App = {
    load: async() => {
        console.log("app loading...");
    
        await App.loadWeb3();

    },
    loadWeb3: async() => {


    }
}

$(() => {
    $(window).load(() => {
        App.load();
    });
});
