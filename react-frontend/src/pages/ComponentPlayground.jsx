import React, { useState } from "react";

// ui komponenty
import Button from "../components/Button/Button";
import ValidityBadge from "../components/GitComponents/ValidityBadge";
import Chip from "../components/GitComponents/Chip";
import LanguageTag from "../components/GitComponents/LanguageTag";
import RepoCard from "../components/GitComponents/RepoCard";
import CommitList from "../components/GitComponents/CommitList";
import InfoCard from "../components/GitComponents/InfoCard";
import ContactCard from "../components/Kontaktovania/ContactCard";
import UserContactCard from "../components/Kontaktovania/UserContactCard";
import TextInput from "../components/Input/TextInput";
import SelectField from "../components/Input/SelectField";
import TextAreaField from "../components/Input/TextAreaField";
import DateField from "../components/Input/DateField";
import RepoCardAnalyze from "../components/GitComponents/RepoCardAnalyze";

// tento page sluzi len ako prehlad komponentov
const ComponentsPlayground = () => {
    // jednoduchy state na ukazku selectovania karty
    const [taskSelected, setTaskSelected] = useState(false);

    return (
        <main className="playground">
            <h1 className="playground-title">Components Playground</h1>

            {/* sekcia buttons */}
            <section className="play-section">
                <h2>Buttons</h2>
                <div className="play-row">
                    <Button variant="primary" size="large">
                        Primary large
                    </Button>
                    <Button variant="secondary" size="large">
                        Secondary large
                    </Button>
                    <Button variant="primary" size="small">
                        Primary small
                    </Button>
                    <Button variant="secondary" size="small">
                        Secondary small
                    </Button>
                </div>
            </section>

            {/* validity badge */}
            <section className="play-section">
                <h2>ValidityBadge</h2>
                <div className="play-row">
                    <ValidityBadge status="platny" />
                    <ValidityBadge status="neplatny" />
                </div>
            </section>

            {/* chip */}
            <section className="play-section">
                <h2>Chip</h2>
                <div className="play-row">
                    <Chip text="TextABCdef" onRemove={() => console.log("remove chip")} />
                </div>
            </section>

            {/* language tag */}

            <LanguageTag
                iconUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"}
                text="Java"
            />
            <LanguageTag
                iconUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"}
                text="Python"
            />
            <LanguageTag
                iconUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}
                text="JavaScript"
            />
            {/* form fields */}
            <section className="play-section">
                <h2>Form fields</h2>
                <div className="play-grid-two">
                    <TextInput label="Nazov profilu" placeholder="Junior developer" />

                    <SelectField
                        label="Typ kontaktu"
                        defaultValue="online"
                        options={[
                            { value: "online", label: "Online" },
                            { value: "osobny", label: "Osobny" },
                        ]}
                    />

                    <TextAreaField
                        label="Sprava"
                        placeholder="Dobrý den, radi by sme sa s vami spojili..."
                    />

                    <DateField label="Dátum a čas" />
                </div>
            </section>

            {/* repo card */}
            <section className="play-section">
                <h2>RepoCard</h2>
                <div className="play-row">
                    <RepoCard icon={"🗄️"} title="WebStranka" commits={125} />
                </div>
            </section>

            {/* commit list */}
            <section className="play-section">
                <h2>CommitList</h2>
                <CommitList
                    data={[
                        { label: "P", kind: "perfektivne", count: 19 },
                        { label: "A", kind: "adaptivne", count: 9 },
                        { label: "K", kind: "korektivne", count: 68 },
                        { label: "O", kind: "admin", count: 29 },
                    ]}
                />
            </section>

            {/* info card */}
            <section className="play-section">
                <h2>InfoCard</h2>
                <div className="play-row">
                    <InfoCard
                        title="Frekvencia commitov"
                        value="1,48 commit / den"
                    />
                </div>
            </section>

            {/* task card */}
            <section className="play-section">
                <h2>TaskCard</h2>
                <div className="play-row">
                    <RepoCardAnalyze
                        title="Zadanie programovanie"
                        commits={10}
                        selected={taskSelected}
                        onClick={() => setTaskSelected((prev) => !prev)}
                    />
                    <RepoCardAnalyze
                        title="Zadanie programovanie"
                        commits={10}
                        language="Java"
                        selected={false}
                    />
                </div>
            </section>

            {/* contact card – firma */}
            <section className="play-section">
                <h2>ContactCard (firma)</h2>
                <div className="play-column">
                    <ContactCard
                        kontaktId="Y8584668"
                        datumCas="27.5.2026 8:30"
                        typ="Online"
                        miesto="Online"
                        stav="Odmietol"
                        onDelete={() => console.log("vymazat")}
                    />

                    <ContactCard
                        kontaktId="Y8584668"
                        datumCas="27.5.2026 8:30"
                        typ="Online"
                        miesto="Online"
                        stav="Potvrdil ucast"
                        onComplete={() => console.log("dokoncit")}
                        onCancel={() => console.log("zrusit")}
                    />

                    <ContactCard
                        kontaktId="Y8584668"
                        datumCas="27.5.2026 8:30"
                        typ="Online"
                        miesto="Online"
                        stav="Potvrdil ucast"
                        isNew={true}
                        onComplete={() => console.log("dokoncit")}
                        onCancel={() => console.log("zrusit")}
                    />
                </div>
            </section>

            {/* user contact card – uzivatel */}
            <section className="play-section">
                <h2>UserContactCard (uzivatel)</h2>
                <div className="play-column">
                    <UserContactCard
                        firma="Developers s.r.o"
                        datumCas="26.5.2026 8:30"
                        typ="Online"
                        miesto="Online"
                        onShow={() => console.log("zobrazit")}
                        onDelete={() => console.log("vymazat")}
                    />

                    <UserContactCard
                        firma="Developers s.r.o"
                        datumCas="26.5.2026 8:30"
                        typ="Online"
                        miesto="Online"
                        sprava="Dobry den, chceli by sme s vami hovorit o pozicii..."
                        onAccept={() => console.log("potvrdit")}
                        onReject={() => console.log("odmietnut")}
                        onDelete={() => console.log("vymazat")}
                    />
                </div>
            </section>
        </main>
    );
};

export default ComponentsPlayground;
