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
        position: "Ph.D Marketing & Consumer Psychology — CEO of Axone & Partners and Flèche",
        picture: "/asset/images/reference-profile-mugnier.png",
        quote: "Qetsia is an exemplary student who actively and pertinently invests herself in each of the projects she has managed.// She demonstrates remarkable maturity and creativity, which will serve her well in her future professional endeavors.  ",
        viewerTitle: "Grégory Mugnier’s reference",
        versions: [
            {
                label: "English translation",
                pdfPath: "/asset/pdf/reference-en-mugnier.pdf",
                thumbPath: "/asset/thumbnail/reference-thumb-en-mugnier.png",
            },
            {
                label: "Original version",
                pdfPath: "/asset/pdf/reference-fr-mugnier.pdf",
                thumbPath: "/asset/thumbnail/reference-thumb-fr-mugnier.png",
            },
        ],
    },

    {
        slug: "abdul-moin",
        firstName: "Abdul",
        lastName: "Moin",
        position: "Co-initiator of People's Care",
        picture: "/asset/images/reference-profile-moin.png",
        quote: "I have known Qetsia since 2024, at a time when I was looking for a reliable professional to support me in my business ventures.// She has proven to be truly impressive, demonstrating strong communication skills and an exceptional work ethic.",
        viewerTitle: "Abdul Moin's reference",
        versions: [
            {
                label: "Original version",
                pdfPath: "/asset/pdf/reference-en-moin.pdf",
                thumbPath: "/asset/thumbnail/reference-thumb-en-moin.png",
            },
        ],
    },

    {
        slug: "anissa-belbey",
        firstName: "Anissa",
        lastName: "Belbey",
        position: "Co-founder of ARQ Agency",
        picture: "/asset/images/reference-profile-belbey.png",
        quote: "Citation de recommandation.",
        viewerTitle: "Anissa Belbey's reference",
        versions: [
            {
                label: "English translation",
                pdfPath: "/asset/pdf/reference-en-belbey.pdf",
                thumbPath: "/asset/images/reference-thumb-en-belbey.png",
            },
            {
                label: "Original version",
                pdfPath: "/asset/pdf/reference-fr-belbey.pdf",
                thumbPath: "/asset/thumbnail/reference-thumb-fr-belbey.png",
            },
        ],
    },

    {
        slug: "raki-kane",
        firstName: "Raki",
        lastName: "Kane",
        position: "Founder of Sirmé Hair",
        picture: "/asset/images/reference-profile-kane.png",
        quote: "Citation de recommandation.",
        viewerTitle: "Raki Kane's reference",
        versions: [
            {
                label: "English translation",
                pdfPath: "/asset/pdf/reference-en-kane.pdf",
                thumbPath: "/asset/images/reference-thumb-en-kane.png",
            },
            {
                label: "Original version",
                pdfPath: "/asset/pdf/reference-fr-kane.pdf",
                thumbPath: "/asset/thumbnail/reference-thumb-fr-kane.png",
            },
        ],
    },

    {
        slug: "judith-aroq",
        firstName: "Judith",
        lastName: "Aroq",
        position: "Founder of Atelier Good Juju",
        picture: "/asset/images/reference-profile-aroq.png",
        quote: "Qetsia demonstrated exemplary professionalism throughout our collaboration [...] and possesses strong communication skills.// Throughout the project, I was able to observe her rigor and attention to detail. She consistently met the set deadlines and delivered high-quality work.",
        viewerTitle: "Judith Aroq's reference",
        versions: [
            {
                label: "English translation",
                pdfPath: "/asset/pdf/reference-en-aroq.pdf",
                thumbPath: "/asset/thumbnail/reference-thumb-en-aroq.png",
            },
            {
                label: "Original version",
                pdfPath: "/asset/pdf/reference-fr-aroq.pdf",
                thumbPath: "/asset/thumbnail/reference-thumb-fr-aroq.png",
            },
        ],
    },

    {
        slug: "charlotte-mallon",
        firstName: "Charlotte",
        lastName: "Mallon",
        position: "English Language Lecturer – Faculty of Languages, Jean Moulin Lyon 3 University",
        picture: "/asset/images/reference-profile-mallon.png",
        quote: "She works well in a team and completed her group assignment to a very high standard.// I am constantly impressed by Qetsia’s innovative ideas and her commitment to developing her skills, as evidenced by her regular participation in creative writing competitions.",
        viewerTitle: "Charloote Mallon's reference",
        versions: [
            {
                label: "Original version",
                pdfPath: "/asset/pdf/reference-en-mallon.pdf",
                thumbPath: "/asset/thumbnail/reference-thumb-en-mallon.png",
            },
        ],
    },



];