const gameBoard = document.getElementById('game-board');

gameBoard.innerHTML = `<!-- Question and Answer fields, including autocomplete dropdown menu -->
<div class="flex-column row w-100">
    <div>
        <p><b>Country</b></p>
    </div>
    <div id="country" class="game-box p-3 w-100"></div>
    <form autocomplete="off" class="flex-column p-0">
        <div class="autocomplete w-100 mt-3">
            <label for="answer" class="flex-column"><b>Capital</b></label>
            <div class="inp-and-btn">
                <input id="answer" class="p-3 w-100" type="text" name="capital"
                    placeholder="What do you think? :)"
                    aria-label="Type here what you think the capital city is." READONLY>
                <button class="game-box" id="all-asia-caps"
                    aria-label="When clicked will show all the options of capital cities to choose from."><i
                        class="fa-solid fa-caret-down"></i></button>
            </div>

            <ul class="options-list"></ul>
        </div>
        <div class="end-quiz-btns flex-row">
            <input type="submit" id="submit-button" class="btn btn-outline-dark p-3 mx-2"
                value="Check Answer">
            <input type="submit" id="next-button" class="btn btn-outline-dark p-3 mx-2" value="Next">
        </div>
    </form>
</div>
<!--Score and Question tracking  -->
<div id="counters" class="flex-row my-4">
    <div id="score" class="mx-2">Score 0</div>
    <div id="questions-left" class="mx-2"></div>
</div>
<!--Where answer feedback will appear  -->
<div class="flex-column w-100 mb-5">
    <div id="ans-feedback" class="w-100 p-3"></div>
</div>`;