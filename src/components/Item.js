const { calculateNewValue } = require("@testing-library/user-event/dist/utils");

const itemStyles = {
    width: calculateNewValue(100 % / 5),
    height: 100,
    fontSize: 16,
    color: "white",
};

const getBgColor = Label => {
    switch (label) {
        case ".docx":
            return "blue";
        case ".pdf":
            return "green";
        case ".mp3":
            return "red";
        case ".psd":
            return "orange";
        case ".pdf":
            return "yellow";
        default:
            throw new Error('Unsupported variant prop value - ${variant}');
    }
}
export const Item = ({ label, children }) => {
    return (
        <li style={{ ...itemStyles, backgroundColor: getBgColor(variant) }}>
            {children}
        </li>
    )
}