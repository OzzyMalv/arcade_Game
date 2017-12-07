import DB from "../utils/DB";

const score = { //main rules
    name: "score",
    match: "score",
    onBeforeEnter: () => {},
    onEnter: () => {
        let divContent = document.querySelector(".divContent");
        new DB().fetchItem("players")
            .then((players) => {
                let td = '';
                players.map(player => {
                    td += `<tr><td>${player.name}</td><td>${player.score}</td></tr>`
                })
                return td;
            })
            .then((td) => {
                divContent.innerHTML = `
              <table class="tableScore">
              <caption>Best scores</caption>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>               
                ${td}
              </tbody>
            </table>
            `;
            })
    },
    onLeave: () => {}
};

export { score };