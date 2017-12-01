const score = { //main rules
    name: "score",
    match: "score",
    onBeforeEnter: () => {},
    onEnter: () => {
        let divContent = document.querySelector(".divContent");
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
          <tr>
            <td>Kim</td>
            <td>3000</td>
          </tr>
        </tbody>
      </table>
      `;
    },
    onLeave: () => {}
};

export { score };