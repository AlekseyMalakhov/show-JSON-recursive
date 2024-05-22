import { css } from "@emotion/react";
import { useState } from "react";

const container = css({
    display: "block",
    marginLeft: "10px",
    backgroundColor: "greenyellow",
    width: "fit-content",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
});

type TypeItem = {
    name: string;
    value: string | TypeItem[];
};

export default function Item({ value, name }: TypeItem) {
    const [showChildren, setShowChildren] = useState(true);

    const toggle = () => {
        if (showChildren) {
            setShowChildren(false);
        } else {
            setShowChildren(true);
        }
    };

    if (Array.isArray(value)) {
        return (
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                <div style={{ display: "inline-block" }}>{name}</div>
                <div style={{ display: "inline-block", marginLeft: "10px" }}>
                    <button onClick={toggle}>{showChildren ? "-" : "+"}</button>
                </div>
                {showChildren ? (
                    <div>
                        {value.map((item) => (
                            <Item name={item.name} value={item.value} key={item.name} />
                        ))}
                    </div>
                ) : null}
            </div>
        );
    }
    return (
        <div css={container}>
            <div style={{ display: "inline-block" }}>{name}</div>
            <div style={{ marginLeft: "10px", display: "inline-block" }}>Value: {value}</div>
        </div>
    );
}
