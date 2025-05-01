export const SheetCard = ({sheet}) => {
    return (
        <div>
            <h5>{sheet.character_name}</h5>
            <p>{sheet.species}</p>
            <p>{sheet.class}</p>
            <ul className="flex gap-10">
                <li>{sheet.stats.strength}</li>
                <li>{sheet.stats.dexterity}</li>
                <li>{sheet.stats.constitution}</li>
                <li>{sheet.stats.intelligence}</li>
                <li>{sheet.stats.wisdom}</li>
                <li>{sheet.stats.charisma}</li>
            </ul>
        </div>
    )
}