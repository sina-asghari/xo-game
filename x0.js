var cells = document.querySelectorAll(".cell");
      var turn = "x";
      var message = document.getElementById("message");
      var isEnd = false;
      var winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      function checkWin() {
        var turnClass = "fill-" + turn;
        var isWon = winningConditions.some(function (winningCondition) {
          var winning = winningCondition.every(function (index) {
            return cells[index].classList.contains(turnClass);
          });
          if (winning) {
            for (var j = 0; j < winningCondition.length; j++) {
              cells[winningCondition[j]].classList.add("highlight");
            }
          }
          return winning;
        });
        return isWon;
      }

      function checkDraw() {
        filledCount = 0;
        for (var i = 0; i < cells.length; i++) {
          var cell = cells[i];
          if (
            cell.classList.contains("fill-x") ||
            cell.classList.contains("fill-o")
          )
            filledCount++;
        }
        if (filledCount === 9) return true;
        else return false;
      }

      for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener(
          "click",
          function (e) {
            if (isEnd) return;
            var cell = e.target;
            cell.classList.add("fill-" + turn);

            if (checkWin()) {
              message.innerHTML = turn.toUpperCase() + " barande shod!";
              isEnd = true;
            } else if (checkDraw()) {
              message.innerHTML = "Bazi mosavi shod!";
              isEnd = true;
            } else {
              turn = turn === "x" ? "o" : "x";
              message.innerHTML = "Nobate " + turn.toUpperCase() + " ast";
            }
          },
          { once: true }
        );
      }