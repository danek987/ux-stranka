import React from "react";
import "./CommitList.css";

// data = [
//   { label: "P", kind: "perfektivne", count: 19 },
//   { label: "A", kind: "adaptivne", count: 9 },
//   { label: "K", kind: "korektivne", count: 68 },
//   { label: "O", kind: "admin", count: 29 }
// ]

const CommitList = ({ data = [] }) => {
    const total = data.reduce((sum, item) => sum + item.count, 0);

    return (
        <div className="commit-list">
            {data.map((item) => {
                const percent = total > 0 ? (item.count / total) * 100 : 0;
                // CSS premenna podla typu
                const colorVar = `var(--classification-${item.kind})`;

                return (
                    <div key={item.label} className="commit-row">
                        <div
                            className="commit-dot"
                            style={{ backgroundColor: colorVar }}
                        />

                        <div className="commit-label chart-10">{item.label}</div>

                        <div className="commit-bar">
                            <div
                                className="commit-bar-fill"
                                style={{
                                    width: `${percent}%`,
                                    backgroundColor: colorVar
                                }}
                            />
                            <span className="commit-bar-text chart-10">{item.count}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CommitList;
