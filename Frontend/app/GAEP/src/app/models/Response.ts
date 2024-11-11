/* ApiResponse: Dies ist das Hauptdatenmodell, das die JSON-Daten abbildet und alle wesentlichen Felder enthält.*/
/* Reference: Das Datenmodell für jede Referenz in der references-Liste, welche zusätzliche Informationen wie generated_summary, relevance, und eine Liste von details enthält. */
/* ReferenceDetail: Modell für detaillierte Informationen innerhalb einer Referenz.*/

/* Source: Modell für eine Quelle*/
export interface Source {
    source_id:number;
    content:string;
    url:string;
}

/* ReferenceDetail: Modell für detaillierte Informationen innerhalb einer Referenz.*/
export interface ReferenceDetail {
    position: number;
    title: string;
    content: string;
    image_base64?: string; // optional, da es nicht in jedem Detail enthalten ist
}

/* Reference: Das Datenmodell für jede Referenz in der references-Liste, welche zusätzliche Informationen wie generated_summary, relevance, und eine Liste von details enthält. */
export interface Reference {
    reference_id: string;
    generated_summary: string;
    relevance: string;
    sources: Source[];
    details: ReferenceDetail[];
    reference_text: string;
    reference_sort: number;
    level: string;
    level_sort: string;
    semantic_sort: number;
    base: string;
    guideline_url: string;
    chapter: string;
    search_string: string;
}

/* ApiResponse: Dies ist das Hauptdatenmodell, das die JSON-Daten abbildet und alle wesentlichen Felder enthält.*/
// Hauptdatenmodell, das die JSON-Hauptstruktur abbildet
export interface ApiResponse {
    optimized_question: string;
    generated_answer: string;
    guideline: string;
    n_references_returned: number;
    request_id: string;
    timestamp_request: number;
    timestamp_response: number;
    duration: number;
    model: string;
    user_question: string;
    references: Reference[];
}

