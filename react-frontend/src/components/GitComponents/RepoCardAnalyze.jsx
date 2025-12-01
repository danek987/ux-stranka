import React from "react";
import "./RepoCardAnalyze.css";

const RepoCardAnalyze = ({
                      title,
                      commits,
                      language = null, // ak nie je zadany tak variant A
                      selected = false,
                      onClick
                  }) => {

    // classy podľa stavu
    const classNames = [
        "task-card",
        selected ? "task-selected" : "",
    ].join(" ");

    return (
        <div className={classNames} onClick={onClick}>
            <div className="task-title h3-20">{title}</div>

            <div className="task-info body-medium-16"> {/*Variant A*/}
                Počet commitov: {commits}
            </div>

            {language && ( //+variant B
                <div className="task-info body-medium-16">
                    Jazyk: {language}
                </div>
            )}
        </div>
    );
};

export default RepoCardAnalyze;
