import { Link } from "react-router-dom"

export const SheetCard = ({sheet}) => {
    return (
        <div className="sheet-card">
            <div className="sheet-card-details flex flex-col text-center">
                <h4 className="pl-2 pr-2 pt-4">{sheet.character_name}</h4>
                <div className="sheet-card-classes flex flex-col mb-4">
                    { sheet.class && sheet.class.map((char) => (
                            <p>{char.class_name} {char.subclass} {char.level}</p>
                    ))}
                </div>
            </div>
            <div className="sheet-card-options flex gap-6 justify-center p-2">
                <Link to={`/character/${sheet._id}`}>
                    <button>View</button>
                </Link>
            </div>
        </div>
    )
}