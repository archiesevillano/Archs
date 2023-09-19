
export const TechstackSchema = {
    name: String,
    logo: String,
    href: String
}

export const CertificateSchema = {
    title: String,
    issuedDate: String,
    organization: String,
    photo: String,
    description: String,
    logo: String
}

export const WebToolSchema = {
    name: String,
    logo: String,
    photo: String,
    link: String,
    description: String
}

export const WorkExpSchema = {
    position: String,
    date: String,
    companyName: String,
    companyLogo: String
}


export const ProjectSchema = {
    title: String,
    logo: String,
    sourceLink: String,
    type: String,
    description: String,
    details: Array,
    liveLink: String,
    photo: String
}

export const HobbySchema = {
    contents: Array,
    media: [
        {
            photo: String,
            description: String
        }
    ]
}