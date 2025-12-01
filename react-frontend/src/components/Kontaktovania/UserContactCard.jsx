import React from "react";
import "./UserContactCard.css";
import Button from "../Button/Button";

const UserContactCard = ({
                             firma,
                             datumCas,
                             typ,
                             miesto,
                             sprava = null,
                             onShow,
                             onDelete,
                             onAccept,
                             onReject
                         }) => {

    const className = "user-contact-card";

    return (
        <div className={className}>

            {/* Horny blok: Firma vlavo + Info vpravo hore ak je sprava */}
            <div className="uc-top-row">
                <div className="uc-header h3-20">{firma}</div>

                {sprava && (
                    <div className="uc-info-right body-medium-16">
                        <div>Dátum a čas: {datumCas}</div>
                        <div>Typ: {typ}</div>
                        <div>Miesto: {miesto}</div>
                    </div>
                )}
            </div>

            {/* Info pod sebou ak nie je sprava */}
            {!sprava && (
                <div className="uc-info body-medium-16">
                    <div>Dátum a čas: {datumCas}</div>
                    <div>Typ: {typ}</div>
                    <div>Miesto: {miesto}</div>
                </div>
            )}

            {/* Sprava */}
            {sprava && (
                <div className="uc-message body-medium-16">
                    {sprava}
                </div>
            )}

            {/* Akcie podla varianty */}
            <div className="uc-actions">
                {!sprava && (
                    <>
                        <Button variant="primary" size="small" onClick={onShow}>Zobraziť</Button>
                        <Button variant="secondary" size="small" onClick={onDelete}>Vymazať</Button>
                    </>
                )}

                {sprava && (
                    <>
                        <Button variant="primary" size="small" onClick={onAccept}>Potvrdiť účasť</Button>
                        <Button variant="primary" size="small" onClick={onReject}>Odmietnuť</Button>
                        <Button variant="secondary" size="small" onClick={onDelete}>Vymazať</Button>
                    </>
                )}
            </div>
        </div>

    );
};

export default UserContactCard;
