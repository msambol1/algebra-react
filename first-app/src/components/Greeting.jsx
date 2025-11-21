export function Greeting({ morningMessage, morningRange, afternoonMessage, afternoonRange, eveningRange, eveningMessage, nightMessage, nightRange }) {
    const currentHour = new Date().getHours();

    const isMorning =
        currentHour >= morningRange[0] && currentHour < morningRange[1];
    const isAfternoon = currentHour >= afternoonRange[0] && currentHour < afternoonRange[1];
    const isEvening = currentHour >= eveningRange[0] && currentHour < eveningRange[1];
    const isNight = currentHour >= nightRange[0] && currentHour < nightRange[1];


    return (
        <>
            {isMorning && <p> {morningMessage}</p>}
            {isAfternoon && <p> {afternoonRange} </p>}
            {isEvening && <p> {eveningMessage} </p>}
            {isNight && <p> {nightMessage}</p>}

        </>
    );
}