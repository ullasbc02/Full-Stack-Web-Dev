export function Slot({ slots }) {
    let prevSlot = slots[0];
    let flag = false;

    return (
        <>
            <div>
                {slots.map((slot, index) => {
                    if (prevSlot === slot) {
                        prevSlot = slot;
                        return <p style={{ display: 'inline' }} key={index}>{slot}</p>;
                    } else {
                        flag = true;
                        prevSlot = slot;
                        return <p style={{ display: 'inline' }} key={index}>{slot}</p>;
                    }
                })}
            </div>
            <div>
                {flag ? (
                    <h3 style={{color: 'red'}}>You Lose!!</h3>
                ) : (
                    <>
                        <h2 style={{color: 'green'}}>Congrats</h2>
                        <h3 style={{color: 'green'}}>You Win!!</h3>
                    </>
                )}
            </div>
        </>
    );
}