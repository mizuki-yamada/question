"use strict";

{
  const render = (quiz) => {
    const main = document.querySelector("main");
    //section要素を追加
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = quiz[0]; //1の正解は？

    const ul = document.createElement("ul");
      for (let i = 0; i < 3; i++){
        //li要素を3つ作りたい
        const li = document.createElement("li");
        li.textContent = quiz[i+1];
        li.addEventListener("click", () => {
          if (quiz[4] === i) {
            li.classList.add("correct");
          } else {
            li.classList.add("wrong");
          }
        });
              ul.appendChild(li);
      }

    section.appendChild(h2);//__の選択肢は？の表示
    section.appendChild(ul);//選択肢の表示
    main.appendChild(section);
  };

  // 問題文, 選択肢, 選択肢, 選択肢, 正解(0, 1, 2)
  const quizzes = [
    ["1の正解は？", "選択肢 A", "選択肢 B", "選択肢 C", 0],
    ["2の正解は？", "選択肢 A", "選択肢 B", "選択肢 C", 1],
    ["3の正解は？", "選択肢 A", "選択肢 B", "選択肢 C", 2],
  ];

  quizzes.forEach((quiz) => {
    render(quiz);
  });
}
