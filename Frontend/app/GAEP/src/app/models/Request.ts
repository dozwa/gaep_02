/* Datenmodell für die Anfrage an den Backend Server */
export interface Request {
    frage: string; // Benutzerfrage
    ll: string; // Leitlinie
    a_laenge: number; // ????
    n_empfehlung: number; // ???
    relevanz: number; //???
    detail: Boolean; //???
}