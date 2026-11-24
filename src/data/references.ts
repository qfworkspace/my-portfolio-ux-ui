export interface DocumentVersion {
    label: string;
    pdfPath: string;
    thumbPath: string;
}

export interface ReferenceItem {
    slug: string;
    firstName: string;
    lastName: string;
    position: string;
    picture: string;
    pictureAlt?: string;
    quote: string;
    viewerTitle: string;
    versions: DocumentVersion[];
}

export const REFERENCES: ReferenceItem[] = [
    {
        slug: "gregory-mugnier",
        firstName: "Grégory",
        lastName: "Mugnier",
        position: "Ph.D Marketing & Consumer Psychology — CEO Axone & Partners",
        picture: "/asset/images/profile-picture-person.png",
        quote: "Lorem ipsum dolor sit amet consectetur. // Tristique dui phasellus viverra eget sed.",
        viewerTitle: "Grégory Mugnier’s reference",
        versions: [
            {
                label: "English translation",
                pdfPath: "/asset/pdf/reference-letter-type.pdf",
                thumbPath: "/asset/images/reference-letter-type.png",
            },
            {
                label: "Original version",
                pdfPath: "/asset/pdf/original.pdf",
                thumbPath: "/asset/images/reference-letter-type.png",
            },
        ],
    },
    // Tu pourras dupliquer ce bloc pour ajouter tes autres références !
];