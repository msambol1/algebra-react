export function RockPaperScissors({ choiceList }) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return <p>{choiceList[index]}</p>

}
