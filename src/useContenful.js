import {
    createClient
} from "contentful";

const useContentful = () => {
    const client = createClient({
        space: process.env.REACT_APP_space_id,
        accessToken: process.env.REACT_APP_contentPreviewApi,
    });

    const getImages = async () => {
        try {
            let urlAddress;
            const entries = await client.getEntries({
                content_type: "componentHeroBanner",
                select: "fields",
                order: "fields.internalName"
            });
            return urlAddress = entries.items[0].fields.image.fields.file.url;
        } catch (error) {
            console.log(`Error fetching background image: ${error}`)
        };
    }
    return {
        getImages
    };

};

export default useContentful;