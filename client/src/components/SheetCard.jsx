export const SheetCard = ({sheet}) => {
    return (
        <div>
            <h5>{sheet.character_name}</h5>
            <p>{sheet.species}</p>
            { sheet.class && sheet.class.map((char) => (
                <p>{char.class_name} {char.subclass} {char.level}</p>
            ))}
        </div>
    )
}