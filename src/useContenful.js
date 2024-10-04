import {
    React,
    useState,
    useEffect
} from "react";
import {
    createClient
} from "contentful";


const localCache = {};

const useContentful = () => {
    const [image, setImage] = useState("");

    const client = createClient({
        space: process.env.REACT_APP_space_id,
        accessToken: process.env.REACT_APP_contentPreviewApi,
    });

    useEffect(() => {
        getImages().then((res) => setImage(res)).catch((err) => console.error(err.message))
    }, [image]);

    const getImages = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "componentHeroBanner",
                select: "fields",
                order: "fields.internalName"
            });
            const imgUrlAddress = entries.items[0].fields.image.fields.file.url;
            if (localCache.url !== imgUrlAddress) {
                localCache.url = imgUrlAddress;
                return localCache.url;
            } else {
                setImage(localCache.url);
                return localCache.url;
            }
        } catch (error) {
            throw new Error(`Error fetching background image: ${error.message}`)
        };
    }
    return [image];

};

export default useContentful;