import { css } from "@emotion/react";

const container = css({
    display: "flex",
    marginLeft: "10px",
});

type TypeItem = {
    name: string;
    value: string | TypeItem[];
};

export default function Item({ value, name }: TypeItem) {
    if (Array.isArray(value)) {
        return (
            <div style={{ marginLeft: "10px" }}>
                <div>{name}</div>
                <div style={{ marginLeft: "10px" }}>
                    {value.map((item) => (
                        <Item name={item.name} value={item.value} key={item.name} />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div css={container}>
            <div>{name}</div>
            <div style={{ marginLeft: "10px" }}>Value: {value}</div>
        </div>
    );
}
